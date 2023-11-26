import localFont from "next/font/local";
import { Pixelify_Sans } from "next/font/google";

export const tele = localFont({
	src: "tele-40-STAR.woff2",
	display: "swap",
	preload: true,
});

export const wonder = localFont({
	src: "WonderType-Regular.otf",
	display: "swap",
	preload: true,
});

export const pix = Pixelify_Sans({
	display: "swap",
	weight: "400",
	subsets: ["latin"],
});
