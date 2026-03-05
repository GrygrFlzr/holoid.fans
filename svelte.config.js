import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		runes: true
	},
	kit: {
		adapter: adapter(),
		prerender: {
			origin: 'https://holoid.fans'
		},
		build: {
			reportCompressedSize: false,
			sourcemap: false,
			modulePreload: {
				polyfill: false
			},
			minify: 'terser',
			cssMinify: 'lightningcss',
			terserOptions: {
				ecma: 2020,
				sourceMap: false,
				module: true,
				format: {
					semicolons: false
				}
			}
		}
	}
};

export default config;
