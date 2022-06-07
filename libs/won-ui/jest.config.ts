/* eslint-disable */
export default {
  displayName: 'won-ui',
  preset: '../../jest.preset.ts',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/won-ui',
  testEnvironment: 'jest-environment-jsdom',
};
