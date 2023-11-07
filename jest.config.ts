// this is the name of the actual import - not the extension
// eslint-disable-next-line
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: './',
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
	// Add more setup options before each test is run
	// setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

	preset: 'ts-jest',
	testEnvironment: 'jest-environment-jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
	moduleNameMapper: {
		'\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css|scss)$':
			'<rootDir>/mocks/unsupportedFileExtension.js',
		'^@/(.*)': '<rootDir>/src/$1',
	},
	collectCoverageFrom: [
		'**/*.{ts,tsx}',
		'!**/node_modules/**',
		'!**/vendor/**',
		'!**config**.js',
		'!coverage/**',
	],
	coverageReporters: ['text', 'cobertura', 'lcov', 'clover'],
	reporters: [
		'default',
		'jest-junit',
		[
			'jest-slow-test-reporter',
			{
				numTests: 20,
				warnOnSlowerThan: 300,
				color: true,
			},
		],
	],
	testResultsProcessor: 'jest-sonar-reporter',
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
