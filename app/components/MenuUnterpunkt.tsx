import { Dispatch, ReactNode, SetStateAction } from "react";

export default function MenuUnterpunkt({
	title,
	contentMap,
	contentKey,
	setContent,
	appendComma,
}: {
	title: string;
	contentMap: { [key: string]: ReactNode };
	contentKey: string;
	setContent: { (content: ReactNode): void };
	appendComma: boolean;
}) {
	return (
		<>
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<span
				className="hover:blur-sm cursor-pointer"
				onClick={() => setContent(contentMap[contentKey])}
			>
				{title}
			</span>
			{appendComma ? ", " : ""}
		</>
	);
}
