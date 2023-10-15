"use client";

import { motion } from "framer-motion";
import { pix } from "../fonts/fonts";

export default function About({ lang }: { lang: "en" | "de" }) {
	lang = lang ?? "de"
	return (
		<main className="overlay-child flex items-center w-full z-10 backdrop-blur-3xl overlay-parent h-full">
			<motion.div
				className="overlay-child opacity-80 h-full w-full blur-xl bg-[#ffffff70]"
				initial={{ height: 0 }}
				animate={{ height: "100%" }}
			/>
			<motion.div
				className="h-full w-full overlay-child p-8 text-b"
				style={{
					lineHeight: "100%",
				}}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1 }}
			>
				<div className={`${lang === "en" && "hidden"}`}>
					<p>
						Wir, das Kollektiv hinter den zwei queer_feministischen
						Filmfestivals in Weimar und Leipzig, sind ein Kernteam von mal mehr
						oder mal weniger 19 Personen aus Weimar, Jena, Leipzig, Wien und
						Berlin. Wir haben uns Ende 2021 gegründet, um die Sichtbarkeit
						queerer Themen in unserer Gesellschaft zu erhöhen, queere Menschen
						zu empowern, gemeinsam niederschwellige Zugänge zu schaffen,
						dazuzulernen sowie um queer_feministische Perspektiven den zunehmend
						lauter werdenden rechten Meinungen entgegenzusetzen.Wir selbst sind
						vorwiegend weiß positionierte FlintaGq*, überwiegend gender-queer,
						studierend, junge Menschen und überwiegend ohne be_hinderungen.
						Daher reflektieren wir aktiv unsere Privilegien und bilden uns
						stetig weiter, um intersektionale Perspektiven mitzudenken.
						Intersektionale Perspektiven bedeuten für uns ein
						anti-rassistisches, anti-klassistisches, queer_feministisches,
						antifaschistisches, anti-kapitalistisches, anti-ableistisches, usw.
						handeln, die Verschränkung von verschiedenen Diskriminierungsformen
						und der gemeinsame Kampf dagegen. Wir sehen unsere Positionen
						innerhalb gesellschaftlicher Machtverhältnisse kritisch. Da wir
						selbst eher in einer relativ "homogenen" Realitäten leben, sind die
						beteiligten Künstler*innen der Filme, unsere Workshopexpert*innen
						und alle Unterstützer*innen (vor allem unsere tollen Helfies) von
						besonderer Bedeutung für unsere Filmfestivals. Wir verstehen uns
						weiterhin als ein Zusammenschluss, in dem Interessierte mitwirken
						können, denen ein vielfältiger und intersektionaler Zugang zur
						Auseinandersetzung mit queer_feministischen Themen und
						Verschränkungen sehr wichtig ist. Gemeinsam wollen wir die
						Bedürfnisse und Belange queerer Menschen in den Mittelpunkt rücken,
						sowie bewusst Raum für weitere queere Lebensrealitäten und für
						Betroffene von verschiedenen Diskriminierungsformen lassen. Wir
						wollen möglichst intersektionale, queere, hierarchiearme Räume
						eröffnen, in denen unsere Teilnehmenden ihre Erfahrungen,
						Bedürfnisse und politische Handlungsspielräume teilen und die
						Festivals mitgestalten können.
					</p>
					<p>
						Wir versuchen stetig Barrieren abzubauen, über Kostenfreiheit,
						Filme- und Workshopsprachen zumeist in Deutsch und Englisch und eine
						Bekanntgabe zu Barrieren und Begehbarkeit (z.B.
						gehbe_hindertengerechte Zugänge und Veranstaltungen in
						Gebärdensprache), Triggerwarnings und Contentnotes im Vorhinein.
					</p>
					<p>
						Im Vorfeld des Festivals werden wir einen extra Beitrag formulieren,
						wo wir die einzelnen Barrieren auflisten.
					</p>
					<p>
						Es wird in all unseren Filmvorführungen und weiteren Veranstaltungen
						mindestens ein Awarenesteam anwesend sein. Zusätzlich gibt es eine
						anonyme Mailadresse, an welche jederzeit Kritik und/ oder Fragen und
						Anliegen gesendet werden können. Diese lautet:
						queerfilmfestival-awareness
						<span className={`${pix.className}`}>@</span>riseup.net. Wir freuen
						uns über Hinweise und ein offenes Feedback, um stetig gemeinsam
						weiter zu lernen.
					</p>
					<p>
						Allgemein ist uns klar, dass wir keine vollständige Sicherheit
						garantieren können und wir noch viele Barrieren abbauen müssen. Das
						bedeutet für uns einen respektvollen Umgang sich selbst und anderen
						gegenüber, aufeinander Acht geben und sich gegenseitig unterstützen,
						Grenzen wahren, und aktiv gegen diskriminierendes und
						rücksichtsloses Verhalten vorzugehen. Wir bitten alle Teilnehmenden
						auch unbedingt unser Awareness Konzept auf der Website und unseren
						Instagram Accounts (<span className={`${pix.className}`}>@</span>
						queerfilmfestivalweimar{" "}
						<span className={`${pix.className}`}>@</span>
						queerfilmfestivalleipzig) durchzulesen. Für eine gemeinsam gelebte
						intersektionaler Solidarität!
					</p>
					<p>
						Wir stehen für dieses Projekt in Kooperation mit dem Verein QueerWeg
						e.V. und mit finanzieller Förderung durch das Zukunftspaket. Alle
						Organisator*innen und Helfer*innen arbeiten ehrenamtlich für und bei
						den Festivals.
					</p>
				</div>
				<div className={`${lang === "de" && "hidden"}`}>
					<p>
						We, the collective behind the two queer_feminist film festivals in
						Weimar and Leipzig, are a core team of sometimes more or sometimes
						less than 19 people from Weimar, Jena, Leipzig, Vienna and Berlin.
						We were founded at the end of 2021 to increase the visibility of
						queer issues in our society, to empower queer people, to create
						low-barrier accesses together, to learn together and to counter the
						increasingly loud right-wing opinions with queer_feminist
						perspectives.
					</p>
					<p>
						We ourselves are predominantly white-positioned flintaGq*,
						predominantly gender-queer, studying, young people and predominantly
						without disabilities. Therefore, we actively reflect on our
						privileges and constantly educate ourselves to think along
						intersectional perspectives. For us, intersectional perspectives
						mean acting anti-racist, anti-classist, queer_feminist,
						anti-fascist, anti-capitalist, anti-ableist, etc., the intertwining
						of different forms of discrimination and the common struggle against
						them. We critically view our positions within social power
						relations. Since we ourselves tend to live in a relatively
						"homogeneous" reality, the participating artists of the films, our
						workshop experts and all supporters (especially our great helpers)
						are of particular importance for our film festivals. We continue to
						see ourselves as an association in which people, for whom a diverse
						and intersectional approach to the discussion of queer_feminist
						issues and entanglements is very important, can participate.
						Together we want to focus on the needs and concerns of queer people,
						as well as actively leave space for other queer realities of life
						and for those affected by various forms of discrimination. We want
						to open up intersectional, queer spaces with as little hierarchy as
						possible, in which our participants can share their experiences,
						needs and political scope for action and help shape the festivals.
					</p>
					<p>
						We are constantly trying to break down barriers, through free of
						charge events, film and worshops that are mostly spoken in German
						and English, an announcement about barriers and accessibility (e.g.
						access for people with disabilities and events in sign language),
						trigger warnings and content notes in advance.
					</p>
					<p>
						Before the festival we will formulate an extra post where we list
						the individual barriers.
					</p>
					<p>
						There will be at least one awareness team present at all our
						screenings and other events. In addition, there is an anonymous
						email address to which criticism and/or questions and concerns can
						be sent at any time. This is:
						queerfilmfestival-awareness@riseup.net. We are happy to receive tips
						and open feedback so that we can continue to learn together.
					</p>
					<p>
						In general, we are aware that we cannot guarantee complete safety
						and that we still have to break down many barriers. For us, this
						means treating ourselves and others with respect, looking out for
						and supporting each other, maintaining boundaries, and actively
						working against discriminatory and inconsiderate behaviour. We ask
						all participants to read our awareness concept on the website and
						our Instagram accounts (<span className={pix.className}>@</span>
						queerfilmfestivalweimar <span className={pix.className}>@</span>
						queerfilmfestivalleipzig).
					</p>
				</div>
			</motion.div>
		</main>
	);
}
