import { ReactElement, ReactNode } from "react";
import { TransparentBubble } from "./TransparentBubble";
import { BlockContent } from "@/sanity/schemaTypes/blockContent";
import { LanguageListener } from "./LanguageListener";
import { renderBlock } from "../utils";
import { H1 } from "./text/headings";
import SanityBlock from "./SanityBlock";

export function SubRiderBubble({
	titleDE,
	titleEN,
	blockContent,
}: {
	titleDE: ReactNode;
	titleEN: ReactNode;
	blockContent: BlockContent;
}) {
	const englishContent = blockContent.content_en ?? blockContent.content_de;
	return (
		<TransparentBubble>
			<LanguageListener>
				<H1 wonderFont padded>
					{typeof titleDE === "string" ? titleDE.toUpperCase() : titleDE}
				</H1>
				<H1 wonderFont padded>
					{typeof titleEN === "string" ? titleEN.toUpperCase() : titleEN}
				</H1>
			</LanguageListener>
			<LanguageListener>
				<div>
					{blockContent.content_de.map((cde, i) => (
						<SanityBlock
							sanityBlock={cde}
							key={`blockcontentde_key${i}dsadasd`}
						/>
					))}
				</div>
				<div>
					{englishContent.map((cde, i) => (
						<SanityBlock
							sanityBlock={cde}
							key={`blockcontenten_key${i}dsadasd`}
						/>
					))}
				</div>
			</LanguageListener>
		</TransparentBubble>
	);
}
