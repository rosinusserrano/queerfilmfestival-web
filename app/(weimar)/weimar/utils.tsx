import { client } from "@/sanity/lib/client";
import { Block, BlockContent } from "@/sanity/schemaTypes/blockContent";
import { ReactElement } from "react";

export async function getBlockContentById(id: string): Promise<BlockContent> {
	return (
		await client.fetch(`*[_type == 'block-content' && id == '${id}']`)
	)[0];
}

export function renderBlock(block: Block): ReactElement {
	if (block.style === "normal") {
		return (
			<p>
				{block.children.map((child, i) => (
					<span key={`renderchildspankdsadsadsadey_${i}`}>{child.text}</span>
				))}
			</p>
		);
	}

	return <p>STYLE NOT YET IMPLEMENTED</p>;
}
