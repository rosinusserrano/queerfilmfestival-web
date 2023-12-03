import { wonder } from "@/app/fonts/fonts";
import { ReactNode } from "react";

export function H1({
	children,
	padded,
	wonderFont,
	className,
}: {
	children: ReactNode;
	padded?: boolean;
	wonderFont?: boolean;
	className?: string;
}) {
	return (
		<h1
			className={`${className && className} ${
				wonderFont && wonder.className
			} text-olive ${padded && "py-5"} text-h1resp`}
			style={{ lineHeight: "100%" }}
		>
			{children}
		</h1>
	);
}

export function H2({
	children,
	padded,
	wonderFont,
	className,
}: {
	children: ReactNode;
	padded?: boolean;
	wonderFont?: boolean;
	className?: string;
}) {
	return (
		<h2
			className={`${className && className} ${
				wonderFont && wonder.className
			} text-olive ${padded && "py-3"} text-h2resp`}
		>
			{children}
		</h2>
	);
}

export function H3({
	children,
	padded,
	wonderFont,
	className,
}: {
	children: ReactNode;
	padded?: boolean;
	wonderFont?: boolean;
	className?: string;
}) {
	return (
		<h3
			className={`${className && className} ${
				wonderFont && wonder.className
			} text-olive ${padded && "py-3"} text-h3resp`}
		>
			{children}
		</h3>
	);
}

export function H4({
	children,
	padded,
	wonderFont,
	className,
}: {
	children: ReactNode;
	padded?: boolean;
	wonderFont?: boolean;
	className?: string;
}) {
	return (
		<h3
			className={`${className && className} ${
				wonderFont && wonder.className
			} text-olive ${padded && "py-2"} text-h4resp`}
		>
			{children}
		</h3>
	);
}
