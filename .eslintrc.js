module.exports = {
    env: {
        browser: true,
        es2021: true,
        jquery: true,
    },
    extends: "eslint:recommended",
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
    },
    rules: {},
    globals: {
        eBookConfig: "readonly",
        require: "readonly",
    },
};