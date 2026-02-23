export default {
  extends: ['@commitlint/config-conventional'],
  plugins: [],
  rules: {
    // Type: only allow these specific types (lowercase)
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'revert',
      ],
    ],
    // Type must be lowercase
    'type-case': [2, 'always', 'lower-case'],
    // Scope must be lowercase with hyphens when provided
    'scope-case': [2, 'always', 'kebab-case'],
    // Subject must not be empty
    'subject-empty': [2, 'never'],
    // Header (first line) max length
    'header-max-length': [2, 'always', 100],
  },
}
