module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'space-before-function-paren': 'off',
    'no-unused-vars': 'warn',
    'space-in-parens': 'off',
    'computed-property-spacing': 'off',
    semi: [2, 'always']
  }
};
