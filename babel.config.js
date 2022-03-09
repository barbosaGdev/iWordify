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
					'@/components': './src/components',
					'@/screens': './src/screens',
					'@/utils': './src/utils',
					'@/routes': './src/routes',
					'@/api': './src/api',
					'@/actions': './src/store/actions',
					'@/validate': './src/validate',
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
