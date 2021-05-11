# yatag

# Yet Another Tag Annotations Generator

yatag is a tool for generating TypeScript `index.d.ts` from jsdoc-compatible type annotations.

It was created to generate the `index.d.ts` of the project `node-gdal-async` which is a native Node.js addon with both JS and C++ code. It is tested with `yuidoc` but should also support other jsdoc-compatible annotations.

As opposed to the now built-in capability of the Typescript compilator, `yatag` solves a very simple problem in a very simple manner.

`yatag` is completely language-agnostic as it doesn't parse the language at all - it parses only the jsdoc-compatible type annotations blocks.

# Why another type generator?

- Because ever since my childhood I always wanted to create at least one software package with a name starting with 'yet another'
- Because the automatic `index.d.ts` generation introduced by TypeScript in 3.7 is still badly broken and even if it is constantly improving, there are stil show-stopping bugs in 4.2 - which given its overly complex approach to an otherwise very simple problem is absolutely understandable
- Because even if the TypeScript automatic generation one day eventually works, it will still support only JavaScript, while `yatag`, originally written for a Node.js native addon (`node-gdal-async`) supports C++

# Usage

Nothing is more simple:

```shell
npm install --save-dev yatag
```

Then create `yatag.config.js` with:

```js
module.exports = {
  include: ["src/**/*.@(cpp|hpp|h|c)", "lib/*.js"],
  output: "index.d.ts",
  root: "SuperDuperModule",
  mangle: (name) => name.match(/oldfashion/g, "modern"),
  filter: (name) => !name.match(/__hidden_sys_internals/g),
};
```

And finally run it:

```shell
yatag
```

Voila, you have generated your type definitions.
