# yatag


[![License: ISC](https://img.shields.io/github/license/mmomtchev/yatag)](https://github.com/mmomtchev/yatag/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/yatag)](https://www.npmjs.com/package/yatag)
[![Node.js CI](https://github.com/mmomtchev/yatag/workflows/Node.js%20CI/badge.svg)](https://github.com/mmomtchev/yatag/actions?query=workflow%3A%22Node.js+CI%22)
# Yet Another Tag Annotations Generator

`yatag` is a tool for generating TypeScript `index.d.ts` from jsdoc-compatible type annotations.

I created it to generate the `index.d.ts` of the project `node-gdal-async` which is a native Node.js addon with both JS and C++ code. Since then, I have used it for most of my JS projects. It is still not fully standards-compliant, but it should be usable as is.

As opposed to the now built-in capability of the Typescript compiler, `yatag` solves a very simple problem in a very simple manner.

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
  header: 'import base from \'base\'',
  footer: 'export = myDefaultExport'
};
```

And finally run it:

```shell
yatag
```

Voila, you have generated your type definitions.

If you need more complex examples, you can check those projects:

* [node-gdal-async](https://github.com/mmomtchev/node-gdal-async) - I am actively developing the GDAL bindings for Node.js which used to be abandoned by its creator
  - [ndarray-gdal](https://github.com/mmomtchev/ndarray-gdal) is the [scijs](https://github.com/scijs/ndarray) plugin
  - [gdal-exprtk](https://github.com/mmomtchev/gdal-exprtk) is the [ExprTk.js](https://github.com/mmomtchev/exprtk.js) plugin
* [geosub](https://github.com/mmomtchev/geosub) - A tool for partial downloading of bands and subwindows from geospatial raster datasets from cloud storage, it is an Amazon AWS-compatible replacement for NOAA's own [g2sub](https://nomads.ncep.noaa.gov/cgi-bin/filter_gfs_0p25.pl)
* [Queue](https://github.com/mmomtchev/Queue) - is a rather simple but useful package for rate-limiting access to external APIs
