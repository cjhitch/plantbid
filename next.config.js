const path = require('path');
/** @type {import('next').NextConfig} */

const nextConfig = {
	webpack: (
		config,
		{ buildId, dev, isServer, defaultLoaders, nextRuntime, webpack },
	) => {
		config.resolve.alias = {
			...config.resolve.alias,
			Api: path.resolve(__dirname, 'src', 'app', 'api,'),
			App: path.resolve(__dirname, 'src', 'app'),
			Assets: path.resolve(__dirname, 'src', 'assets'),
			Components: path.resolve(__dirname, 'src', 'components'),
			Hooks: path.resolve(__dirname, 'src', 'hooks'),
			Images: path.resolve(__dirname, 'src', 'assets', 'images'),
			Model: path.resolve(__dirname, 'src', 'model'),
			Store: path.resolve(__dirname, 'src', 'store'),
			TestIds: path.resolve(__dirname, 'src', 'TestIds.ts'),
			Util: path.resolve(__dirname, 'src', 'util'),
			Ui: path.resolve(__dirname, 'src', 'components', 'ui'),
			'@': path.resolve(__dirname, 'src'),
		};
		return config;
	},
};

module.exports = nextConfig;
