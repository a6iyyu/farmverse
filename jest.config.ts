import type { Config } from "jest";

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  moduleNameMapper: {"^@/(.*)$": "<rootDir>/src/$1"},
  preset: "ts-jest",
  transform: {"^.+\\.(ts|tsx)$": "ts-jest"},
  testMatch: ['**/__test__/**/*.test.ts?(x)'],
  testEnvironment: "jsdom",
};

export default config;