module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true
    },
    extends: [
        'eslint:recommended'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    rules: {
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        indent: ['error', 4]
    },
    overrides: [
        {
            files: ['www/index.js'],
            env: {
                browser: true,
                es6: true,
                commonjs: false,
                node: false
            },
            parserOptions: {
                ecmaVersion: 2016,
                sourceType: 'module'
            }
        }
    ]
};
