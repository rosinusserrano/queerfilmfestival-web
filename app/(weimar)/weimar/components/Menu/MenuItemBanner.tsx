"use client";

import Link from "next/link";

import { FirstLetterWonder } from "../FirstLetterWonder";
import { H3 } from "../text/headings";

export function MenuBannerItem({
	children,
	href,
}: { children: string; href: string }) {
	return (
		<Link href={href} className="inline hover:text-white hover:cursor-pointer">
			<FirstLetterWonder>{children}</FirstLetterWonder>
		</Link>
	);
}
