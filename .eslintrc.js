module.exports = {
  extends: ['taro/react', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'no-duplicate-imports': 'error',
    'no-alert': 'warn',
    'no-console': 'warn',
  },
}
