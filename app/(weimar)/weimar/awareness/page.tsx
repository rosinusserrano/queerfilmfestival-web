import { ExpandInOut } from "../components/ExpandInOut";
import { SubRiderBubble } from "../components/SubRiderBubble";
import { getBlockContentById } from "../utils";

export default async function AboutPage() {
	const contents = await getAwarenessContents();
	return (
		<ExpandInOut key={"EXSPSANDSAAWARENESS"}>
			<main>
				<SubRiderBubble
					titleDE="Awarenesskonzept"
					titleEN="Awareness concept"
					blockContent={contents.awarenessConcept}
				/>
				<SubRiderBubble
					titleDE="Barrieren"
					titleEN="Barriers"
					blockContent={contents.barriers}
				/>
				<SubRiderBubble
					titleDE="Covid-19"
					titleEN="Covid-19"
					blockContent={contents.covid}
				/>
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
        filmSelection
	};
}