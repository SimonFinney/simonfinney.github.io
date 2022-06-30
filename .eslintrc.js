/** Copyright Simon Finney 2019, 2022 */

module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:compat/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:security/recommended',
    'prettier',
  ],
  plugins: ['compat', 'jsx-a11y', 'react', 'security', 'tree-shaking'],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
