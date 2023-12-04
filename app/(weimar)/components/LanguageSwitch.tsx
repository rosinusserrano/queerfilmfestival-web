"use client";

import { useLocalStorage } from "usehooks-ts";

export function LanguageSwitch() {
	const [lang, setLang] = useLocalStorage("lang", "de");

	return (
		<div onClick={() => setLang(lang === "de" ? "en" : "de")} className="cursor-pointer">
			{lang === "de" ? "EN" : "DE"}
		</div>
	);
}
