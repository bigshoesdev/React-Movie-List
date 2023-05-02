const path = require('path');

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: path.join(__dirname, 'tsconfig.json'),
    tsconfigRootDir: '.',
    ecmaFeatures: {
      jsx: true,
    },
    extraFileExtensions: ['.mp4'],
  },
  env: {
    node: true,
    browser: true,
    commonjs: true,
  },
  plugins: ['prettier'],
  extends: ['airbnb', 'airbnb/hooks', 'prettier', 'plugin:import/typescript'],
  ignorePatterns: ['.src/assets/*', '*.svg', '*.png', '*.jpg', '*.css', '*.scss', '*.gif'],
  rules: {
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
    'react/jsx-filename-extension': 'off',
    'import/prefer-default-export': 'off',
    camelcase: 'off',
    'no-restricted-syntax': 'off',
    'no-param-reassign': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'import/no-extraneous-dependencies': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-underscore-dangle': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  overrides: [
    {
      files: ['./src/**/*.ts', './src/**/*.tsx'],
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended'],
      rules: {
        curly: ['error'],
        '@typescript-eslint/semi': ['off'],
        'no-console': [
          'error',
          {
            allow: ['warn', 'error', 'info', 'log'],
          },
        ],
        'import/no-cycle': 'off',
        '@typescript-eslint/no-misused-promises': [
          'error',
          {
            checksVoidReturn: false,
            checksConditionals: false,
          },
        ],
        'no-unused-expressions': 'off',
        'no-shadow': 'off',
        'react/no-array-index-key': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'react/no-danger': 'off',
        '@typescript-eslint/no-non-null-assertion': ['error'],
        '@typescript-eslint/no-unnecessary-type-assertion': [
          'error',
          {
            typesToIgnore: ['HTMLElement', 'HTMLDivElement', 'HTMLVideoElement', 'HTMLIFrameElement'],
          },
        ],
        '@typescript-eslint/no-unused-vars': ['off'],
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/explicit-module-boundary-types': ['off'],
        '@typescript-eslint/explicit-member-accessibility': ['error', { overrides: { constructors: 'no-public' } }],
        '@typescript-eslint/no-floating-promises': ['off'],
        '@typescript-eslint/no-unsafe-member-access': ['error'],
        '@typescript-eslint/no-unsafe-return': ['error'],
        '@typescript-eslint/no-unsafe-call': ['error'],
        '@typescript-eslint/restrict-template-expressions': ['error'],
        '@typescript-eslint/ban-types': ['error'],
        '@typescript-eslint/linebreak-style': 0,
        '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
      },
    },
    {
      files: ['.eslintrc.js'],
      env: {
        node: true,
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
