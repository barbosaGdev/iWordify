module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
				alias: {
					'@/': './src/',
					'@/api': './src/api',
					'@/components': './src/components',
					'@/routes': './src/routes',
					'@/screens': './src/screens',
					'@/utils': './src/utils',
					'@/actions': './src/store/actions',
					'@/actionTypes': './src/store/actionTypes',
					'@/reducers': './src/store/reducers',
					'@/store': './src/store',
				}
			}
		],
		[
			'module:react-native-dotenv',
			{
				moduleName: '@env',
				path: '.env'
			}
		],
		'react-native-reanimated/plugin'
	]
}
