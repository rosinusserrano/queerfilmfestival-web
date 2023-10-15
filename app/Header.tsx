"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
	const pathname = usePathname();
	const diffLang = pathname.includes("en") ? "de" : "en";
	const currentLang = pathname.includes("en") ? "en" : "de";
	return (
		<header className="fixed top-0 backdrop-blur-sm z-20 w-full p-4">
			<nav className="flex justify-between">
				<Link href={`/about/${currentLang}`} className="text-xl">
					{currentLang === "de" ? "Über uns" : "About"}
				</Link>
				<Link
					href={"https://www.instagram.com/_u/queerfilmfestivalleipzig"}
					className="text-xl"
				>
					IG
				</Link>
			</nav>
		</header>
	);
}
