import { FirstLetterWonder } from "../FirstLetterWonder";
import { MenuBannerItem } from "./MenuItemBanner";

export function MenuBanner() {
	return (
		<center className="bg-light-pink text-olive sticky top-0 z-10 text-h1resp">
			<MenuBannerItem href="/weimar/about">About</MenuBannerItem>,{" "}
			<MenuBannerItem href="/weimar/program">Programm</MenuBannerItem>,{" "}
			<MenuBannerItem href="/weimar/awareness">Awareness</MenuBannerItem>,{" "}
			<MenuBannerItem href="/weimar">Kontakt</MenuBannerItem>{" "}
			<FirstLetterWonder>&</FirstLetterWonder>{" "}
			<MenuBannerItem href="/weimar/imprint">Impressum</MenuBannerItem>
		</center>
	);
}
