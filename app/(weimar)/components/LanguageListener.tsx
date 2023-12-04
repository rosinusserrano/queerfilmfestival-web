"use client";

import { ReactElement } from "react";
import { useLocalStorage } from "usehooks-ts";

export function LanguageListener({
	children,
}: { children: [ReactElement, ReactElement] }) {
	const [lang, _] = useLocalStorage("lang", "de");

	const childDE = children[0];
	const childEN = children[1];

	return lang === "de" ? childDE : childEN;
}
