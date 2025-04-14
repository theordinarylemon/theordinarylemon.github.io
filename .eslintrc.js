module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:vue/vue3-recommended', // plugin:vue/vue3-recommended比 vue3-essential 更严格的规则集
        // '@vue/standard-with-typescript'
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: '@babel/eslint-parser',
        requireConfigFile: false // 避免需要 babel 配置文件
    },
    rules: {
    }
}