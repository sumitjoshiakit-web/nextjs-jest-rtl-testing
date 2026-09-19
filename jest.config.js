/** @type {import('jest').Config} */
export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/(.*)$': '<rootDir>/$1',
    '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.js',
  },
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
  testMatch: [
    '<rootDir>/__tests__/**/*.{ts,tsx}',
    '<rootDir>/src/**/*.{test,spec}.{ts,tsx}',
  ],
  collectCoverageFrom: [
    'components/{Button,Card,Input,Counter,ProductList}.{ts,tsx}',
    '!**/__tests__/**',
    '!**/*.d.ts',
  ],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['text', 'text-summary', 'lcov', 'json', 'json-summary', 'html'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
};
