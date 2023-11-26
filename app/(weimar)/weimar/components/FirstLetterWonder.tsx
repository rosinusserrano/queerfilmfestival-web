import { wonder } from "@/app/fonts/fonts";

export function FirstLetterWonder({ children }: { children: string }) {
	const firstLetter = children.slice(0, 1);
	const rest = children.slice(1);

	return (
		<>
			<span className={wonder.className}>{firstLetter}</span>
			{rest}
		</>
	);
}
