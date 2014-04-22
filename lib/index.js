module.exports = function(params, templates, contexts, links, buffers, done) {

	var ncp = require('ncp').ncp;

	if (!params.src || typeof params.src !== 'string') {

		return done('\'src\' parameter required but missing.');

	}

	if (!params.dest || typeof params.dest !== 'string') {

		return done('\'dest\' parameter required but missing.');

	}

	ncp(params.src, params.dest, {
		stopOnErr: true
	}, done);

};