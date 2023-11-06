import { ReactNode } from "react";
import { pix } from "./fonts/fonts";

export interface ProgrammEntry {
	time: ReactNode;
	location: ReactNode;
	title: ReactNode;
	description?: ReactNode;
}

const locations = {
	luruspin: "Luru Kino (Alte Spinnerei)",
	luru: "Luru Kino",
	heiz: "Heizhaus",
	cine: "CineDing",
	ostg: "OstGarage",
	poege: "Pögehaus",
	osta: "W1",
	fuge: "Fuge",
	prag: "Kino Prager Frühling",
	candy: "CandyKrush",
	juicy: "Juicy",
	hop: "E97",
};

const barriereRollstuhlgerecht = (
	<p>
		Barrieren:
		<br />
		Rollstuhlgerecht zugänglich, genaue Aufschlüsselung siehe Unterpunkt
		Barrieren
	</p>
);

const festivalZentraleDetails = (
	<>
		<p>
			Details:
			<br />
			Die Festivalzentrale ist die ganze Zeit offen für alle Interessierten,
			Künstler*innen und unser Team. Hier werden wir zusammen arbeiten,
			gemeinsam aus unserer Zine-Wand lesen, bei einem Tee aufwärmen und
			austauschen. Infomaterialien und STI-Schutz (Lecktücker und Kondome)
			liegen zum Mitnehmen aus.
		</p>
		<p>
			Eng:
			<br />
			The festival headquarters is open the whole time for all interested
			people, artists and our team. Here we will work together, read together
			from our zine wall, warm up with a cup of tea and exchange ideas.
			Information material and STI protection (licks and condoms) will be
			available to take away.
		</p>
	</>
);

export const programmMittwoch: ProgrammEntry[] = [
	{
		title: "Eröffnung mit Sekt und O-Saft",
		location: locations.luruspin,
		time: "18:30 - 19:00",
		description: (
			<>
				<p>
					Adresse:
					<br />
					Spinnereistraße 7, 04179 Leipzig
				</p>
				<p>
					Barrieren: Rollstuhlgerecht zugänglich, genaue Aufschlüsselung siehe
					Unterpunkt Barrieren
				</p>
			</>
		),
	},
	{
		title: "Peformance mit Flor Scharf",
		location: locations.luru,
		time: "19:10 - 19:30",
		description: (
			<>
				<p>
					Adresse:
					<br />
					Spinnereistraße 7, 04179 Leipzig
				</p>
				<p>ab 18 Jahre/ age 18+</p>
				<p>
					Barrieren: Rollstuhlgerecht zugänglich, genaue Aufschlüsselung siehe
					Unterpunkt Barrieren
				</p>
			</>
		),
	},
	{
		title: "Queer Shorts (Xplicit) 01",
		location: locations.luru,
		time: "20:00 - 22:00",
		description: (
			<>
				<p>
					Adresse:
					<br />
					Spinnereistraße 7, 04179 Leipzig
				</p>
				<p>ab 18 Jahre/ age 18+</p>
				<p>
					Barrieren: Rollstuhlgerecht zugänglich, genaue Aufschlüsselung siehe
					Unterpunkt Barrieren
				</p>
			</>
		),
	},
	{
		title: "Festivalzentrale und Meeting Point",
		location: `${locations.luru} (Café/Bar)`,
		time: "14:00 - 23:00",
		description: (
			<>
				<p>
					Adresse:
					<br />
					Spinnereistraße 7, 04179 Leipzig
				</p>
				<p>
					Barrieren:
					<br />
					Rollstuhlgerecht zugänglich, genaue Aufschlüsselung siehe Unterpunkt
					Barrieren
				</p>
				<p>
					Details:
					<br />
					Die Festivalzentrale ist die ganze Zeit offen für alle Interessierten,
					Künstler*innen und unser Team. Hier werden wir zusammen arbeiten,
					gemeinsam aus unserer Zine-Wand lesen, bei einem Tee aufwärmen und
					austauschen. Infomaterialien und STI-Schutz (Lecktücker und Kondome)
					liegen zum Mitnehmen aus.
				</p>
				<p>
					Eng: The festival headquarters is open the whole time for all
					interested people, artists and our team. Here we will work together,
					read together from our zine wall, warm up with a cup of tea and
					exchange ideas. Information material and STI protection (licks and
					condoms) will be available to take away.
				</p>
			</>
		),
	},
];

export const programmDonnerstag: ProgrammEntry[] = [
	{
		title: "Workshop 01: Vouging mit Phenix",
		location: locations.heiz,
		time: "15:00 - 17:00",
		description: (
			<>
				<p>
					Adresse:
					<br />
					Alte Salzstraße 63, 04209 Leipzig
				</p>
				<p>
					Max. Teilnehmer:innenzahl:
					<br />
					15 Personen
				</p>
				<p>
					Anmeldung unter:
					<br />
					<a href="application_queerxplicit@riseup.net">
						application_queerxplicit(at)riseup.net
					</a>
				</p>
				<p>
					Sprache:
					<br />
					Deutsch / Englisch
				</p>
				<p>
					Barrieren:
					<br />
					Nicht Rollstuhlgerecht, der Raum befindet sich im 1. Stock ohne Lift.
					Weitere Infos unter dem Unterpunkt Barrieren.
				</p>
				<br />
				<br />
				<h2>Details:</h2>
				<p>
					<br />
					Voguing ist ein Tanzstil, der in den 1960er Jahren in New York
					(Harlem) unter queeren BiPoC und Latinx Personen entstanden ist.
					<br />
					Angelehnt u.a. an dem Mode Magazin „Vogue“ und den Supermodels zu
					jener Zeit hat sich aus dem Imitieren der Modelposen mit der Zeit ein
					Tanz entwickelt, der heute in 3 Stile unterschieden wird, Old way, New
					Way und Vogue Fem.
					<br />
					Der Stil „Vogue Fem“ bzw. ursprünglich genannt: „FemQueen
					Performance“, wurde vor allem von Schwarzen und Latinx trans* Frauen
					geprägt.
					<br />
					Die sogenannte Ballroom Community, die diesen Tanz etabliert hat,
					erfuhr durch ihre Intersektion BiPOC & queer zweifach Diskriminierung
					in der cis-heteronormativen Mehrheitsgesellschaft, sodass dieser Tanz
					eine Form des Widerstands darstellt, aber auch als Ausdruck des wahren
					Selbst verstanden werden kann.
					<br />
				</p>
				<p>
					In dem Kurs werden wir uns auf den Stil „Vogue Fem“ fokussieren und
					die 5 Elemente dieses Stils lernen.
					<br />
					Der Kurs ist inklusiv & anfängerfreundlich. Du brauchst kein
					tänzerisches Vorwissen mitbringen, sondern einfach eine offene
					Einstellung und die Bereitschaft, über neue Kulturen zu lernen. Komm
					einfach in der Kleidung, in der du dich wohl fühlst.
					<br />
					Meine Empfehlung: lange Hose und/oder Knieschoner für sensible Knie.
				</p>
				<p>
					PS: Ich möchte vor allem Leute ermutigen, die von Rassismus und/oder
					Homo- und Transfeindlichkeit betroffen sind, an dem Kurs teilzunehmen,
					auch wenn ihr keinerlei Tanzerfahrung habt und dies euer erster
					Tanzkurs ist. Voguing ist so viel mehr als nur ein Tanz - ihr werdet
					es merken! ;)
				</p>
				<p>
					english:
					<br />
					Voguing is a dance style that originated in the 1960s in New York
					(Harlem) among queer BiPoC and Latinx people.
					<br />
					Inspired by the fashion magazine "Vogue" and the supermodels of the
					time, the imitation of model poses developed over time into a dance
					that is now divided into 3 styles, Old Way, New Way and Vogue Fem.
					<br />
					The style "Vogue Fem" or originally called: "FemQueen Performance",
					was mainly influenced by Black and Latinx trans* women.
					<br />
					The so-called Ballroom Community, which established this dance,
					experienced double discrimination in the cis-heteronormative majority
					society through their intersection BiPOC & queer, so that this dance
					represents a form of resistance, but can also be understood as an
					expression of the true self.
				</p>
				<p>
					In the course we will focus on the style "Vogue Fem" and learn the 5
					elements of this style.
					<br />
					The course is inclusive & beginner friendly. You don't need to have
					any previous dance experience, just an open mind and a willingness to
					learn about new cultures. Just come in the clothes you feel
					comfortable in.
					<br />
					My recommendation: long pants and/or knee pads for sensitive knees
				</p>
				<p>
					PS: I especially want to encourage people who have been affected by
					racism and/or homophobia and transphobia to join the class, even if
					you have no dance experience and this is your first dance
					class.Voguing is so much more than just a dance - you will realise
					that ;)
				</p>
			</>
		),
	},
	{
		title: "Girls, Girls, Girls (Jugendspielfilm)",
		location: locations.luru,
		time: "16:00 - 18:00",
		description: (
			<>
				<p>Kooperation mit Jugendclub</p>
				<p>
					Adresse:
					<br />
					Spinnereistraße 7, 04179 Leipzig
				</p>
				<p>FSK 12</p>
				{barriereRollstuhlgerecht}
			</>
		),
	},
	{
		title:
			"Queer Shorts (Xplicit) mit Publikumsgespräch mit Lilian Liquid, Luna E. Heine und Flor Scharf",
		location: locations.cine,
		time: "18:30 - 20:45",
		description: (
			<>
				<p>ab 18 Jahre/ age 18+</p>
				<p>
					Adresse:
					<br />
					Karl-Heine-Str. 83, 04229 Leipzig
				</p>
				<p>
					18:30-20 Uhr: Film
					<br />
					20-20:45 Uhr: Publikumsgespräch
				</p>
				{barriereRollstuhlgerecht}
			</>
		),
	},
	{
		title: "Langspielfilm Framing Agnes",
		location: locations.cine,
		time: "21:00 - 23:00",
		description: (
			<>
				<p>ab 18 Jahre/ age 18+</p>
				<p>
					Adresse:
					<br />
					Karl-Heine-Str. 83, 04229 Leipzig
				</p>
				{barriereRollstuhlgerecht}
			</>
		),
	},
	{
		title: "Festivalzentrale und Meeting Point",
		location: `${locations.luru} (Café/Bar)`,
		time: "14:00 - 18:30",
		description: (
			<>
				<p>
					Adresse:
					<br />
					Spinnereistraße 7, 04179 Leipzig
				</p>
				{barriereRollstuhlgerecht}
				<p>
					Details:
					<br />
					Die Festivalzentrale ist die ganze Zeit offen für alle Interessierten,
					Künstler*innen und unser Team. Hier werden wir zusammen arbeiten,
					gemeinsam aus unserer Zine-Wand lesen, bei einem Tee aufwärmen und
					austauschen. Infomaterialien und STI-Schutz (Lecktücker und Kondome)
					liegen zum Mitnehmen aus.
				</p>
				<p>
					Eng:
					<br />
					The festival headquarters is open the whole time for all interested
					people, artists and our team. Here we will work together, read
					together from our zine wall, warm up with a cup of tea and exchange
					ideas. Information material and STI protection (licks and condoms)
					will be available to take away.
				</p>
			</>
		),
	},
	{
		title: "Festivalzentrale und Meeting Point",
		location: `${locations.cine} (Bar)`,
		time: "17:00 - 00:30",
		description: (
			<>
				<p>
					Adresse:
					<br />
					Karl-Heine-Str. 83, 04229 Leipzig
				</p>
				{barriereRollstuhlgerecht}
				{festivalZentraleDetails}
			</>
		),
	},
];

export const programmFreitag: ProgrammEntry[] = [
	{
		title: "So damm easy going (Jugendspielfilm)",
		location: locations.luru,
		time: "14:00 - 15:45",
		description: (
			<>
				<p>Kooperation mit Jugendclub</p>
				<p>
					Adresse:
					<br />
					Spinnereistraße 7, 04179 Leipzig
				</p>
				<p>FSK 12</p>
				{barriereRollstuhlgerecht}
			</>
		),
	},
	{
		title: "Chill Out mit Gäst*innen",
		location: locations.luru,
		time: "14:00 - 18:00",
	},
	{
		title: "Xplicit shorts and Talk",
		location: locations.luru,
		time: "16:15 - 18:00",
		description: (
			<>
				<p>
					Adresse:
					<br />
					Spinnereistraße 7, 04179 Leipzig
				</p>
				{barriereRollstuhlgerecht}
			</>
		),
	},
	{
		title:
			"Workshop 02: Ableismus in Beziehungen und Sexualität mit Rollfender Widerstand",
		location: locations.poege,
		time: "18:00 - 20:00",
		description: (
			<>
				<p>
					Adresse:
					<br />
					Hedwigstraße 20, 04315 Leipzig (+ online)
				</p>
				<p>
					Max. Teilnehmer:innenzahl:
					<br />
					15 Personen
				</p>
				<p>
					Anmeldung unter:
					<br />
					<a href="mailto:application_queerxplicit@riseup.net">
						application_queerxplicit(at)riseup.net
					</a>
				</p>
				<br />
				{barriereRollstuhlgerecht}
				<br />
				<h2>Details:</h2>
				<p>Workshop „Ableismus in Beziehungen und Sexualität“</p>
				<p>
					Nach einem kurzen Input, gibt es einen Austausch zu Erfahrungen von
					Ableismus in (sexuellen) Beziehungen. Je nach Bedarf können Menschen
					im Gespräch oder mit Theater-methoden in kleineren und/oder größeren
					Gruppen sich dem Thema annähern.
				</p>
				<p>
					Wir möchten insbesondere beh*inderte, ver*rückte und neuro-divergente
					menschen ermutigen zu kommen und ihre Erfahrungen zu teilen. Der
					Workshop ist offen für alle Menschen, denn wir sind alle von Ableismus
					betroffen. Crip Power, yeah!
				</p>
				<p>
					Barrierefreiheit: Der Raum ist stufenlos erreichbar. Es gibt eine
					barrierefreie Toilette. Online-Teilnahme ist möglich über folgenden
					Link: XXX. Übersetzung in Gebärdensprache ist nicht vorhanden. Bitte
					bei Bedarf uns schreiben, dann geben wir unser Bestes, es zu
					organisieren!
				</p>
			</>
		),
	},
	{
		title: "Queer(ing)Pornos: Queer joy, aktivism und sex work",
		location: locations.ostg,
		time: "19:00 - 20:30",
		description: (
			<>
				<p>
					Paneel mit Cosmo Terra und River Rouge (Berlin), Jorge the Obscence
					und PornBetter in Kooperation mit CandyKrush/ Cosmo Terra and River
					Rouge (Berlin) and PornBetter in cooperation with CandyKrush
				</p>
				<p>
					Adresse:
					<br />
					Hermann-Liebmann-Straße 65-67, 04315 Leipzig
				</p>
				<p>
					language: english with german translation/ Sprache: englisch mit
					deutscher Übersetzung
				</p>
			</>
		),
	},
	{
		title: "Stripp-Performance",
		location: locations.ostg,
		time: "21:00 - 21:45",
		description: (
			<>
				<p>
					mit Cosmo Terra and River Rouge/ Stripp-performance with Cosmo Terra
					and River Rouge (Berlin)
				</p>
				<p>ab 18 Jahre/ age 18+</p>
				<p>Einlass ab 20:30</p>
			</>
		),
	},
	{
		title: "Pleasure & Pride - Party",
		location: locations.osta,
		time: "22:00 - 06:00",
		description: (
			<>
				<p>ab 18 Jahre/ age 18+</p>
				<p>Adresse nur auf Anfrage via Instagram</p>
			</>
		),
	},
	{
		title: "Festivalzentrale",
		location: locations.fuge,
		time: "12:00 - 19:00",
		description: (
			<>
				<p>
					Adresse:
					<br />
					Wurzner Straße 20, 04315 Leipzig
				</p>
			</>
		),
	},
];

export const programmSamstag: ProgrammEntry[] = [
	{
		title: "queere Kurzfilme (Jugendprogramm)",
		location: locations.fuge,
		time: "14:00 - 15:30",
		description: (
			<>
				<p>all ages</p>
				<p>
					Adresse:
					<br />
					Wurzner Straße 20, 04315 Leipzig
				</p>
			</>
		),
	},
	{
		title: "Workshop 03: DIY Strap-On Harness mit Finn",
		location: locations.candy,
		time: "14:30 - 16:30",
		description: (
			<>
				<p>(Adresse via Workshopanmeldung)</p>
				<p>
					Max. Teilnahmezahl:
					<br />
					15 Personen
				</p>
				<p>
					Anmeldung unter:
					<br />
					<a href="mailto:application_queerxplicit@riseup.net">
						application_queerxplicit(at)riseup.net
					</a>
				</p>
			</>
		),
	},
	{
		title:
			'Workshop 04: "distress your stress" - DIY Workshop mit Atelier AnnExpected',
		location: locations.hop,
		time: "16:00 - 18:30",
		description: (
			<>
				<p>
					Adresse:
					<br />
					auf Anfrage
				</p>
				<p>
					Max. Teilnahmezahl:
					<br />
					15 Personen
				</p>
				<p>
					***bring deine eigenen Textilien (Shirts, Hoodies, Caps, Jacken ect.)
					zum Umgestalten mit!***
				</p>
				<p>
					Workshopleitung:
					<br />
					Ann (they/them) instagram: <span className={pix.className}>@</span>
					atelierannexpected
				</p>
				<p>
					Sprache:
					<br />
					deutsch/english
				</p>
				<p>
					Barrieren:
					<br />
					wir arbeiten im Workshop mit Chlor. Wenn du eine schwere
					Atemwegserkrankung hast, könnte das für dich unangenehm sein.
				</p>
				<br />
				<br />
				<h2>Details:</h2>
				<p>
					DIY or Die right ?<br />
					I’m Ann (they/them) from Atelier AnnExpected. I’m an artist or
					creative mind whatever you want to call it who experiments with second
					hand/dead stock fabrics and materials. I don’t have a specific style
					or vision. My interest lays in just creating things and figuring out
					how to express myself. I like the idea of anti cis term clothing with
					diy, punkish and up cycling vibes.
				</p>
				<p>
					The workshop : “distress your stress” I want to offer some knowledge
					how to give clothes or old fabrics a second life in order to reduce
					consumption and increase the life of our clothes.
					<br />
					We can create reshape redesign up cycle our garments together for this
					I would like you to bring old clothes or textiles on which you can
					experiment.
					<br />
					Because I mainly do everything at home we keep the tools simple. We
					will need scissors, needles, sanding paper, brushes or even tooth
					brushes. Whatever comes to your crazy cute minds just bring it, we
					will figure out what to do with it. Hairties, waterbottels, chlorine,
					textilmarkers, Acryl, ink, nails whatever. We will also provide some
					gloves and scissors for the workshop but I kindly ask you to bring
					whatever so we can figure out new things together and get creative.
					<br />
					We can distress, batik, rearrange and much more. Basically just have
					some fun and forget about the daily life.
				</p>
				<p>
					Deutsch:
					<br />
					Ich bin Ann (they/them) vom Atelier AnnExpected. Ich bin eine
					Künstler*in oder ein kreativer Kopf, wie auch immer man es nennen
					möchte, die mit gebrauchten/verfallenen Stoffen und Materialien
					experimentiert. Ich habe keinen bestimmten Stil oder eine bestimmte
					Vision. Mein Interesse liegt einfach darin, Dinge zu erschaffen und
					herauszufinden, wie ich mich ausdrücken kann. Mir gefällt die Idee,
					Kleidung gegen den Cis-Begriff mit DIY-, Punk- und Upcycling-Vibes zu
					entwerfen.
				</p>
				<p>
					Der Workshop: "distress your stress" Ich möchte Wissen vermitteln, wie
					man Kleidung oder alten Stoffen ein zweites Leben geben kann, um den
					Verbrauch zu reduzieren und die Lebensdauer unserer Kleidung zu
					erhöhen.
					<br />
					Wir können gemeinsam unsere Kleidungsstücke umgestalten und upcyceln.
					Dazu bitte ich euch, alte Kleidung oder Textilien mitzubringen, an
					denen wir experimentieren können. Da ich alles hauptsächlich zu Hause
					mache, halten wir die Werkzeuge einfach. Wir brauchen eine Schere,
					Nadeln, Schleifpapier, Bürsten oder sogar Zahnbürsten. Was auch immer
					euch in den Sinn kommt, bringt es einfach mit und wir überlegen uns,
					was wir damit machen. Haargummis, Wasserflaschen, Chlor, Textilmarker,
					Acryl, Tinte, Nägel, was auch immer. Wir werden auch Handschuhe und
					Scheren für den Workshop zur Verfügung stellen, aber ich bitte euch,
					alles mitzubringen, damit wir gemeinsam neue Dinge erfinden und
					kreativ werden können.
					<br />
					Wir können distressieren, batikieren, umgestalten und vieles mehr. Im
					Grunde genommen einfach nur Spaß haben und den Alltag vergessen.
				</p>
			</>
		),
	},
	{
		title: "Lesung „p*rno – eine unverschämte Analyse“ mit Mandita Öming",
		location: "Vögelei",
		time: "16:00 - 18:00",
		description: (
			<>
				<p>
					Adresse: <br />
					Wurzner Str. 13, 04315 Leipzig
				</p>
				<p>Sprache: deutsch/ german</p>
				<p>
					In Kooperation mit Vögelei begrüßen wir Mandita Öming zu einer Lesung
					aus ihrem neuen Buch "Porno - Eine unverschämte Analyse".
				</p>
				<p>
					Lasst uns gemeinsam in eine aufregende Diskussion über die Welt des
					Pornos eintauchen! Wie queer ist der Mainstream-Porno? Kann Porno
					feministisch sein? Wenn ja, wie? Und wo ziehen wir die Grenze zwischen
					Filmkunst und Porno?
				</p>
				<p>
					Madita Oeming, renommierte Pornowissenschaftlerin und Autorin, wird
					uns an diesem Abend anhand ausgewählter Passagen aus ihrem Buch "Porno
					- Eine unverschämte Analyse" (Rowohlt 2023) Antworten auf diese und
					andere spannende Fragen näherbringen. Ihr seid herzlich eingeladen,
					zuzuhören und mitzudiskutieren.
				</p>
				<p>
					English: Reading "P*rno - An outrageous analysis" with Mandita Öming
				</p>
				<p>
					In cooperation with Voegelei, we welcome Mandita Öming for a reading
					from her new book "Porno - Eine unverschämte Analyse" (P*rn-An
					outrageous analysis) Let's dive into an exciting discussion about the
					world of porn together! How queer is mainstream porn? Can porn be
					feminist? If so, how? And where do we draw the line between film art
					and porn? Madita Oeming, renowned porn scholar and author, will
					provide us with answers to these and other exciting questions on this
					evening based on selected passages from her book "Porno - Eine
					unverschämte Analyse" (Rowohlt 2023). You are cordially invited to
					listen and join in the discussion.
				</p>
			</>
		),
	},
	{
		title: "Workshop 05: Shibari mit An Antidote",
		location: locations.fuge,
		time: "18:00 - 21:00",
		description: (
			<>
				<p>(Anfänger*innen/ Mittelstufe)</p>
				<p>ab 18 Jahre/ age 18+</p>
				<p>
					Adresse:
					<br />
					Wurzner Straße 20, 04315 Leipzig
				</p>
				<p>
					Max. Teilnahmezahl:
					<br />
					15 Personen
				</p>
				<p>
					Anmeldung unter:
					<br />
					<a href="mailto:application_queerxplicit@riseup.net">
						application_queerxplicit(at)riseup.net
					</a>
				</p>
			</>
		),
	},
	{
		title: "crip activism Kurzfilme mit Publikumsgespräch",
		location: locations.prag,
		time: "19:00 - 21:00",
		description: (
			<>
				<p>
					Adresse:
					<br />
					Haus der Demokratie, Bernhard-Göring-Straße 152, 04277 Leipzig
				</p>
			</>
		),
	},
	{
		title: "Queer Shorts (Xplicit)",
		location: locations.prag,
		time: "21:30 - 23:00",
		description: (
			<>
				<p>ab 18 Jahre/ age 18+</p>
				<p>
					Adresse:
					<br />
					Haus der Demokratie, Bernhard-Göring-Straße 152, 04277 Leipzig
				</p>
			</>
		),
	},
	{
		title: "Festivalzentrale und Meeting Point mit Infostand von Hydra",
		location: locations.hop,
		time: "13:00 - 18:00",
		description: (
			<>
				<p>
					Adresse:
					<br />
					Auf Anfrage via Instagram, Eisenbahnstraße
				</p>
			</>
		),
	},
	{
		title: "Festivalzentrale und Meeting Point",
		location: locations.prag,
		time: "18:30 - 23:00",
		description: (
			<>
				<p>
					Adresse:
					<br />
					Haus der Demokratie, Bernhard-Göring-Straße 152, 04277 Leipzig
				</p>
			</>
		),
	},
];

export const programmSonntag: ProgrammEntry[] = [
	{
		title: "Vegan Frühstücks-Queer Shorts (Xplicit)",
		location: locations.hop,
		time: "11:00 - 13:00",
		description: (
			<>
				<p>ab 18 Jahre/age 18+</p>
				<p>
					Adresse:
					<br />
					auf Anfrage via Instagram
					<br />
					(Eisenbahnstraße)
				</p>
			</>
		),
	},
	{
		title:
			"Workshop 06: Subtle Seductions: Queer Performance & Dance Workshop with Emil",
		location: locations.fuge,
		time: "13:00 - 15:00",
		description: (
			<>
				<p>
					Adresse:
					<br />
					Wurzner Straße 20, 04315 Leipzig
				</p>
				<p>
					Anmeldung unter:
					<br />
					<a href="mailto:application_queerxplicit@riseup.net">
						application_queerxplicit(at)riseup.net
					</a>
				</p>
			</>
		),
	},
	{
		title: "Workshop 07: Pornscriptwriting with LofiCherry",
		location: locations.poege,
		time: "15:00 - 18:00",
		description: (
			<>
				<p>ab 18 Jahre/ age 18+</p>
				<p>
					Adresse:
					<br />
					Hedwigstraße 20, 04315 Leipzig (+ online)
				</p>
				<p>
					Max. Teilnahmezahl:
					<br />
					10 Personen
				</p>
				<p>
					Anmeldung unter:
					<br />
					<a href="mailto:application_queerxplicit@riseup.net">
						application_queerxplicit(at)riseup.net
					</a>
				</p>
			</>
		),
	},
	{
		title: "Queerer Widerstand gegen rechte Hetze – Panell",
		location: locations.candy,
		time: "15:00 - 16:30",
		description: (
			<>
				<p>in Kooperation mit dem Candykrush</p>
				<p>
					Adresse:
					<br />
					auf Anfrage via Instagram
				</p>
			</>
		),
	},
	{
		title: "Political queer shorts (Xplicit)",
		location: locations.candy,
		time: "17:00 - 19:00",
		description: (
			<>
				<p>in Kooperation mit dem Candykrush</p>
				<p>
					Adresse:
					<br />
					auf Anfrage via Instagram
				</p>
			</>
		),
	},
	{
		title: "Workshop 08 by Black Sexwork collective with Olivia",
		location: "auf Anfrage",
		time: "18:00 - 20:00",
		description: (
			<>
				<p>Adresse wird bei Workshopanmeldung bekannt gegeben</p>
				<p>
					Anmeldung unter:
					<br />
					<a href="mailto:application_queerxplicit@riseup.net">
						application_queerxplicit(at)riseup.net
					</a>
				</p>
			</>
		),
	},
	{
		title: "Final Queer shorts",
		location: locations.prag,
		time: "20:00 - 22:00",
		description: (
			<>
				<p>
					Adresse:
					<br />
					Haus der Demokratie, Bernhard-Göring-Straße 152, 04277 Leipzig
				</p>
			</>
		),
	},
	{
		title: "Afterparty mit Karaoke",
		location: locations.prag,
		time: "22:00 - 24:00",
		description: (
			<>
				<p>
					Adresse:
					<br />
					Haus der Demokratie, Bernhard-Göring-Straße 152, 04277 Leipzig
				</p>
				<p>
					Fünf Tage Festival, 62 Filme, 9 Workshops, 2 Performances und 2
					Podiumsdiskussionen sind vorbei. Lasst uns nochmal zusammen kommen,
					die Community feiern, sich austauschen und connencten. Debbie wird uns
					durch den Abend moderieren und uns zu queerer Karaoke anstimmen. Wir
					freuen uns auf euch, kommt vorbei.
				</p>
			</>
		),
	},
	{
		title: "Festivalzentrale und Meeting Point mit Infostand von Hydra",
		location: locations.hop,
		time: "11:00 - 19:30",
		description: (
			<>
				<p>
					Adresse:
					<br />
					auf Anfrage via Instagram, Eisenbahnstraße
				</p>
			</>
		),
	},
	{
		title: "Festivalzentrale",
		location: locations.prag,
		time: "19:30 - 24:00",
	},
];
