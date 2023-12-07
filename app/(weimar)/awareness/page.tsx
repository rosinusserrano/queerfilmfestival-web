import { ExpandInOut } from "../components/ExpandInOut";
import { LanguageListener } from "../components/LanguageListener";
import { SubRiderBubble } from "../components/SubRiderBubble";
import { TransparentBubble } from "../components/TransparentBubble";
import { H1 } from "../components/text/headings";
import { getBlockContentById } from "../utils";

export const revalidate = 300;

export default async function AboutPage() {
	const contents = await getAwarenessContents();
	return (
		<ExpandInOut key={"EXSPSANDSAAWARENESS"}>
			<main>
				<SubRiderBubble
					titleDE="Awareness&shy;konzept"
					titleEN="Awareness concept"
					blockContent={contents.awarenessConcept}
				/>
				<SubRiderBubble
					titleDE="Barrieren"
					titleEN="Barriers"
					blockContent={contents.barriers}
				/>
				{/* <SubRiderBubble
					titleDE="Covid-19"
					titleEN="Covid-19"
					blockContent={contents.covid}
				/> */}
				<a
					href="/weimar/Schutz- und Hygienekonzept QFFW23.pdf"
					target="_blank"
					rel="noreferrer"
				>
					<TransparentBubble>
						<H1 wonderFont padded>
							COVID-19
						</H1>
						<div />
					</TransparentBubble>
				</a>
				<SubRiderBubble
					titleDE="Wie wählen wir Filme aus?"
					titleEN="Film selection"
					blockContent={contents.filmSelection}
				/>
			</main>
		</ExpandInOut>
	);
}

async function getAwarenessContents() {
	const awarenessConcept = await getBlockContentById("awareness-concept");
	const barriers = await getBlockContentById("barriers");
	const covid = await getBlockContentById("covid");
	const filmSelection = await getBlockContentById("film-selection");

	return {
		awarenessConcept,
		barriers,
		covid,
		filmSelection,
	};
}
