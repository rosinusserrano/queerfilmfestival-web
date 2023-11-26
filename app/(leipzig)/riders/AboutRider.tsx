"use client";

import MenuRider from "../components/MenuRider";
import { ReactNode } from "react";
import { pix } from "../../fonts/fonts";
import Image from "next/image";
import logoTraeger from "@/public/logos/Logo_Trägerverein_Queerweg.png";
import logoPink from "@/public/logos/logo_PinkLabelTV.png";
import logoCandy2 from "@/public/logos/logo_candykrush_2.jpg";
import logoSalz from "@/public/logos/Logo_Edition-Salzgeber.jpg";
import logoCandy1 from "@/public/logos/Logo_candykrush_1.jpg";

export default function AboutRider({
	expandedMenu,
	setExpanded,
	lang,
}: {
	expandedMenu: string;
	setExpanded: { (menu: string): void };
	lang: "en" | "de";
}) {
	const textColor = "#df5497";
	const backgroundColor = "#A42965";
	return (
		<MenuRider
			title={"About"}
			textColor={textColor}
			backgroundColor={backgroundColor}
			submenuContentMap={
				lang === "de"
					? AboutMenuToContentMapDeutsch
					: AboutMenuToContentMapEnglish
			}
			orderedSubmenu={
				lang === "de"
					? [
							"Wer wir sind",
							"Selbstverständnis",
							"Presse",
							"Kooperationspartner_innen",
							"Volunteer",
					  ]
					: [
							"Who we are",
							"Self-understanding",
							"Press",
							"Partners",
							"Volunteer",
					  ]
			}
			expandedMenu={expandedMenu}
			setExpanded={setExpanded}
			lang={lang}
		/>
	);
}

const AboutMenuToContentMapDeutsch: { [key: string]: ReactNode } = {
	Kooperationspartner_innen: (
		<>
			<p>
				Wir stehen für dieses Projekt in Kooperation mit dem Verein QueerWeg
				e.V. und mit finanzieller Förderung durch das Zukunftspaket. Durch die
				Förderung und der tollen Unterstützung vieler Helfies können wir das
				Festival kostenlos anbieten. Unser Festival findet in 10 Räumen statt:
				Kinobar Prager Frühling, CineDing, Lulu Kino, CandyCrush, Juicy S3xshop,
				Fuge, Ostapotheke, Pögehaus, Heizhaus, GarageOst. Und in Zusammenarbeit
				mit unseren tollen Workshop, Performance und Diskussionspartner_innen:
				LofiCherry, AnAntidote, BerlinStripperCollective,
				BlackSexworkCollective, PornBetter, Satysfire, Rollfender Widerstand,
				Anexpected, Phenix usw.
			</p>
			<p>Unser Trägerverein:</p>
			<Image
				src={logoTraeger}
				alt="logo kooperationspartner"
				className="mix-blend-multiply md:max-w-[50%] pb-4"
			/>
			<p>Unsere Kooperationspartner*innen in zufälliger Reihenfolge:</p>
			<div className="grid grid-cols-1 sm:grid-cols-auto-2 gap-12 justify-items-center">
				<Image
					src={logoCandy1}
					alt="logo kooperationspartner"
					className="mix-blend-multiply max-w-[250px]"
				/>
				<Image
					src={logoPink}
					alt="logo kooperationspartner"
					className="pb-4 max-w-[250px]"
				/>
				<Image
					src={logoSalz}
					alt="logo kooperationspartner"
					className="pb-4 max-w-[250px]"
				/>
			</div>
		</>
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
				<span className={pix.className}>@</span>queerfilmfestivalleipzig <br />
				Wenn ihr kein Instagram habt, aber dennoch in die Helfis Telegramgruppe
				möchtet, schreibt uns auf: application_queerxplicit(at)riseup.net
			</p>
		</div>
	),
	"Wer wir sind": (
		<>
			<p>
				Hallo, wir sind mal mehr oder mal weniger 19 junge Personen aus Weimar,
				Jena, Leipzig, Wien und Berlin und organisieren unter anderem zum 3. mal
				das Queerefilmfestival in Weimar und in diesem Jahr zum ersten mal das
				Queer Xplicit Queerfilmfestival Leipzig. Neben den zwei
				Queerfilmfestivals sind wir zu anderen Themen oder in anderen
				Kollektiven politisch aktiv und versuchen diese Arbeiten miteinander zu
				verknüpfen.
				<br />
				Ende 2021 haben wir das Festival, mit noch weniger Menschen, gegründet,
				um niederschwellig die Sichtbarkeit queerer Themen in unserer
				Gesellschaft zu erhöhen, uns und andere queere Menschen zu empowern,
				gemeinsam niederschwellige Zugänge zu schaffen, dazuzulernen, community
				arbeit zu machen, sowie um (intersektionale) queer_feministische
				Perspektiven den zunehmend lauter werdenden rechten Meinungen entgegen
				zu setzen. Dabei organisieren wir uns basisdemokratisch und autonom,
				arbeiten ehrenamtlich und kostenfrei für unsere Teilnehmenden,
				kommunizieren hierarchiearm (soweit wir es hinbekommen) in Plenas
				miteinander und diskutieren viel über Themen die über das Festival
				hinaus gehen z.B. über Barrieren, das polizieren von queeren Körpern,
				Awarenessarbeit, Transformative Gerechtigkeit und sexpositive Räume usw.
				und versuchen dabei auch in der Praxis unseren politischen Ansprüchen
				gerecht zu werden.
			</p>
			<p>Wir sind auch immer offen für neue Leute, sprich uns einfach an!</p>
		</>
	),
	
};

const AboutMenuToContentMapEnglish: { [key: string]: ReactNode } = {
	Partners: (
		<>
			<p>
				We stand for this project in cooperation with QueerWeg e.V. and with
				financial support from the Zukunftspaket. Through the funding and the
				great support of many Helfies we can open the festival for free. Our
				festival will take place in 10 spaces: Kinobar Prager Frühling,
				CineDing, Lulu Kino, CandyCrush, Juicy S3xshop, Fuge, Ostapotheke,
				Pögehaus, Heizhaus, GarageOst. And in collaboration with our great
				workshop, performance and discussion partners: LofiCherry, AnAntidote,
				BerlinStripperCollective, BlackSexworkCollective, PornBetter, Satysfire,
				Rollfender Widerstand, Anexpected, Phenix aso.
			</p>
			<p>Our supporting organization:</p>
			<Image
				src={logoTraeger}
				alt="logo kooperationspartner"
				className="mix-blend-multiply md:max-w-[50%] pb-4"
			/>
			<p>Our partners in random order:</p>
			<div className="grid grid-cols-1 sm:grid-cols-auto-2 gap-12 justify-items-center">
				<Image
					src={logoCandy1}
					alt="logo kooperationspartner"
					className="mix-blend-multiply max-w-[250px]"
				/>
				<Image
					src={logoPink}
					alt="logo kooperationspartner"
					className="pb-4 max-w-[250px]"
				/>
				<Image
					src={logoSalz}
					alt="logo kooperationspartner"
					className="pb-4 max-w-[250px]"
				/>
			</div>
		</>
	),
	Press: (
		<>
			<p>You can find all info at:</p>
			<p>
				Photos on Flickl:
				<br />
				Website:{" "}
				<a href="https://queerfilmfestivalconnection.de">
					https://queerfilmfestivalconnection.de
				</a>
				<br />
				Instagram: <span className={`${pix.className}`}>@</span>
				queerfilmfestivalleipzig
			</p>
			<p>
				Press contact:
				<br />
				Mail:{" "}
				<a href="mailto:press_queerxplicit@riseup.net">
					press_queerxplicit(at)riseup.net
				</a>
				<br />
				Phone: on request
			</p>
		</>
	),
	"Self-understanding": (
		<>
			<p>
				We, the collective behind the two queer_feminist film festivals in
				Weimar and Leipzig, are a core team of sometimes more or sometimes less
				than 19 people from Weimar, Jena, Leipzig, Vienna and Berlin. We were
				founded at the end of 2021 to increase the visibility of queer issues in
				our society, to empower queer people, to create low-barrier accesses
				together, to learn together and to counter the increasingly loud
				right-wing opinions with queer_feminist perspectives.
			</p>
			<p>
				We ourselves are predominantly white-positioned flintaGq*, predominantly
				gender-queer, studying, young people and predominantly without
				disabilities. Therefore, we actively reflect on our privileges and
				constantly educate ourselves to think along intersectional perspectives.
				For us, intersectional perspectives mean acting anti-racist,
				anti-classist, queer_feminist, anti-fascist, anti-capitalist,
				anti-ableist, etc., the intertwining of different forms of
				discrimination and the common struggle against them. We critically view
				our positions within social power relations. Since we ourselves tend to
				live in a relatively "homogeneous" reality, the participating artists of
				the films, our workshop experts and all supporters (especially our great
				helpers) are of particular importance for our film festivals. We
				continue to see ourselves as an association in which people, for whom a
				diverse and intersectional approach to the discussion of queer_feminist
				issues and entanglements is very important, can participate. Together we
				want to focus on the needs and concerns of queer people, as well as
				actively leave space for other queer realities of life and for those
				affected by various forms of discrimination. We want to open up
				intersectional, queer spaces with as little hierarchy as possible, in
				which our participants can share their experiences, needs and political
				scope for action and help shape the festivals.
			</p>
			<p>
				We are constantly trying to break down barriers, through free of charge
				events, film and worshops that are mostly spoken in German and English,
				an announcement about barriers and accessibility (e.g. access for people
				with disabilities and events in sign language), trigger warnings and
				content notes in advance.
			</p>
			<p>
				Before the festival we will formulate an extra post where we list the
				individual barriers.
			</p>
			<p>
				There will be at least one awareness team present at all our screenings
				and other events. In addition, there is an anonymous email address to
				which criticism and/or questions and concerns can be sent at any time.
				This is: queerfilmfestival-awareness(at)riseup.net. We are happy to
				receive tips and open feedback so that we can continue to learn
				together.
			</p>
			<p>
				In general, we are aware that we cannot guarantee complete safety and
				that we still have to break down many barriers. For us, this means
				treating ourselves and others with respect, looking out for and
				supporting each other, maintaining boundaries, and actively working
				against discriminatory and inconsiderate behaviour. We ask all
				participants to read our awareness concept on the website and our
				Instagram accounts (<span className={`${pix.className}`}>@</span>
				queerfilmfestivalweimar <span className={`${pix.className}`}>@</span>
				queerfilmfestivalleipzig).
			</p>
			<p>For a collectively lived intersectional solidarity!</p>
			<p>
				We stand for this project in cooperation with the association QueerWeg
				e.V. and with financial support from the Zukunftspaket. All organizers
				and almost all helpers work voluntarily for and at the festivals. Thanks
				to the funding, we are able to pay all artists and venues. For us as
				organizers, voluntary work, as unpaid work, not all people can afford.
				Even with us in the collective, most are in a wage employment
				relationship or have to do wage work in addition to their studies and
				volunteer work. We are critical of the concept of "honorary work", which
				is pursued by most funding programs. It only allows people who can
				afford it financially, psychologically and physically to take on this
				extra work and to actively shape their environment. We understand our
				work as essential educational work for our society and the change we
				need and find that this should also be remunerated. Because even, or
				precisely because we are against money and capital, and have resigned
				ourselves to having to do this unpaid extra work (and prefer
				precariousness to inactivity), we must (be able to) remain healthy and
				cover our everyday living costs.
			</p>
		</>
	),
	Volunteer: (
		<>
			<p>
				You want to participate, organize your own program points or take over
				an awareness shift? Or are you a space or performance collective?
			</p>
			<p>
				Feel free to write us on Instagram{" "}
				<span className={`${pix.className}`}>@</span>queerfilmfestivalleipzig
				<br />
				If you don't have Instagram but would still like to join the Helfis
				Telegram group, write us at:
				<br />
				application_queerxplicit(at)riseup.net
			</p>
		</>
	),
	"Who we are": (
		<>
			<p>
				Hello, we are sometimes more or sometimes less 19 young people from
				Weimar, Jena, Leipzig, Vienna and Berlin and organize among other things
				for the 3rd time the Queer Film Festival in Weimar and this year for the
				first time the Queer Xplicit Queer Film Festival Leipzig. Besides the
				two queer film festivals we are politically active on other topics or in
				other collectives and try to connect these works. At the end of 2021 we
				founded the festival, with even less people, to increase the visibility
				of queer topics in our society in a low-threshold way, to empower
				ourselves and other queer people, to create low-threshold access
				together, to learn, to do community work, as well as to challenge
				(intersectional) queer_feminist perspectives against the increasingly
				loud right-wing opinions. We organize ourselves in a grassroots
				democratic and autonomous way, work on a voluntary basis and free of
				charge for our participants, communicate with low hierarchy (as far as
				we can manage it) in plenaries and discuss a lot about topics that go
				beyond the festival, e.g. barriers, policing queer bodies, awareness
				work, transformative justice and sexpositive spaces and so on, and try
				to meet our political demands in practice as well.
			</p>
			<p>We are also always open to new people, just talk to us!</p>
		</>
	),
};
