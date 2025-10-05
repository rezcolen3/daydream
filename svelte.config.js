import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter({
			// fallback: 'index.html', // optional, if using SPA style routing
			pages: 'build',
			assets: 'build',
			precompress: false
		}),
		// prerender: {
		// 	default: true // optional: automatically prerender all pages
		// }
	}
};
