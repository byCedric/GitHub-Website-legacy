module.exports = {
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
	testRegex: 'test\\.(js|tsx?)$',
	transform: {
		'^.+\\.tsx?$': 'babel-jest',
	},
};
