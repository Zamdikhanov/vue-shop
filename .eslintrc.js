module.exports = {
    root: true,
    env: {
        node: true,
        'vue/setup-compiler-macros': true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/base',
        'plugin:vue/essential',
        'plugin:vue/recommended',
        'plugin:vue/strongly-recommended',
        'prettier'
    ],
    parserOptions: {
        parser: '@babel/eslint-parser'
    },
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': [
            'warn',
            {
                endOfLine: 'auto'
            }
        ],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-prototype-builtins': 'off',
        'no-unused-vars': 'warn',
        'vue/no-v-model-argument': 'off',
        'vue/no-v-for-template-key': 'off', // https://v3-migration.vuejs.org/breaking-changes/key-attribute.html#with-template-v-for
        'vue/prop-name-casing': 'off',
        'vue/html-self-closing': 'off',
        'vue/html-indent': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/no-multiple-template-root': 'off',
        'vue/component-name-in-template-casing': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/script-indent': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/no-reserved-component-names': 'warn'
    }
};
