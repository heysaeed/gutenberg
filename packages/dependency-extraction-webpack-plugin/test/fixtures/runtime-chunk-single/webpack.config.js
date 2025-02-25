/**
 * Internal dependencies
 */
const DependencyExtractionWebpackPlugin = require( '../../..' );

module.exports = {
	entry: {
		a: './a',
		b: './b',
	},
	plugins: [
		new DependencyExtractionWebpackPlugin( {
			requestToExternalModule( request ) {
				return request.startsWith( '@wordpress/' );
			},
		} ),
	],
	optimization: {
		runtimeChunk: 'single',
	},
};
