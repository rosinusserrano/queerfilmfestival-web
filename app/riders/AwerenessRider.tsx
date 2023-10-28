"use client";

import { ReactNode, useState } from "react";
import MenuRider from "../components/MenuRider";

export default function AwarenessRider({
	expandedMenu,
	setExpanded,
	lang,
}: {
	expandedMenu: string;
	setExpanded: { (menu: string): void };
	lang: "en" | "de";
}) {
	const textColor = "#E73E98";
	const backgroundColor = "#BC8C9F";
	return (
		<MenuRider
			title="Awareness"
			textColor={textColor}
			backgroundColor={backgroundColor}
			submenuContentMap={
				lang === "de"
					? AwarenessMenuToContentMapDeutsch
					: AwarenessMenuToContentMapEnglisch
			}
			orderedSubmenu={
				lang === "de"
					? [
							"Awarenesskonzept",
							"Barrieren",
							"Bildungsmaterial zum download",
							"Covid-19",
							"Wie gehen wir mit Kohle um?",
							"Wie wählen wir Filme aus?",
					  ]
					: ["Concept", "Accessibility", "Covid-19", "Film selection"]
			}
			expandedMenu={expandedMenu}
			setExpanded={setExpanded}
			lang={lang}
		/>
	);
}

const AwarenessMenuToContentMapDeutsch: { [key: string]: ReactNode } = {
	Awarenesskonzept: <div>Infos folgen...</div>,
	Barrieren: <div>Infos folgen...</div>,
	"Covid-19": <div>Infos folgen</div>,
	"Wie gehen wir mit Kohle um?": <div>Infos folgen</div>,
	"Wie wählen wir Filme aus?": (
		<div>
			<p>Wie kommen wir an Filme?</p>
			<p>
				Zum einen haben wir nach zwei vergangenen Festivals bereits eine große
				Anzahl an Kontakten und Künstler*innen/Produzent*innen/Performer*innen
				die wir in diesem Jahr wieder angeschrieben haben. Zum anderen haben wir
				über Instagram Storys und Posts Menschen eingeladen uns Sichtungslinks
				zu schicken. Zusätzlich haben wir auch in diesem Jahr uns das Programm
				andere queere Filmfestivals und alternative Filmvertriebe angeschaut und
				dort gezeigte Filme angeschrieben.
			</p>
			<p>Wie wählen wir aus?</p>
			<p>
				Wir haben eine Tabelle mit allen Filmen. Am Ende gibt es 3 Spalten:
				Kuration Team intern, Kuration Team Wien und Kuration Team
				Leipzig/Weimar. Die jeweiligen Teams/Personen "bewerten" die Filme, in
				Hinblick auf die Übereinstimmung mit unseren Werten (siehe
				Selbstverständnis), und dem Backroundcheck (s.u.). Sind alle gesichtet,
				entscheiden wir wie wir die einzelnen Programme zueinander kuratieren
				und welche Filme rein passen. Dabei ist uns wichtig eine internationale,
				intersektionale, queer_feministische Sichtweise auf queere Themen zu
				zeigen. Wir haben generell mehr Filme als wir zeigen und bezahlen
				können, weshalb wir in jedem Jahr leider nicht alle Filme zeigen können,
				die wir gerne zeigen würden.
			</p>
			<p>
				Andere Dinge auf die wir achten sind auch bestimmte Trigger die
				womöglich in den Filmen beinhaltet sein könnten. Hier fragen wir uns,
				müssen wir den Film zeigen? Sind die Inhalte relevant für das Festival?
				Durch das herausarbeiten des Contents (Inhalt) und möglichen Triggern
				können wir auf SocialMedia die Filme auch vorab schon beschrieben,
				sodass jede*r selbst entscheiden kann zu kommen oder nicht. Allgemein
				stellen wir uns immer wieder die Frage: Was sollen die Filme beinhalten?
				Wir möchten auch queer joy zeigen und nicht immer nur
				Queerfeindlichkeit, auch wenn natürlich beides wichtig ist zu
				thematisieren.
			</p>
			<p>Backroundchecks:</p>
			<p>
				Wir bitten immer darum uns Informationen zu den beteiligten Personen zu
				schicken, wir verstehen und respektieren aber auch, dass das nicht alle
				wollen. Wir möchten nur Filme zeigen die keine Stereotype und
				konservative Narrative beinhalten. Dabei spielt die eigene Position der
				Regie und der Performenden im Film eine wichtige Rolle.
				<br />
				Wir haben uns bei den "Backroundchecks" der Filmemacher*innen folgende
				Fragen gestellt: Wer zeigt welche Perspektiven, aus welcher Sichtweise
				und auf welche Perspektiven sind die Filme produziert, im Bezug auf
				Positionierung in der Gesellschaft, Sexuelle Orientierung,
				Genderidentity,... Uns ist wichtig, dass die Filme aus und nicht über
				die entsprechende Community gehen.
			</p>
		</div>
	),
};

const AwarenessMenuToContentMapEnglisch: { [key: string]: ReactNode } = {
	Concept: "follows soon",
	Accessibility: "follows soon",
	"Covid-19": "follows soon",
	"Film selection": (
		<>
			<p>How do we get films?</p>
			<p>
				On the one hand, after two previous festivals, we already have a large
				number of contacts and artists/producers/performers that we have
				contacted again this year. On the other hand, we have invited people via
				Instagram stories and posts to send us viewing links. In addition, this
				year we also looked at the program of other queer film festivals and
				alternative film distributors and wrote to films shown there.
			</p>
			<p>How do we select?</p>
			<p>
				We have a table with all the films. At the end there are 3 columns:
				Curation Team Internal, Curation Team Vienna and Curation Team
				Leipzig/Weimar. The respective teams/persons "evaluate" the films, in
				terms of conformity with our values (see self-image), and the background
				check (see below). Once all have been screened, we decide how to curate
				the individual programs in relation to each other and which films fit
				in. It is important to us to show an international, intersectional,
				queer_feminist perspective on queer issues. We generally have more films
				than we can show and pay for, so unfortunately we can't show all the
				films we'd like to in any given year.
			</p>
			<p>
				Other things we look for are certain triggers that might be in the film.
				Here we ask ourselves, do we need to show the film? Is the content
				relevant to the festival? By working out the content and possible
				triggers, we can also describe the films in advance on social media, so
				that everyone can decide for themselves whether to come or not. In
				general, we always ask ourselves the question: What should the films
				contain? We also want to show queer joy and not always queer hostility,
				even though both are important to address.
			</p>
			<p>
				Backround checks:
				<br />
				We always ask to send us information about the people involved, but we
				also understand and respect that not everyone wants that. We only want
				to show films that do not contain stereotypes and conservative
				narratives. The director's and performer's own position in the film
				plays an important role.
				<br />
				We asked ourselves the following questions during the "background
				checks" of the filmmakers: Who shows which perspectives, from which
				point of view and on which perspectives are the films produced, in
				relation to positioning in society, sexual orientation, gender
				identity,...? It is important to us that the films are from and not
				about the respective community.
			</p>
		</>
	),
};
