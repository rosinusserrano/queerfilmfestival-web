import { notFound } from "next/navigation";
import { ExpandInOut } from "../components/ExpandInOut";
import { LanguageListener } from "../components/LanguageListener";
import SanityBlock from "../components/SanityBlock";
import { getBlockContentById } from "../utils";

export const revalidate = 300;

export default async function ImprintPage() {
	const imprintBlock = await getImprintData();

	if (!imprintBlock) {
		return notFound();
	}

	return (
		<ExpandInOut>
			<div
				className="mx-auto my-8 p-10 rounded-[24px]"
				style={{
					width: "min(95vw, 600px)",
					background: "linear-gradient(180deg, #E1C7E1 83.73%, #C6DFB6 92.46%)",
					mixBlendMode: "luminosity",
				}}
			>
				<LanguageListener>
					<main className="text-olive">
						{imprintBlock.content_de.map((bl) => (
							<SanityBlock sanityBlock={bl} />
						))}
					</main>
					<main>
						{imprintBlock.content_en.map((bl) => (
							<SanityBlock sanityBlock={bl} />
						))}
					</main>
				</LanguageListener>
			</div>
		</ExpandInOut>
	);
}

async function getImprintData() {
	const imprintBlock = await getBlockContentById("imprint");
	return imprintBlock;
}
