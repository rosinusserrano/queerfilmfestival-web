import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				pink: "#e83b96",
				"light-pink": "#E1C7E1",
				olive: "#243E13"
			},
			fontSize: {
				b: "28px",
				"menu-xs": "5.5rem",
				"menu-sm": "6rem",
				"menu-md": "6.5rem",
				"menu-lg": "7rem",
				submenu: "2rem",
				h1resp: "max(3.2vw, 28px)",
				h2resp: "max(3.0vw, 24px)",
				h3resp: "max(2.8vw, 20px)",
				h4resp: "max(2.6vw, 16px)",
				h5resp: "max(2.4vw, 12px)"
			},
			gridTemplateColumns: {
				"auto-3": "auto auto auto",
				"auto-2": "auto auto",
			},
			maxWidth: {
				"menu-content": "800px",
				"menu-rider": "850px",
			},
			textShadow: {
				outline:
					"-1px -1px 0 (--tw-shadow-color), 1px -1px 0 (--tw-shadow-color), -1px 1px 0 (--tw-shadow-color), 1px 1px 0 (--tw-shadow-color);",
				"outline-light-pink":
					"-1px -1px 0 #E1C7E1, 1px -1px 0 #E1C7E1, -1px 1px 0 #E1C7E1, 1px 1px 0 #E1C7E1;",
			},
		},
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{ "text-shadow": (value) => ({ textShadow: value }) },
				{ values: theme("textShadow") },
			);
		}),
	],
};
export default config;
