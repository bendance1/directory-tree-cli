module.exports = {
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/', '/tests/'],
  testMatch: ['**/tests/**/*.test.js'],
  moduleFileExtensions: ['js'],
  transform: {},
  clearMocks: true,
  testTimeout: 5000,
};