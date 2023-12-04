import { FirstLetterWonder } from "../FirstLetterWonder";
import { MenuBannerItem } from "./MenuItemBanner";

export function MenuBanner() {
	return (
		<center className="bg-light-pink text-olive sticky top-0 z-10 text-h1resp">
			<MenuBannerItem href="/about">About</MenuBannerItem>,{" "}
			<MenuBannerItem href="/program">Programm</MenuBannerItem>,{" "}
			<MenuBannerItem href="/awareness">Awareness</MenuBannerItem>,{" "}
			<MenuBannerItem href="/">Kontakt</MenuBannerItem>{" "}
			<FirstLetterWonder>&</FirstLetterWonder>{" "}
			<MenuBannerItem href="/imprint">Impressum</MenuBannerItem>
		</center>
	);
}
