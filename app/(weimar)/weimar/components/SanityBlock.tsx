import { client } from "@/sanity/lib/client";
import { LanguageListener } from "./LanguageListener";

export async function SanityBlock({
	id,
}: { title: [string, string]; id: string }) {
	const sanityBlock = await client.fetch(
		`*[_type == 'block-content' && id == '${id}']`,
	);
	const contentEN = sanityBlock[0].content_en;
	const contentDE = sanityBlock[0].content_de;

	return (
		<LanguageListener>
			<>
				{contentDE.map((block: { children: Array<{ text: string }> }) => (
					<p>
						{block.children.map((child, i) => (
							<span key={`blockchildmappingozresdf_${i}`}>{child.text}</span>
						))}
					</p>
				))}
			</>
			<>
				{contentEN.map((block: { children: Array<{ text: string }> }) => (
					<p>
						{block.children.map((child, i) => (
							<span key={`blockchildmappingozresdf_${i}`}>{child.text}</span>
						))}
					</p>
				))}
			</>
		</LanguageListener>
	);
}
