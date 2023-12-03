"use client";

import { useEffect } from "react";
import { isSafari } from "react-device-detect";

export function SafariCheckAlert() {
	useEffect(() => {
		if (true) {
			alert(
				"This page can have issues in Safari. We recommend opening this site with a different Browser (such as Google Chrome, Firefox or Opera).",
			);
		}
	}, []);
	return null;
}
