const isBuildLib = (process.env.npm_lifecycle_script || '').indexOf('--target lib') > 0

module.exports = {
	publicPath: '',
	outputDir: isBuildLib ? 'dist' : 'demo',
	productionSourceMap: false,
}
