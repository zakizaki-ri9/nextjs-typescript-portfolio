module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['prettier/@typescript-eslint', 'prettier/react', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'max-len': ['error', { code: 140, ignoreUrls: true }],
    'import/prefer-default-export': 'off'
  }
}
