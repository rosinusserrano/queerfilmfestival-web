import { ExpandableContent } from "../components/ExpandableContent";
import { LanguageListener } from "../components/LanguageListener";
import { SanityBlock } from "../components/SanityBlock";
import { TransparentBubble } from "../components/TransparentBubble";

export function About() {
	return (
		<TransparentBubble>
			<LanguageListener>
				<h1>Wer wir sind</h1>
				<h1>Who we are</h1>
			</LanguageListener>
			<SanityBlock id="who-we-are" title={["Wer wir sind", "Who we are"]} />
		</TransparentBubble>
	);
}
