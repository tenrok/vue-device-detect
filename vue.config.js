const isProduction = process.env.NODE_ENV === 'production'
const isBuildLib = (process.env.npm_lifecycle_script || '').indexOf('--target lib') > 0

module.exports = {
	publicPath: isProduction ? '/vue-device-detect/' : '',
	outputDir: isBuildLib ? 'dist' : 'demo',
	productionSourceMap: false,
}
