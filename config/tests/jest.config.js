module.exports = {
    rootDir: "../../",
    setupFilesAfterEnv: ["./config/tests/jest.setup.js"],
    testEnvironment: "jsdom",
    moduleNameMapper: {
        /* Handle CSS imports (with CSS modules)
        https://jestjs.io/docs/webpack#mocking-css-modules */
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

        // Handle CSS imports (without CSS modules)
        '^.+\\.(css|sass|scss)$': '<rootDir>/__tests__/mock_data/styleMock.js',

        /* Handle image imports
        https://jestjs.io/docs/webpack#handling-static-assets */
        '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$':
            '<rootDir>/__tests__/mock_data/fileMock.js',
    },
    transformIgnorePatterns: [
        '/node_modules/',
        '/__tests__/mock_data/*.js',
        '^.+\\.module\\.(css|sass|scss)$',
    ],
    collectCoverage: true,
    coverageReporters: ['text', 'html'],
    coverageDirectory: '<rootDir>/__tests__/coverage/',
    collectCoverageFrom: [
        "./src/components/**/*.{js,jsx,ts,tsx}",
        "./pages/**/*.{js,jsx,ts,tsx}",
        "!**/node_modules/**",
        "!**/vendor/**"
    ]
};