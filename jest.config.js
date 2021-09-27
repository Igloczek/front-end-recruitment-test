module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    'vue',
  ],
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '.*\\.(js)$': 'babel-jest',
    '\\.svg$': '<rootDir>/fileTransformer.js',
  },
  testEnvironment: 'jsdom',
}
