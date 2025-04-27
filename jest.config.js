
import { defaults } from 'jest-config';

export default {
    ...defaults,
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock style files
        '\\.(svg|png|jpg|jpeg|gif|webp|avif|ico|bmp|tiff)$': '<rootDir>/__mocks__/fileMock.js', // Mock image files
    },
    testEnvironment: 'jsdom', // Ensure Jest uses a DOM-like environment
    setupFilesAfterEnv: ['@testing-library/jest-dom'], // Extend Jest with custom matchers
};

