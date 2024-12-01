import typography from '@tailwindcss/typography';
import defaultTheme from 'tailwindcss/defaultTheme';

import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
				display: ['Instrument Serif', ...defaultTheme.fontFamily.serif]
			}
		}
	},
	plugins: [typography]
} satisfies Config;
