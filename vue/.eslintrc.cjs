require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommend',
        '@vue/eslint-config-pretter/skip-formatting'
    ],
    parseOptions: {
        ecmaVersion: 'latest'
    }
}