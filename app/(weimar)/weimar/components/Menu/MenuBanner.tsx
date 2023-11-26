import { ReactNode } from "react";
import { FirstLetterWonder } from "../FirstLetterWonder";
import { MenuBannerItem } from "./MenuItemBanner";
import { RiderId } from "../../page";

export function MenuBanner() {
	return (
		<center
			className="bg-light-pink text-olive sticky top-0 z-10"
			style={{
				fontSize: "3vw",
			}}
		>
			<MenuBannerItem href="/weimar/about">About</MenuBannerItem>,{" "}
			<MenuBannerItem href="/about">Programm</MenuBannerItem>,{" "}
			<MenuBannerItem href="/about">Awareness</MenuBannerItem>,{" "}
			<MenuBannerItem href="/about">Kontakt</MenuBannerItem>{" "}
			<FirstLetterWonder>&</FirstLetterWonder>{" "}
			<MenuBannerItem href="/about">Impressum</MenuBannerItem>
		</center>
	);
}
