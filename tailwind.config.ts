import type { Config } from "tailwindcss";

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
			},
			fontSize: {
				b: "28px",
				"menu-xs": "5.5rem",
				"menu-sm": "6rem",
				"menu-md": "6.5rem",
				"menu-lg": "7rem",
				submenu: "2rem",
			},
			gridTemplateColumns: {
				"auto-3": "auto auto auto",
				"auto-2": "auto auto",
			},
			maxWidth: {
				"menu-content": "800px",
				"menu-rider": "850px"
			}
		},
	},
	plugins: [],
};
export default config;
