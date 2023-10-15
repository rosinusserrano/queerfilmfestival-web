"use client";

import Image from "next/image";
import logo from "@/public/Logo-QXP-white.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Footer() {
	const pathname = usePathname();
	const diffLang = pathname.includes("en") ? "de" : "en";
	const currentLang = pathname.includes("de") ? "de" : "en";

	useEffect(() => {
		document.ontouchmove = function (event) {
			event.preventDefault();
		};
	});
	return (
		<footer className="fixed bottom-0 flex items-end bg backdrop-blur-sm h-16 z-10">
			<div className="w-screen h-full flex justify-between">
				<div className="items-center p-4 flex">
					<Link href={applyLangToPath(diffLang, pathname)}>
						{diffLang.toUpperCase()}
					</Link>
				</div>
				<Link href={`/${currentLang}`}>
					<Image src={logo} alt="logo" height={64} />
				</Link>
			</div>
		</footer>
	);
}

function applyLangToPath(lang: "en" | "de", pathname: string) {
	if (pathname.includes(lang)) {
		return pathname;
	} else if (pathname.includes("en")) {
		return pathname.replace("en", "de");
	} else if (pathname.includes("de")) {
		return pathname.replace("de", "en");
	} else {
		return `${pathname}${pathname.endsWith("/") ? "" : "/"}${lang}`;
	}
}
