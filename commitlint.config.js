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
    // Scope: must be one of the valid project names when provided
    'scope-enum': [
      2,
      'always',
      [
        // Apps
        'user-portal',
        'supervisor-portal',
        // Packages
        'alison-ui',
        'feature-flags',
        'i18n',
        'img',
        'libs',
        'product-ui',
        'swagger',
      ],
    ],
    // Scope must be lowercase with hyphens when provided
    'scope-case': [2, 'always', 'kebab-case'],
    // Subject must not be empty
    'subject-empty': [2, 'never'],
    // Disable default subject-case to allow uppercase JIRA tickets
    'subject-case': [0],
    // Custom rule: Subject must start with JIRA ticket
    'jira-ticket-in-subject': [2, 'always'],
    // Header (first line) max length
    'header-max-length': [2, 'always', 100],
  },
}
