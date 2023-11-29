import { ExpandableContent } from "../components/ExpandableContent";
import { LanguageListener } from "../components/LanguageListener";
import { SanityBlock } from "../components/SanityBlockALT20231129";
import { TransparentBubble } from "../components/TransparentBubble";

export function About() {
	return (
		<TransparentBubble>
			<LanguageListener>
				<h1>Wer wisdadsadsaadr sind</h1>
				<h1>Who we are</h1>
			</LanguageListener>
			<SanityBlock id="who-we-are" title={["Wer wir sind", "Who we are"]} />
		</TransparentBubble>
	);
}
