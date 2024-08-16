import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				primary: ['Inria Serif', 'serif']
			},
			colors: {
				dark: '#1a1a1a'
			}
		}
	},

	plugins: []
} as Config;
