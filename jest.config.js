module.exports = {
  "preset": "jest-expo",
  // "preset": "react-native",
  // "projects": [
  //   { "preset": "jest-expo/node" }, // works
  //   { "preset": "jest-expo/ios"}    // error
  // ],
  "setupFiles": [
    "<rootDir>/setup-tests.js"
  ],
  "transform": {
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
    "^.+\\.tsx?$": "ts-jest"
  },
  "transformIgnorePatterns": [
    "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)"
  ],
  "testMatch": [
    "**/__tests__/**/*.ts?(x)",
    "**/?(*.)+(spec|test).ts?(x)"
  ],
  "moduleFileExtensions": [
    "js",
    "ts",
    "tsx"
  ],
  "globals": {
    "ts-jest": {
      "diagnostics": {
        "ignoreCodes": [2339, 7016]
      },
      "tsConfig": {
        "jsx": "react"
      }
    }
  }
};
