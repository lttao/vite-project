module.exports = {
  env: {
    browser: true,
    es2021: true,
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
  extends: ['vue', 'standard', 'plugin:vue/essential'],
  plugins: ['import', 'node', 'promise', 'vue'],
  rules: {
    'prettier/prettier': 'error',
    'prefer-const': 'error',
    'no-console': 'error',
    'no-debugger': "error"
  },
}
