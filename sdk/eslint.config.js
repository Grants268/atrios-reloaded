const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');

module.exports = [
  {
    files: ['src/**/*.ts', 'test/**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'error',
    },
  },
  {
    files: ['bin/**/*.js', 'bin/**/*.mjs', 'bin/**/*.cjs'],
    rules: {
      'no-console': 'off',
    },
  },
  {
    // Logger, retry, and RPC services intentionally use console as the output sink
    files: [
      'src/utils/logger.ts',
      'src/utils/retry.ts',
      'src/network/rpc.service.ts',
      'src/light/rpc.service.ts',
    ],
    rules: {
      'no-console': 'off',
    },
  },
  {
    // Test files may use console for debugging
    files: ['src/**/*.spec.ts', 'test/**/*.spec.ts'],
    rules: {
      'no-console': 'off',
    },
  },
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
];
