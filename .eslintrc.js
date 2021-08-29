const commonFiles = ['cfg.js', 'env.js'];

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'simple-import-sort', 'unused-imports'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'unused-imports/no-unused-imports': 2,
    'no-console': 1,
    'no-dupe-keys': 1,
    'no-use-before-define': 2,
    'no-restricted-globals': 1,
    'lines-between-class-members': [2, 'always', { exceptAfterSingleLine: true }],
    'padding-line-between-statements': [
      2,
      { blankLine: 'always', prev: 'function', next: '*' },
      { blankLine: 'always', prev: '*', next: 'function' },
      { blankLine: 'always', prev: 'export', next: '*' },
      { blankLine: 'always', prev: '*', next: 'export' },
      { blankLine: 'always', prev: 'multiline-const', next: '*' },
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    'simple-import-sort/imports': 'error',
    'no-unused-vars': [
      'error',
      {
        args: 'all',
        ignoreRestSiblings: true,
        caughtErrors: 'all',
        varsIgnorePattern: '^ignored|_+$',
        argsIgnorePattern: '^_|props+$',
      },
    ],
  },
  overrides: [{
    files: ['warehouse/**/*.ts', 'warehouse/**/*.js', ...commonFiles],
    parserOptions: {
      project: ['warehouse/tsconfig.json'], // Specify it only for TypeScript files
    },
  }]
};
