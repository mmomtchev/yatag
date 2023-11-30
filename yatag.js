#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const config = require(path.join(process.cwd(), 'yatag.config.js'));

function mangle(name) {
    if (name && config.mangle)
        return config.mangle(name);
    return name;
}

function expandParams(children) {
    if (!children) return '';
    const expanded = Object.keys(children).filter((n) => n.startsWith('param#')).map((p) =>
        `${children[p].name}${children[p].defValue ? '?' : ''}: ${children[p].type || 'any'}`);
    return expanded.join(', ');
}

function expandMethod(defn, prefix) {
    let output = `\n  ${defn.description || ''}\n`;
    output += `  ${prefix || ''}${defn.name}(`;
    output += expandParams(defn.children);
    output += `): ${defn.return || 'void'}\n`;
    return output;
}

function expandProperty(defn, prefix) {
    let output = `\n  ${defn.description || ''}\n`;
    output += `  ${prefix || ''}${defn.name}`;
    output += expandParams(defn.children);
    output += `: ${defn.type || 'unknown'}\n`;
    return output;
}

function expandType(defn, declaration) {
    let output = declaration;
    if (defn.description) output += defn.description;
    const props = Object.keys(defn.children).filter((n) => n.startsWith('property#'));
    if (props.length > 0) {
        output += '{\n';
        for (const propId of props) {
            const prop = defn.children[propId];
            output += `\t${prop.name}${prop.defValue ? '?' : ''}: ${prop.type};\n`;
        }
        output += '}';
    } else if (defn.type) {
        output += defn.type;
    }
    output += '\n\n';
    return output;
}

const output = fs.createWriteStream(config.output);

let verbose = () => undefined;
if (process.argv.includes('-v')) {
    verbose = console.debug;
}

const root = { context: 'module', name: config.root, children: {} };
let inputFiles = [];
for (const pattern of config.include) {
    inputFiles = inputFiles.concat(glob.sync(pattern));
}

if (config.header) {
    output.write(config.header);
    output.write('\n\n');
}

if (config.augmentation) {
    output.write(`declare module '${config.augmentation}' {\n\n`);
}

for (const file of inputFiles) {
    verbose('-- processing', file);
    const code = fs.readFileSync(file, 'utf-8');

    let currentClass = root;
    for (const comment of code.matchAll(/\/\*\*\s(\*(?!\/)|[^*])*\*\//g)) {
        let newElement = { children: {}, description: comment[0] };
        let targetClass;
        for (const tag of comment[0].matchAll(/@(\S+)(?:[ \t]+(.*))?/g)) {
            const command = tag[1];
            const options = tag[2];
            let groups, type, name;
            let defValue = false;
            if (options) {
                groups = options.match(/(\{(?<type>[^}]+)\})?\s*?((?<name>[^\s^<^>{}]+(<.*>)?)\s*((?<description>.*))?)?$/).groups;
                if (config.filter && options && groups.name && !config.filter(groups.name))
                    continue;
                name = mangle(groups.name);
                type = groups.type ? mangle(groups.type) : undefined;

                if (name) {
                    const deftok = name.match(/\[([^=]+)(?:=(.+))?]/);
                    if (deftok) {
                        name = deftok[1];
                        defValue = ` = ${deftok[2] || 'undefined'}`;
                    }
                }
            }
            verbose(file, currentClass.name, ':', command, options);
            try {
                switch (command) {
                case 'interface':
                    newElement.context = 'interface';
                    newElement.type = type;
                    newElement.name = name;
                    newElement.description = groups.description;
                    break;
                // Both @for and @class create a class but only @class creates a class context
                case 'class':
                    newElement.context = 'class';
                    newElement.name = name;
                    break;
                case 'for':
                case 'memberof':
                    if (!root.children[`class#${name}`]) {
                        root.children[`class#${name}`] = { context: 'class', name, children: {} };
                    }
                    targetClass = root.children[`class#${name}`];
                    break;
                case 'extends':
                    newElement.extends = name;
                    break;
                case 'function':
                case 'method':
                    newElement.context = 'method';
                    newElement.name = name;
                    break;
                case 'static':
                    newElement.static = true;
                    break;
                case 'var':
                case 'member':
                case 'property':
                case 'attribute':
                    if (newElement.context) {
                        newElement.children[`property#${name}`] = { context: 'property', type, name, description: groups.description, defValue };
                    } else {
                        newElement.context = 'property';
                        newElement.name = name;
                    }
                    break;
                case 'type':
                    newElement.type = type;
                    break;
                case 'typedef':
                    newElement.context = 'typedef';
                    newElement.type = groups.type;
                    newElement.name = groups.name;
                    newElement.description = groups.description;
                    break;
                case 'return':
                case 'returns':
                    newElement.return = type;
                    break;
                case 'param':
                    newElement.children[`param#${name}`] = { context: 'param', type, name, description: groups.description, defValue };
                    break;
                case 'readonly':
                case 'readOnly':
                case 'final':
                    newElement.readonly = true;
                    break;
                case 'name':
                    newElement.name = name;
                    break;
                case 'kind':
                    switch (name) {
                    case 'member':
                        newElement.context = 'property';
                        break;
                    case 'method':
                        newElement.context = 'method';
                        break;
                    }
                    break;
                case 'constant':
                    newElement.context = 'property';
                    newElement.readonly = true;
                    if (groups) {
                        if (groups.type)
                            newElement.type = groups.type;
                        if (groups.name)
                            newElement.name = groups.name;
                    }
                    break;
                case 'exports':
                    root.exports = options;
                    break;
                default:
                    continue;
                }
            } catch (e) {
                console.error(comment[0]);
                console.error(`Error parsing element "${command}" "${options}" in context ${newElement.context}:${newElement.name} : ${e}`);
                process.exit(1);
            }
        }

        if (newElement.context === 'method') {
            if (newElement.name === 'Symbol.iterator' || newElement.name === '@@iterator') {
                newElement.context = 'iterator';
                newElement.name = '';
            }
            if (newElement.name === 'Symbol.asyncIterator' || newElement.name === '@@asyncIterator') {
                newElement.context = 'asyncIterator';
                newElement.name = '';
            }
        }

        let key = `${newElement.context}#${newElement.name}`;
        // method overloading
        if (newElement.context === 'method')
            key = `method#${newElement.name}#${Object.keys(newElement.children).join('#')}`;
        // property overloading (static vs non-static)
        if (newElement.context === 'property')
            key = `property#${newElement.name}#${newElement.static ? 'static' : 'nonstatic'}`;
        if (!newElement.context)
            continue;
        if (!targetClass)
            targetClass = currentClass;
        if (['class', 'typedef', 'interface'].includes(newElement.context)) {
            targetClass = root;
        }
        if (!targetClass.children[key]) {
            targetClass.children[key] = newElement;
        } else {
            // multiple ocurrences of the same @class/@for, get only the comment if there is any
            if (!targetClass.children[key].description)
                targetClass.children[key].description = newElement.description;
        }
        if (newElement.context === 'class') {
            currentClass = root.children[`class#${newElement.name}`];
        }
    }
}

if (config.root && root.children[`class#${config.root}`]) {
    const rootClass = root.children[`class#${config.root}`];
    root.description = rootClass.description;
    root.children = Object.assign(root.children, rootClass.children);
    delete root.children[`class#${config.root}`];
}

for (const typeName of Object.keys(root.children).filter((n) => n.startsWith('typedef#')).sort()) {
    const defn = root.children[typeName];
    output.write(expandType(defn, `${root.exports ? 'declare' : 'export'} type ${defn.name} = `));
}

for (const ifName of Object.keys(root.children).filter((n) => n.startsWith('interface#')).sort()) {
    const defn = root.children[ifName];
    output.write(expandType(defn, `${root.exports ? 'declare' : 'export'} interface ${defn.name}${defn.extends ? ` extends ${defn.extends}` : ''} `));
}

for (const name of Object.keys(root.children).filter((n) => n.startsWith('property#')).sort()) {
    const defn = root.children[name];
    const prefix = defn.readonly ? `${root.exports ? 'declare' : 'export'} const ` : `${root.exports ? 'declare' : 'export'} let `;
    output.write(expandProperty(defn, prefix));
}

for (const name of Object.keys(root.children).filter((n) => n.startsWith('method#')).sort()) {
    const defn = root.children[name];
    output.write(expandMethod(defn, `${root.exports ? 'declare' : 'export'} function `));
}

for (const className of Object.keys(root.children).filter((n) => n.startsWith('class#')).sort()) {
    const klass = root.children[className];
    if (klass.context === 'class') {
        if (!config.augmentation)
            output.write(`${root.exports ? 'declare' : 'export'} class ${klass.name}`);
        else
            output.write(`${root.exports ? 'declare' : 'export'} interface ${klass.name}`);
        if (klass.extends)
            output.write(` extends ${klass.extends}`);
        if (klass.children['iterator#'] || klass.children['asyncIterator#']) {
            const iterables = [];
            if (klass.children['iterator#'])
                iterables.push(`Iterable<${mangle(klass.children['iterator#'].type) || 'any'}>`);
            if (klass.children['asyncIterator#'])
                iterables.push(`AsyncIterable<${mangle(klass.children['asyncIterator#'].type) || 'any'}>`);
            output.write(` implements ${iterables.join(', ')}`);
        }
        output.write(` {\n${klass.description || ''}\n`);
        if (!config.augmentation)
            output.write(`  constructor(${expandParams(klass.children)})\n`);
        for (const prop of Object.keys(klass.children).filter((n) => n.startsWith('property#'))) {
            const defn = klass.children[prop];
            let prefix = defn.static ? 'static ' : '';
            prefix += defn.readonly ? 'readonly ' : '';
            output.write(expandProperty(defn, prefix));
        }
        if (klass.children['iterator#'])
            output.write(`  [Symbol.iterator](): Iterator<${mangle(klass.children['iterator#'].type) || 'any'}>\n`);
        if (klass.children['asyncIterator#'])
            output.write(`  [Symbol.asyncIterator](): AsyncIterator<${mangle(klass.children['asyncIterator#'].type) || 'any'}>\n`);
        for (const method of Object.keys(klass.children).filter((n) => n.startsWith('method#'))) {
            const defn = klass.children[method];
            output.write(expandMethod(defn, defn.static ? 'static ' : undefined));
        }
        output.write('}\n\n');
    }
}

if (config.augmentation) {
    output.write('}\n');
}

if (root.exports) {
    output.write(root.exports);
}

if (config.footer) {
    output.write(config.footer);
    output.write('\n\n');
}
