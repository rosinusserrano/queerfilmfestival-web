import { ExpandInOut } from "./components/ExpandInOut";
import { LanguageListener } from "./components/LanguageListener";
import SanityBlock from "./components/SanityBlock";
import { getBlockContentById } from "./utils";

export type RiderId = "about" | "program" | "awareness" | "contact" | "imprint";

export default async function HomePage() {
	const contactBlock = await getContactData();
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
					<main className="mix-blend-darken">
						{contactBlock.content_de.map((bl) => (
							<SanityBlock sanityBlock={bl} />
						))}
					</main>
					<main>
						{contactBlock.content_en.map((bl) => (
							<SanityBlock sanityBlock={bl} />
						))}
					</main>
				</LanguageListener>
			</div>
		</ExpandInOut>
	);
}

async function getContactData() {
	const contactBlock = await getBlockContentById("contact");
	return contactBlock;
}
