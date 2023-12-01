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
				h1resp: "clamp(26px, 3.2vw, 52px)",
				h2resp: "clamp(24px, 3.1vw, 48px)",
				h3resp: "clamp(22px, 3.0vw, 44px)",
				h4resp: "clamp(20px, 2.9vw, 40px)",
				h5resp: "clamp(18px, 2.8vw, 36px)",
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
			animation: {
				'spin-slow': 'spin 2s linear infinite',
			  }
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
