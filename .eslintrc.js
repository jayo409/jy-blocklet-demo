module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: '@arcblock/eslint-config',
  env: {
    es6: true,
    browser: true,
    node: true,
    mocha: true,
    jest: true,
  },
  globals: {
    logger: true,
  },
  rules: {
    'react/prop-types': 0,
    'unicorn/filename-case': 0,
    'no-console': 0
  }
};
