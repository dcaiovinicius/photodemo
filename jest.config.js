module.exports = {
  roots: ['<rootDir>/app/frontend'],

  transform: {
    '^.+\\.tsx?$': [
      'esbuild-jest',
      {
        sourcemap: true,
      },
    ],
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',

  testEnvironment: 'jest-environment-jsdom',

  moduleNameMapper: {
    '@app/(.+)': '<rootDir>/app/frontend/$1',
    '@assets/(.+)': '<rootDir>/app/assets/images/$1',
  },
};
