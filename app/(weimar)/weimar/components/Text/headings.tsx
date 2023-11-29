import { wonder } from "@/app/fonts/fonts";
import { ReactNode } from "react";

export function H1({
	children,
	padded,
	wonderFont,
}: { children: ReactNode; padded?: boolean; wonderFont?: boolean }) {
	return (
		<h1
			className={`${wonderFont && wonder.className} text-olive ${
				padded && "py-3"
			}`}
			style={{ fontSize: "max(3.1vw, 24px)" }}
		>
			{children}
		</h1>
	);
}

export function H2({
	children,
	padded,
	wonderFont,
}: { children: ReactNode; padded?: boolean; wonderFont?: boolean }) {
	return (
		<h2
			className={`${wonderFont && wonder.className} text-olive ${
				padded && "py-3"
			}`}
			style={{ fontSize: "max(2.9vw, 20px)" }}
		>
			{children}
		</h2>
	);
}

export function H3({
	children,
	padded,
	wonderFont,
}: { children: ReactNode; padded?: boolean; wonderFont?: boolean }) {
	return (
		<h3
			className={`${wonderFont && wonder.className} text-olive ${
				padded && "py-3"
			}`}
			style={{ fontSize: "max(2.7vw, 16px)" }}
		>
			{children}
		</h3>
	);
}

export function H4({
	children,
	padded,
	wonderFont,
}: { children: ReactNode; padded?: boolean; wonderFont?: boolean }) {
	return (
		<h3
			className={`${wonderFont && wonder.className} text-olive ${
				padded && "py-2"
			}`}
			style={{ fontSize: "max(2.5vw, 12px)" }}
		>
			{children}
		</h3>
	);
}
