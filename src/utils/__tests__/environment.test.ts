import { isDevelopment, isProduction, isTest } from 'utils/environment';

afterEach(() => {
    vi.unstubAllEnvs();
});

describe('Environment Utility Functions', () => {
    test('should return true for isTest when NODE_ENV is "test"', () => {
        vi.stubEnv('NODE_ENV', 'test');
        expect(isTest()).toBe(true);
        expect(isProduction()).toBe(false);
        expect(isDevelopment()).toBe(false);
    });

    test('should return true for isProduction when NODE_ENV is "production"', () => {
        vi.stubEnv('NODE_ENV', 'production');
        expect(isProduction()).toBe(true);
        expect(isTest()).toBe(false);
        expect(isDevelopment()).toBe(false);
    });

    test('should return true for isDevelopment when NODE_ENV is "development"', () => {
        vi.stubEnv('NODE_ENV', 'development');
        expect(isDevelopment()).toBe(true);
        expect(isTest()).toBe(false);
        expect(isProduction()).toBe(false);
    });

    test('should return false for all when NODE_ENV is undefined or unknown', () => {
        vi.stubEnv('NODE_ENV', 'staging');
        expect(isTest()).toBe(false);
        expect(isProduction()).toBe(false);
        expect(isDevelopment()).toBe(false);
    });
});
