import { LanguageListener } from "../components/LanguageListener";
import { SubRiderBubble } from "../components/SubRiderBubble";
import { getBlockContentById, renderBlock } from "../utils";

export default async function AboutPage() {
	const contents = await getAboutContents();
	return (
		<main>
			<SubRiderBubble
				titleDE="Wer wir sind"
				titleEN="Who we are"
				blockContent={contents.whoWeAre}
			/>
			<SubRiderBubble
				titleDE="Volunteer"
				titleEN="Volunteer"
				blockContent={contents.volunteer}
			/>
			<SubRiderBubble
				titleDE="Kooperationspartner_innen"
				titleEN="Partners"
				blockContent={contents.cooperation}
			/>
			<SubRiderBubble
				titleDE="Presse"
				titleEN="Press"
				blockContent={contents.press}
			/>
			<SubRiderBubble
				titleDE="Selbstverständnis"
				titleEN="Self-understanding"
				blockContent={contents.selfUnderstanding}
			/>
		</main>
	);
}

async function getAboutContents() {
	const whoWeAre = await getBlockContentById("who-we-are");
	const cooperation = await getBlockContentById("cooperation");
	const press = await getBlockContentById("press");
	const selfUnderstanding = await getBlockContentById("self-understanding");
	const volunteer = await getBlockContentById("volunteer");

	return {
		whoWeAre,
		cooperation,
		press,
		selfUnderstanding,
		volunteer,
	};
}
