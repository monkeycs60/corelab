import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		fontFamily: {
			general: ['GeneralSans_Variable', 'sans-serif'],
			generalRegular: ['GeneralSans-Regular', 'sans-serif'],
		},
		extend: {
			colors: {
				primary: '#070F1E',
				secondary: '#F33349',
				defaultWhite: {
					DEFAULT: '#F0EFF4',
				},
				destructive: {
					DEFAULT: '#291528',
					foreground: '#F0EFF4',
				},
			},
		},
	},
	plugins: [],
};
export default config;
