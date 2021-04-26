module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "^pages/(.*)$": ["<rootDir>/pages/$1"],
    "^assets/(.*)$": ["<rootDir>/src/assets/$1"],
    "^styles/(.*)$": ["<rootDir>/src/styles/$1"],
    "^utils/(.*)$": ["<rootDir>/src/utils/$1"],
    "^components/(.*)$": ["<rootDir>/src/components/$1"],
    "^atoms/(.*)$": ["<rootDir>/src/components/atoms/$1"],
    "^molecules/(.*)$": ["<rootDir>/src/components/molecules/$1"],
    "^organisms/(.*)$": ["<rootDir>/src/components/organisms/$1"],
    "^services/(.*)$": ["<rootDir>/src/services/$1"],
    "^hooks/(.*)$": ["<rootDir>/src/hooks/$1"],
    "^context/(.*)$": ["<rootDir>/src/context/$1"],
    "\\.(css|less|sass|scss)$": ["<rootDir>/src/tests/__mocks__/styles.ts"],
  },
  collectCoverageFrom: ["src/**/*.{ts,jsx}", "!**/node_modules/**"],
};
