import type { Config } from "jest";

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {"^.+\\.(ts|tsx)$": "ts-jest"},
  testEnvironment: "jsdom",
};

export default config;