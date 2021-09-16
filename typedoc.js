module.exports = {
  includes: './',
  exclude: [
    '**/__tests__/**/*',
    '**/__test_utils__/**/*',
    '**/__fixtures__/**/*',
    '**/testsuite/**/*',
    '**/common/data/*',
    '**/utils/stylesheetUtils.ts',
    '**/*+(styles).tsx',
  ],

  excludeExternals: true,
  excludePrivate: true,
};
