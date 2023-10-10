const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
	root: true,
	env: {
		node: true,
	},
	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaVersion: 2020,
	},
	extends: ['plugin:vue/recommended', 'eslint:recommended', '@vue/typescript/recommended', 'plugin:prettier/recommended'],
	rules: {
		'no-console': isProduction ? 'warn' : 'off',
		'no-debugger': isProduction ? 'warn' : 'off',
	},
}
