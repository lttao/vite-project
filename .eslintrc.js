module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    wx: 'readonly',
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false,
    },
  },
  extends: ['vue', 'standard', 'plugin:vue/recommended'],
  plugins: ['prettier', 'standard', 'import', 'node', 'promise', 'vue'],
  rules: {
    'prettier/prettier': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],
  },
}
