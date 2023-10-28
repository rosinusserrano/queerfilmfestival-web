"use client";

import { ReactNode, useState } from "react";
import MenuRider from "../components/MenuRider";

export default function AwarenessRider({
	expandedMenu,
	setExpanded,
}: { expandedMenu: string; setExpanded: { (menu: string): void } }) {
	const textColor = "#E73E98";
	const backgroundColor = "#BC8C9F";
	return (
		<MenuRider
			title="Awareness"
			textColor={textColor}
			backgroundColor={backgroundColor}
			submenuContentMap={AwarenessMenuToContentMapDeutsch}
			orderedSubmenu={[
				"Awarenesskonzept",
				"Barrieren",
				"Bildungsmaterial zum download",
				"Covid-19",
				"Wie gehen wir mit Kohle um?",
				"Wie wählen wir Filme aus?",
			]}
			expandedMenu={expandedMenu}
			setExpanded={setExpanded}
		/>
		/* <motion.div
				className={"text-submenu text-[color:#E73E98] leading-[85%]"}
				style={{ textShadow: "none" }}
			>
				<MenuUnterpunkt
					title="Awarenesskonzept"
					contentKey="Awarenesskonzept"
					contentMap={AwarenessMenuToContentMapDeutsch}
					setContent={setRiderContent}
				/>
				{", "}
				<MenuUnterpunkt
					title="Barrieren"
					contentKey="Barrieren"
					contentMap={AwarenessMenuToContentMapDeutsch}
					setContent={setRiderContent}
				/>
				{", "}
				<MenuUnterpunkt
					title="Bildungsmaterial zum download"
					contentKey="Bildungsmaterial zum download"
					contentMap={AwarenessMenuToContentMapDeutsch}
					setContent={setRiderContent}
				/>
				{", "}
				<MenuUnterpunkt
					title="Covid-19"
					contentKey="Covid-19"
					contentMap={AwarenessMenuToContentMapDeutsch}
					setContent={setRiderContent}
				/>
				{", "}
				<MenuUnterpunkt
					title="Wie gehen wir mit Kohle um?"
					contentKey="Wie gehen wir mit Kohle um?"
					contentMap={AwarenessMenuToContentMapDeutsch}
					setContent={setRiderContent}
				/>
				{", "}
				<MenuUnterpunkt
					title="Wie wählen wir Filme aus?"
					contentKey="Wie wählen wir Filme aus?"
					contentMap={AwarenessMenuToContentMapDeutsch}
					setContent={setRiderContent}
				/>
			</motion.div>
			<motion.div
				initial={{ height: 0 }}
				animate={controls}
				className="text-xl overflow-hidden"
				style={{ textShadow: "none" }}
			>
				{content}
			</motion.div>
		</MenuRider> */
	);
}

const AwarenessMenuToContentMapDeutsch: { [key: string]: ReactNode } = {
	Awarenesskonzept: <div>Infos folgen...</div>,
	Barrieren: <div>Infos folgen...</div>,
	"Bildungsmaterial zum download": <div>Infos folgen...</div>,
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
