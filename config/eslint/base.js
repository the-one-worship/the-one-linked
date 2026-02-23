import js from '@eslint/js'
import perfectionist from 'eslint-plugin-perfectionist'
import prettier from 'eslint-plugin-prettier/recommended'
import unicorn from 'eslint-plugin-unicorn'
import tseslint from 'typescript-eslint'

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    plugins: {
      perfectionist,
      unicorn,
    },
    rules: {
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'alphabetical',
          order: 'asc',
          ignoreCase: true,
          specialCharacters: 'keep',
          internalPattern: ['^@/.+'],
          partitionByComment: false,
          partitionByNewLine: false,
          newlinesBetween: 1,
          maxLineLength: undefined,
          groups: [
            'node',
            'vite',
            'next',
            'react',
            'type',
            ['builtin', 'external'],
            'internal',
            ['sibling', 'index'],
            'parent',
            'unknown',
          ],
          customGroups: [
            {
              groupName: 'node',
              elementNamePattern: ['^node:.+'],
            },
            {
              groupName: 'react',
              elementNamePattern: ['^react$', '^react-.+'],
            },
            {
              groupName: 'next',
              elementNamePattern: ['^next$', '^next/.+', '^@next'],
            },
            {
              groupName: 'vite',
              elementNamePattern: ['^vite', '^@vite'],
            },
          ],
          environment: 'node',
        },
      ],
      'perfectionist/sort-exports': 'error',
      'unicorn/prefer-node-protocol': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          caughtErrors: 'none',
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          args: 'all',
          vars: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
        },
      ],
      'no-console': ['error', { allow: ['warn', 'error'] }],
    },
  },
  {
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
      '**/build/**',
      '**/.next/**',
      '**/storybook-static/**',
      'apps/**/ajax/**',
      '!apps/**/ajax/index.ts',
      'next-env.d.ts',
      '**/static/**',
    ],
  },
]
