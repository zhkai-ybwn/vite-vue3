module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        'airbnb-base',
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'vue',
    ],
    rules: {
        'import/no-cycle': [2, { maxDepth: 2 }],
        indent: ['error', 4, { SwitchCase: 1 }],
        'vue/html-indent': ['error', 4],
        'vue/html-quotes': ['error', 'double'],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-empty': ['error', { allowEmptyCatch: true }],
        // 推荐 warn
        'max-len': ['warn', { code: 200 }],
        // 关闭组件命名规则
        'vue/multi-word-component-names': 'off',
        'linebreak-style': ['off', 'windows'],
        'font-family-no-missing-generic-family-keyword': 0,
        'global-require': 0,
        'vuejs-accessibility/click-events-have-key-events': 'off',
        // 关闭export default规则
        'import/prefer-default-export': 'off',
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['@components', './src/components'],
                ],
                extensions: ['.ts', '.js', '.jsx', '.json'],
            },
        },
    },
};
