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
	osta: "Osti",
	fuge: "Fuge",
	prag: "Kino Prager Frühling",
	candy: "CandyKrush",
	juicy: "Juicy",
	hop: "(Adresse auf Anfrage)",
};

export const programmMittwoch: ProgrammEntry[] = [
	{
		title: "Eröffnung mit Sekt und O-Saft",
		location: locations.luruspin,
		time: "18:00 - 19:00",
		description: (
			<>
				<p>
					Adresse:
					<br />
					Spinnereistraße 7, 04179 Leipzig
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
			</>
		),
	},
	{
		title: "Fun queer Shorts (Xplicit) mit Publikumsgespräch",
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
			</>
		),
	},
	{
		title: "Langspielfilm (tba)",
		location: locations.luru,
		time: "21:00 - 23:00",
		description: (
			<>
				<p>
					Adresse:
					<br />
					Karl-Heine-Str. 83, 04229 Leipzig
				</p>
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
			</>
		),
	},
];

export const programmFreitag: ProgrammEntry[] = [
	// {
	// 	title: "Le Paradise (Jugendspielfilm)",
	// 	location: locations.luru,
	// 	time: "14:00 - 15:45",
	// 	description: (
	// 		<>
	// 			<p>Kooperation mit Jugendclub</p>
	// 			<p>
	// 				Adresse:
	// 				<br />
	// 				Spinnereistraße 7, 04179 Leipzig
	// 			</p>
	// 			<p>FSK 12</p>
	// 		</>
	// 	),
	// },
	{
		title: "Chill Out mit Gäst*innen",
		location: locations.luru,
		time: "14:00 - 18:00",
	},
	{
		title: "P*rn and talk",
		location: locations.luru,
		time: "16:15 - 18:00",
		description: (
			<>
				<p>
					Adresse:
					<br />
					Spinnereistraße 7, 04179 Leipzig
				</p>
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
					Paneel mit Cosmo und River von einem stripper Kollektiv(Berlin) und
					PornBetter in Kooperation mit CandyKrush/ Cosmo and River from a
					stripper collective (Berlin) and PornBetter in cooperation with
					CandyKrush
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
					mit Cosmo und River von einem stripper Kollektiv(Berlin) / with Cosmo
					and River from a stripper collective (Berlin)
				</p>
				<p>ab 18 Jahre/ age 18+</p>
				<p>Einlass ab 20:30</p>
			</>
		),
	},
	{
		title: "Queer Party",
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
		title: "Workshop 04: Atelier AnnExpected",
		location: locations.fuge,
		time: "16:00 - 18:30",
		description: (
			<>
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
			</>
		),
	},
	{
		title: "Kooperation: Lesung mit Mandita Oeming: Porno",
		location: "Vögelei",
		time: "16:00 - 18:00",
		description: (
			<>
				<p>in Kooperation mit Vögelei S*xshop</p>
				<p>
					Adresse: <br />
					Wurzner Str. 13, 04315 Leipzig
				</p>
				<p>Sprache: deutsch/ german</p>
			</>
		),
	},
	{
		title: "Workshop 05: Shibari mit An Antidote",
		location: locations.poege,
		time: "18:00 - 21:00",
		description: (
			<>
				<p>(Anfänger*innen/ Mittelstufe)</p>
				<p>ab 18 Jahre/ age 18+</p>
				<p>
					Adresse:
					<br />
					Hedwigstraße 20, 04315 Leipzig (+ online)
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
		location: "tba",
		time: "11:00 - 13:00",
		description: (
			<>
				<p>ab 18 Jahre/age 18+</p>
			</>
		),
	},
	{
		title: "Workshop 06: Queer Performance & Dance Workshop with Emil",
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
