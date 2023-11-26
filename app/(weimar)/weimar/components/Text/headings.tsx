import { wonder } from "@/app/fonts/fonts";
import { ReactNode } from "react";

export function H1({ children }: { children: ReactNode }) {
	return (
		<h1
			className={`${wonder.className} text-olive`}
			style={{ fontSize: "3vw" }}
		>
			{children}
		</h1>
	);
}
