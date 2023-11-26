import { ReactElement } from "react";
import { TransparentBubble } from "./TransparentBubble";
import { BlockContent } from "@/sanity/schemaTypes/blockContent";
import { LanguageListener } from "./LanguageListener";
import { renderBlock } from "../utils";
import { H1 } from "./Text/headings";

export function SubRiderBubble({
	titleDE,
	titleEN,
	blockContent,
}: {
	titleDE: string;
	titleEN: string;
	blockContent: BlockContent;
}) {
	return (
		<TransparentBubble>
			<LanguageListener>
				<H1>{titleDE.toUpperCase()}</H1>
				<H1>{titleEN.toUpperCase()}</H1>
			</LanguageListener>
			<LanguageListener>
				<div>{blockContent.content_de.map((block) => renderBlock(block))}</div>
				<div>{blockContent.content_en.map((block) => renderBlock(block))}</div>
			</LanguageListener>
		</TransparentBubble>
	);
}
