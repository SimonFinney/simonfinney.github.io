/** Copyright Simon Finney 2019, 2022 */

module.exports = {
  extends: 'stylelint-config-recommended-scss',
  plugins: ['stylelint-no-unsupported-browser-features'],
  rules: {
    'plugin/no-unsupported-browser-features': [
      true,
      {
        severity: 'warning',
      },
    ],
  },
};
