// module.exports = {
//   displayName: 'won-ui',
//   preset: '../../jest.preset.ts',
//   transform: {
//     '^.+\\.[tj]sx?$': 'babel-jest'
//   },
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
//   coverageDirectory: '../../coverage/libs/won-ui'
// };

/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  displayName: 'won-ui',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  coverageDirectory: '../../coverage/libs/won-ui',
  testEnvironment: 'jest-environment-jsdom',
}


// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)


