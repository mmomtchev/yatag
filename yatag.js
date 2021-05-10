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
    const expanded = Object.keys(children).filter((n) => n.startsWith('param#')).map((p) =>
        `${children[p].name}${children[p].defValue ? '?' : ''}: ${children[p].type || 'any'}`);
    return expanded.join(', ');
}

function expandMethod(defn, prefix) {
    let output = `\n  ${defn.description}\n`;
    output += `  ${prefix || ''}${defn.name}(`;
    output += expandParams(defn.children);
    output += `): ${defn.return || 'void'}\n`;
    return output;
}

function expandProperty(defn, prefix) {
    let output = `\n  ${defn.description}\n`;
    output += `  ${prefix || ''}${defn.name}`;
    output += expandParams(defn.children);
    output += `: ${defn.type || 'unknown'}\n`;
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
            const name = options && mangle(options.match(/\S+/)[0]);
            if (config.filter && options && !config.filter(options))
                continue;
            verbose(file, currentClass.name, ':', command, options);
            try {
                switch (command) {
                case 'interface':
                    newElement.context = 'interface';
                    newElement.type = options.match(/\S+\s+(.*)/)[1];
                    newElement.name = name;
                    break;
                case 'class':
                    newElement.context = 'class';
                    newElement.name = name;
                    break;
                case 'for':
                    if (!root.children[`class#${name}`]) {
                        root.children[`class#${name}`] = { context: 'class', name, children: {} };
                    }
                    targetClass = root.children[`class#${name}`];
                    break;
                case 'extends':
                    newElement.extends = name;
                    break;
                case 'method':
                    if (name === 'Symbol.iterator') {
                        newElement.context = 'iterator';
                        newElement.name = '';
                    } else {
                        newElement.context = 'method';
                        newElement.name = name;
                    }
                    break;
                case 'static':
                    newElement.static = true;
                    break;
                case 'property':
                case 'attribute':
                    newElement.context = 'property';
                    newElement.name = name;
                    break;
                case 'type':
                    newElement.type = mangle(name.match(/\{(.+)\}/)[1]);
                    break;
                case 'typedef':
                    newElement.context = 'typedef';
                    newElement.type = options.match(/\S+\s+(.*)/)[1];
                    newElement.name = name;
                    break;
                case 'return':
                    newElement.return = mangle(name.match(/\{(.+)\}/)[1]);
                    break;
                case 'param':
                    {
                        const tokens = options.match(/\{(.+)\}\s+(\S+)\s*(.*)/);
                        const type = mangle(tokens[1]);
                        let name = mangle(tokens[2]);
                        let defValue = '';
                        const deftok = name.match(/\[([^=]+)(?:=(.+))?]/);
                        if (deftok) {
                            name = deftok[1];
                            defValue = ` = ${deftok[2] || 'undefined'}`;
                        }
                        const description = tokens[3];
                        newElement.children[`param#${name}`] = { context: 'param', type, name, description, defValue };
                    }
                    break;
                case 'readonly':
                case 'final':
                    newElement.readonly = true;
                    break;
                default:
                    continue;
                }
            } catch (e) {
                console.error(comment[0]);
                console.error(`Error parsing element ${command} ${options} in context ${newElement.context}:${newElement.name} : ${e}`);
                throw e;
            }
        }
        if (!newElement.context)
            continue;
        if (!targetClass)
            targetClass = currentClass;
        if (newElement.context === 'class') {
            targetClass = root;
        }
        if (!targetClass.children[`${newElement.context}#${newElement.name}`]) {
            targetClass.children[`${newElement.context}#${newElement.name}`] = newElement;
        } else {
            if (!targetClass.children[`${newElement.context}#${newElement.name}`].description)
                targetClass.children[`${newElement.context}#${newElement.name}`].description = newElement.description;
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
    output.write(`export type ${defn.name} = ${defn.type}\n\n`);
}

for (const ifName of Object.keys(root.children).filter((n) => n.startsWith('interface#')).sort()) {
    const defn = root.children[ifName];
    output.write(`export interface ${defn.name} ${defn.type}\n\n`);
}

for (const name of Object.keys(root.children).filter((n) => n.startsWith('property#')).sort()) {
    const defn = root.children[name];
    output.write(expandProperty(defn, 'export const '));
}

for (const name of Object.keys(root.children).filter((n) => n.startsWith('method#')).sort()) {
    const defn = root.children[name];
    output.write(expandMethod(defn, 'export function '));
}

for (const className of Object.keys(root.children).filter((n) => n.startsWith('class#')).sort()) {
    const klass = root.children[className];
    if (klass.context === 'class') {
        output.write(`export class ${klass.name}`);
        if (klass.extends)
            output.write(` extends ${klass.extends}`);
        if (klass.children['iterator#'])
            output.write(' implements Iterable');
        output.write(` {\n${klass.description}\n`);
        output.write(`  constructor(${expandParams(klass.children)})\n`);
        for (const prop of Object.keys(klass.children).filter((n) => n.startsWith('property#'))) {
            const defn = klass.children[prop];
            output.write(expandProperty(defn));
        }
        for (const method of Object.keys(klass.children).filter((n) => n.startsWith('method#'))) {
            const defn = klass.children[method];
            output.write(expandMethod(defn, defn.static ? 'static ' : undefined));
        }
        output.write('}\n\n');
    }
}
