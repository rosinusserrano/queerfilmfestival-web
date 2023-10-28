"use client";

import MenuRider from "../components/MenuRider";
import { ReactNode } from "react";
import { pix } from "../fonts/fonts";

export default function AboutRider({
	expandedMenu,
	setExpanded,
}: { expandedMenu: string; setExpanded: { (menu: string): void } }) {
	const textColor = "#df5497";
	const backgroundColor = "#A42965";
	return (
		<MenuRider
			title="About"
			textColor={textColor}
			backgroundColor={backgroundColor}
			submenuContentMap={AboutMenuToContentMapDeutsch}
			orderedSubmenu={[
				"Wer wir sind",
				"Selbstverständnis",
				"Presse",
				"Kooperationspartner_innen",
				"Volunteer",
			]}
			expandedMenu={expandedMenu}
			setExpanded={setExpanded}
		/>
	);
}

const AboutMenuToContentMapDeutsch: { [key: string]: ReactNode } = {
	Kooperationspartner_innen: (
		<p>
			Wir stehen für dieses Projekt in Kooperation mit dem Verein QueerWeg e.V.
			und mit finanzieller Förderung durch das Zukunftspaket. Durch die
			Förderung und der tollen Unterstützung vieler Helfies können wir das
			Festival kostenlos anbieten. Unser Festival findet in 10 Räumen statt:
			Kinobar Prager Frühling, CineDing, Lulu Kino, CandyCrush, Juicy S3xshop,
			Fuge, Ostapotheke, Pögehaus, Heizhaus, GarageOst. Und in Zusammenarbeit
			mit unseren tollen Workshop, Performance und Diskussionspartner_innen: ….
		</p>
	),
	Presse: (
		<div>
			<p>Ihr könnt alle Infos finden unter:</p>
			<p>
				Fotos auf Flickl:
				<br />
				Website: https://queerfilmfestivalconnection.de
				<br />
				Instagram: <span className={pix.className}>@</span>
				queerfilmfestivalleipzig
			</p>
			<p>
				Pressekontakt:
				<br />
				Mail:{" "}
				<a href="mailto:press_queerxplicit@riseup.net">
					press_queerxplicit(at)riseup.net
				</a>
				<br />
				Telefon: auf Anfrage
			</p>
		</div>
	),
	Selbstverständnis: (
		<div>
			<p>
				Wir, das Kollektiv hinter den zwei queer_feministischen Filmfestivals
				in Weimar und Leipzig, sind ein Kernteam von mal mehr oder mal weniger
				19 Personen aus Weimar, Jena, Leipzig, Wien und Berlin. Wir haben uns
				Ende 2021 gegründet, um die Sichtbarkeit queerer Themen in unserer
				Gesellschaft zu erhöhen, queere Menschen zu empowern, gemeinsam
				niederschwellig Zugänge zu schaffen, dazuzulernen sowie um
				queer_feministische Perspektiven den zunehmend lauter werdenden rechten
				Meinungen entgegen zu setzen.
				<br />
				Wir selbst sind vorwiegend weiß positionierte FlintaGq*, überwiegend
				gender-queer, studierend, junge Menschen und überwiegend
				ohne be_hinderungen. Daher reflektieren wir aktiv unsere Privilegien,
				und bilden uns stetig weiter um intersektionale Perspektiven
				mitzudenken.
				<br />
				Intersektionale Perspektiven bedeuten für uns ein anti-rassistisches,
				anti-klassistisches, queer_feministisches, anti-faschistisches,
				anti-kapitalistisches, anti-ableistisches, usw. handeln, die
				Verschränkung von verschiedenen Diskriminierungsformen und der
				gemeinsame Kampf dagegen. Wir sehen unsere Positionen innerhalb
				gesellschaftlicher Machtverhältnisse kritisch. Da wir selbst eher in
				einer relativ "homogenen" Realitäten leben, sind die beteiligten
				Künster*innen der Filme, unsere Workshopexpert*innen und alle
				Unterstützer*innen (vor allem unsere tollen Helfies) von besonderer
				Bedeutung für unsere Filmfestivals. Wir verstehen uns weiterhin als
				ein Zusammenschluss, in welchem Interessierte mitwirken können, denen
				ein vielfältiger und intersektionaler Zugang zur Auseinandersetzung mit
				queer_feministischen Themen und Verschränkungen sehr wichtig ist.
				Gemeinsam wollen wir die Bedürfnisse und Belange queerer Menschen in den
				Mittelpunkt rücken, sowie bewusst Raum für weitere queere
				Lebensrealitäten und für Betroffene von verschiedenen
				Diskriminierungsformen lassen. Wir wollen möglichst intersektionale,
				queere, hierarchiearme Räume eröffnen, in denen unsere Teilnehmenden
				ihre Erfahrungen, Bedürfnisse und politische Handlungsspielräume teilen
				und die Festivals mitgestalten können.
			</p>
			<p>
				Wir versuchen stetig Barrieren abzubauen, über Kostenfreiheit, Filme-
				und Workshopsprachen zumeist in Deutsch und Englisch und eine
				Bekanntgabe zu Barrieren und Begehbarkeit (z.B. gehbe_hindertengerechte
				Zugänge und Veranstaltungen in Gebärdensprache), Triggerwarnings und
				Contentnotes im Vorhinein.
			</p>
			<p>
				Im Vorfeld des Festivals werden wir einen extra Beitrag formulieren, wo
				wir die einzelnen Barrieren auflisten werden.
			</p>
			<p>
				Es wird in all unseren Filmvorführungen und weiteren Veranstaltung
				mindestens ein Awarenesteam anwesend sein. Zusätzlich gibt es eine
				anonyme Mailadresse, an welche jederzeit Kritik und/ oder Fragen und
				Anliegen gesendet werden können. Diese lautet:
				<a href="mailto:queerfilmfestival-awareness@riseup.net">
					queerfilmfestival-awareness(at)riseup.net
				</a>
				. Wir freuen uns über Hinweise und ein offenes Feedback, um stetig
				gemeinsam weiter zu lernen.
			</p>
			<br />
			<p>
				Allgemein ist uns klar das wir keine vollständige Sicherheit garantieren
				können und wir noch viele Barrieren abbauen müssen. Das bedeutet für uns
				einen respektvollen Umgang sich selbst und anderen gegenüber,
				aufeinander Acht geben und sich gegenseitig unterstützen, Grenzen
				wahren, und aktiv gegen diskriminierendes und rücksichtsloses Verhalten
				vorzugehen. Wir bitten alle Teilnehmenden auch unbedingt unser Awareness
				Konzept auf der Website und unseren Instagram Accounts (
				<span className={pix.className}>@</span>queerfilmfestivalweimar{" "}
				<span className={pix.className}>@</span>queerfilmfestivalleipzig)
				durchzulesen. Für eine gemeinsam gelebte intersektionale Solidarität!
			</p>
			<p>
				Wir stehen für dieses Projekt in Kooperation mit dem Verein QueerWeg
				e.V. und mit finanzieller Förderung durch das Zukunftspaket. Alle
				Organisator*innen und fast alle Helfer*innen arbeiten ehrenamtlich für
				und bei den Festivals. Alle Künstler*innen, sowie Orte können wir dank
				der Förderung finanziell entlohnen. Für uns als Organisator*innen gilt,
				Ehrenamtliche Arbeit, als unbezahlte Arbeit, können sich nicht alle
				Menschen leisten. Auch bei uns im Kollektiv sind die meisten in einem
				Lohnarbeitsverhältnis oder müssen neben ihrem Studium und der
				ehrenamtlichen Arbeit Lohnarbeiten. Das Konzept der "Ehrenamtsförderung"
				welches die meisten Förderungen verfolgen sehen wir als kritisch. Den es
				ermöglicht nur Menschen die es sich finanziell, psychisch und physisch
				leisten können diese Mehrarbeit zu übernehmen und ihr Umfeld so aktiv
				mitzugestalten. Wir verstehen unsere Arbeit als essenzielle
				Bildungsarbeit für unsere Gesellschaft und den Wandel den wir brauchen
				und finden dass auch diese entlohnt werden müsste. Denn auch, oder
				gerade weil wir gegen Geld und Kapital sind, und uns damit abgefunden
				haben diese unbezahlte Mehrarbeit leisten zu müssen (und Prekarität vor
				Untätigkeit vorziehen), müssen wir gesund bleiben (können) und unsere
				alltäglichen Lebenskosten decken.
			</p>
		</div>
	),
	Volunteer: (
		<div>
			<p>
				Ihr habt Lust mitzumachen, wollt auch eigene Programmpunkte organisieren
				oder mal eine Awarenessschicht übernehmen? Oder ihr seid ein Raum oder
				Performancekollektiv?
			</p>
			<p>
				Schreibt uns gerne auf Instagram{" "}
				<span className={pix.className}>@</span>queerfilmfestivalleipzig
			</p>
		</div>
	),
	"Wer wir sind": <p>Infos folgen...</p>,
};
