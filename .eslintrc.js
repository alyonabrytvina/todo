module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ['node_modules/'],
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-use-before-define': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': 'off',
    'default-param-last': 'off',
    'default-case': 'off',
    'no-unused-vars': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'max-len': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'no-unsafe-optional-chaining': 'off',
    'consistent-return': 'off',
    'array-callback-return': 'off',
    'no-extra-boolean-cast': 'off',
  },
};
