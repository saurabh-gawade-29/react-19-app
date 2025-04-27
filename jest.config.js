export default {
    testEnvironment: 'jest-environment-jsdom', // Ensure this is set correctly
    moduleFileExtensions: ['js', 'jsx'],
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
};
