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
				<p>
					Details:
					<br />
					Der Eröffnungsabend – (k)ein Querschnitt durch unser Programm
				</p>
				<p>
					Heute Abend gibt es vielleicht (k)ein Querschnitt durch das Programm,
					weil wir uns irgendwann gefragt haben was ein Querschnitt überhaupt
					ist, bei so vielen individuellen, grandiosen Filmen. So ist es in
					jedem Fall eine viellfältige und mit liebe kuratierte Abfolge an
					Filmen die queere Körper und Sexualität feiern und in den Mittelpunkt
					stellen.
					<br />
					Viel Spaß bei den wunderbaren Filmen!
				</p>
				<p>
					Engl:
					<br />
					The opening night - (not) a cross-section of our program
				</p>
				<p>
					Tonight there is perhaps (not) a cross-section of the program, because
					at some point we asked ourselves what a cross-section actually is,
					with so many individual, magnificent films. In any case, it is a
					diverse and lovingly curated sequence of films that celebrate and
					focus on queer bodies and sexuality.
					<br />
					Enjoy the wonderful films!
				</p>
				<h3>
					1. The sumptuous life of the crazy cat lady and her salacious house
					kittens (2022) | 05:16 min | USA | Charlie G. Fengler| english
					subtitels
				</h3>
				<p>CN: petplay, slapping/ spanking</p>
				<p>
					Synopsis: The Crazy cat lady (reclaiming crazy) holds the power and
					carries the stigma. The Crazy cat lady knows what alternative family
					choices are, she cares and love, she fails as a woman in the
					intersection made by societal concepts of sexuality and mental health,
					she bears the weight of liberation. The Crazy cat lady has been
					gendered, but she doesn’t have one, she IS one. She lives with her
					kitties and she entertains herself in their lust. Crazy as a
					self-description
				</p>
				<p>
					Backround: Charlie lives and works on and for the dis-identification
					of everything that has been given to us as immutable: gender, nation,
					orientation. They started life flagged in Bologna (Italy) but spent
					multiple years among Europe and USA, trained in Industrial and Costume
					Design and mutated into a compound of experiences and techniques
					recognizable as "artistic practices against patriarchy".
					<a href="http://www.charliegfennel.com/">
						http://www.charliegfennel.com/
					</a>
				</p>
				<h3>
					2. Narcisco (2023) | 5:30min | Argentina| Hedonistas with the
					performer Levon | language: Spanish with english subtitels
				</h3>
				<p>
					CN: Genitalien
					<br />
					Tags: #masturbation
				</p>
				<p>
					Synopsis: Levon looks after a friend's apartment for a few days while
					she is away. In the house he finds a piece of lingerie hanging and is
					tempted to try it on. 
				</p>
				<p>
					Background: Hedonistas is an audiovisual experience that portrays
					sexual pleasure and puts on screen the heterogeneity of bodies,
					desires and identities. We are an audiovisual production company based
					in Buenos Aires formed by independent filmmakers, sex workers,
					performers and visual artists.{" "}
					<a href="http://www.hdn.com.ar/">http://www.hdn.com.ar/</a>
				</p>

				<h3>
					3. Octopuss (2022) | 10:18min | Schweiz, Oil Productions with AAA &
					St-Yann | English
				</h3>

				<p>
					CN: spanking/ slapping, nudity
					<br />
					Tags: #explicit sex #wasser #schleim
				</p>

				<p>
					OCTOPUSS is an apnea dive into wet fantasies, hot fountains. Here, the
					fluids have flowed. Perhaps they are still flowing. A timeless
					immersion, OCTOPUSS travels in the abyss of our imaginary.
				</p>

				<p>
					Backround: Oil is a queer collective incubating ethical pornographic
					productions founded in Lausanne in 2018. Co-produced by a dozen
					members spread between Switzerland, France and Argentina.
				</p>

				<h3>
					4. Putos do Centro (DOWNTOWN DELIVERY) (2022) | 15min | Brazil | Jeffe
					Grochovski with the performers Mika & Sadan | language: Portuguese
					with english subtitels
				</h3>
				<p>
					CN: nudity, explicit sex, spanking, smoking, peitsche, gagball, leder,
					seil, spanking/ slapping, spucken, cannabis blatt tattoowiert
					<br />
					Tags: # oralsex #analsex
				</p>
				<p>
					Content: At a random encounter at Roosevelt square, Mika seduces Sadan
					to go to his apartment. In a game of power, Mika puts up a sweaty
					kinky hook-up.
				</p>
				<p>
					Backround: With audiovisual and art production. Jeffe investigates
					contemporary meanings in pornography, exploring a poetic universe
					guided by gender and sexuality studies. Part of ediyporn.
				</p>
				<p>
					<b>*10 minutes break*</b>
				</p>
				<h3>
					5. The Pizzatopping (2019) | 3:42min. | Deutschland | Ethan Folk and
					Ty Wardwell | performers: Jamal Phoenix | english
				</h3>
				<p>Synopsis: Horny Pizza orders up a Hungry Boy.</p>
				<p>
					CN: nudity, explicit sex, spanking/ slapping, scars, spucke,
					fleisch(essen)
					<br />
					Tags: #analsex #fingering #licking
				</p>
				<p>
					Backround: Ethan Folk and Ty Wardwell are art partners based in
					Berlin. They make experimental performances and films which probe
					masculinity, queerness, and privilege through intimate encounters
					between their bodies, cash, and dairy products. Buttermilk Films is a
					Berlin-based boutique production house serving queer porn and
					documentary.{" "}
					<a href="https://www.cargocollective.com">www.cargocollective.com</a>
				</p>

				<h3>
					6. Transit (2022) |USA | 4:57min | Jiz Lee & Vanniall | english,no
					dialoge
				</h3>
				<p>
					CN: Nacktheit
					<br />
					Tags: explicit sex
				</p>

				<p>Synopsis: Hotel guests discover a room for two.</p>

				<p>
					Backround: Vanniall(she/her) Vanniall is an advocate for trans and
					sexworker communities, as well as an out U+ advocate, sharing her
					experience as an HIV+performer on her blog and with publications like
					the Huffington Post. Jiz Lee(they/ them) Porn polymath JizLee has
					worked in the adult film industry for over a decade, appearing in more
					than 200 projects from six countries spanning independent erotic films
					and hardcore gonzo pornography. Jiz is a versatile non-binary
					performer, an author and producer, and a keyplayer in the queer porn
					movement
				</p>

				<h3>
					7. Pista (2022) | 13:39min. | Brazil | hiperlinque |performers José
					Eduardo, Larissa Jah, Luxúria Orgasmicah | language: Portuguese with
					english subtitels
				</h3>
				<p>
					CN: Nacktheit, schnelle Bildabfolge
					<br />
					Tags: #groupsex #party
				</p>
				<p>
					Content: Climax is different! Ledah and Clemix activate the sounds
					that groove José, Larissa and Luxúria in a seductive dance that
					transforms the dance floor into a sensual space of lust and affection.
				</p>
				<p>
					Backround: Hiperlinque is an audiovisual and body artist, working with
					dance, performance, cinematography and editing. Hiperlinque does not
					know how to work alone, he always seeks a group. He lives a pet life
					under the name Faíska and is a member of Banda Fisiologica, a
					dystopian punk band.{" "}
				</p>
				<p>
					<b>**10 min break**</b>
				</p>

				<h3>
					8. When the lights go out in the darkroom (2023)| 7 min| Polen |
					Daniela Weiss & Marianna Rodziewicz | english with english subtitels
				</h3>

				<p>
					CN: nudity, sexuelle Handlungen werden in einem poem beschrieben
					<br />
					Tags: #animation #anus
				</p>
				<p>
					Synopsis: We did it together remotely, creating visuals and oral
					narrative. We were inspired by our dirty meetings, imagined a cute and
					cunty space in 3D and looped it to help you come in trans. Chaotic
					poem read by a voice in cute piggery perfumed with poppers, the body
					loosen and is thinking about other possibilities of bottoming while
					deconstructing penetration, moving with fluids. We are queering gay,
					stink hydrofeminism and un-cis-ing bodies. Swimming in mud between
					hardore visibility and haptic visuals.
				</p>
				<p>
					Backround: Inspiriert vom Countersexual Manifesto 2028 (P.B.
					Preciado). Daniela Weiss is a neurodivergent queer trans girl from
					Poland interested in looking for alternatives to institutions and and
					art as an alchemy of theories. Her practice is based mostly on chaotic
					research and writing. Out of this process comes works that are largely
					text/word based - banners, sentences, manifestos and video narratives
					that remain situated in a place-specific context post-photography and
					post-pornography most of the time. The topics that she mentions are
					psycho-disability, kink, queer bodies, education, allotment gardens,
					passivity and hydrofeminism. In Marianna artistic practice, drawing
					from autobiographical experiences, she focuses on human as an
					individual embedded in society. She raises the issues of objectivity
					and subjectivity. She looks for the relationship between human being
					and reality, talking about the relationship with space, other people,
					nature and self. 
				</p>

				<h3>
					9. Cum as you are (2022) | 12 min | German | Hanna Schaich | english
				</h3>
				<p>
					CN: in language: Rape Described (until 3:20)! , explosion, death (body
					parts), needles, blood, explicit violence (knives, stabs, wounds),
					screams, fire, dissociation, in sound: screams, in picture: whip,
					crush glass/ break on body (incl. genitals), spanking, slap, beating
					(fist), ripping open underwear, peeing on, knife (also on genitals),
					baton, cage, non-vegan food
					<br />
					Tags: #RagePorn #groupsex #fightpatriarcy
				</p>
				<p>
					Synopsis: What if in supposedly individually experienced mental and
					physical wounds lies thecollective energy for resistance?What if we
					squirt, dance, eat, whip away a society cramped in shame and norms?
					Oreven abolish it?What if the anger of all fighters, who live in
					existing and past patriarchal structures,who had to endure them, who
					suffered from them or have come to death by them,what if that anger
					became an overwhelming, transforming energy turning us intofreed,
					unadjusted and loud people, ready for a positive change? Then we fight
					foruncompromised being. For love freed from shame. For life as it
					could be. Aliveorigiastically. FLINTA* fight back!
				</p>

				<p>
					Backround: The piece started after having flashbacks that I couldn’t
					control no more I experienced all my rape and violent experiences
					again and it felt like my brain can’t stop them no more. But I could
					write my way out and so the Poem started. To gain control back I took
					Martial Arts classes and was researching a lot about female
					ejaculation to talk about stigma and how to gain lust back. One thing
					lead to another and I understood I am not alone in it when reaching
					out to collaborators. - Hanna S.
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
		title: "Workshop 01: Voguing mit Phenix",
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

				<h2>
					Girls, Girls, Girls (2023) / 100min. / Finnland / Alli Haapasalo mit
					Aamu Milonoff, Eleonoora Kauhanen, Linnea Leino u. a. / Deutsch
				</h2>
				<p>
					<b>language: only in german!</b>
				</p>
				<p>
					CN: toxisches Familienverhältnis (unterlassene Sorgearbeit),
					Kapitalistische Freizeitvorstellungen, toxische Beziehung(en)
				</p>
				<p>
					#Coming-of-Age #teens #Liebesfilm #Selbstbestimmung #Erwachsenwerden
					#Male Gaze #Empowerment #Freund*innenschaft #Leistungssport
				</p>
				<h3>Inhalt</h3>
				<p>
					Rönkkö will alles: Liebe auf den ersten Blick und superguten Sex. Aber
					die Realität ist: die Typen, die sie mit ihrem expliziten Humor auf
					den Schulpartys aufreißt, sind entweder zu unsicher oder zu
					routiniert. Der Funke will nicht überspringen – nicht in der Liebe,
					nicht beim Sex. Der Rat ihrer abgeklärten besten Freundin Mimmi
					lautet: üben, üben, üben. Mit Sex kennt sie sich aus. Mit Gefühlen
					eher nicht. Da geht sie lieber auf Sicherheitsabstand. Ihr ist schon
					der Teamgeist beim Hockey in der Schule zu emotional. Und sollte
					jemand es wagen, den einzufordern, macht sie schon mal mit dem
					Hockeyschläger klar, was eine Außenseiterin wie sie von Teamgeist
					hält.
				</p>
				<p>
					Während bei der tapfer suchenden Rönkkö beziehungstechnisch alles
					gleich öde bleibt, verliebt sich ausgerechnet Mimmi Hals über Kopf in
					die beliebte Eiskunstläuferin Emma. Es ist Liebe auf den ersten Blick.
					Beidseitig. Eigentlich perfekt. Und genau das macht Mimmi Angst. Was,
					wenn sie für die ehrgeizige Eiskunstläuferin nur Mittel ist, um aus
					ihrer eng getakteten Welt der Disziplin und Trainingspläne
					auszubrechen?
				</p>
				<p>
					Und Emma selber? Beim Training läuft es gerade nicht gut. Sie steht
					unter großem Erwartungsdruck, aber der dreifache Lutz gelingt nicht
					mehr, ihr wichtigster Sprung. Mimmi, die Rebellin, ist für sie
					vielleicht wirklich eine willkommene Komplizin auf den Weg in eine
					neue Freiheit. Emma hat sich tatsächlich Hals über Kopf in Mimmi
					verliebt, aber wie machst du das jemanden klar, der lieber alles um
					sich herum zerstört, als zu riskieren verletzt zu werden.
				</p>
				<p>
					Empfehlung vom pädagogischen Filmtipp Zoom: Politisches
					Bildungsmaterial für ca. 10. Klasse ab 15 Jahren, mehr Material unter:
					https://salzgeber.de/media/viki-filmtipp-zoom-girls_girls_girls.pdf
				</p>
				<h3>Background</h3>
				<p>
					Die finnische Regisseurin Alli Haapasalo erzählt in ihrem gefeierten
					Film von der Suche nach Liebe und gutem Sex jenseits aller
					(Rollen-)Klischees. Der Film handelt von tiefer Freund*innenschaft,
					von selbstbestimmter Sexualität, ohne auf gängige Darstellungen von
					Freund*innenschaft, Flirt, Liebe und Sex zurückzugreifen. ALLI
					HAAPASALO (Regie) wurde 1977 in Helsinki geboren. Sie studierte am
					Filmdepartment der Hochschule für Kunst und Design Helsinki und an der
					Tisch School of the Arts der New York University. „Girls Girls Girls“
					ist ihr dritter Langspielfilm. Mehr Infos unter:
					<a href="https://salzgeber.de/girlsgirlsgirls">
						https://salzgeber.de/girlsgirlsgirls
					</a>
				</p>
			</>
		),
	},
	{
		title:
			"Queer Shorts Xplicit 02 mit Publikumsgespräch mit Lilian Liquid, Luna E. Heine und Flor Scharf",
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
				<p>Sprache: diverse with english subtitels; talk is in english</p>
				<h3>
					Scars (2023)| 6:35min | Germany| Lilian Liquid | with Lilian Liquid
					and Fuchs | english
				</h3>
				<p>CN: scars</p>
				<h4>Synopsis</h4>
				<p>
					Lilian‘s body tells the story of trauma and transformation. Wearing
					her superhero cape she wanders the rims of the city. Fragments of an
					intense encounter put a spotlight on her contradictory existence.
				</p>
				<h4>Background</h4>
				<p>
					"I was able to let myself go in a completely different way because I
					felt totally safe for the first time. I could feel that the only thing
					that mattered was that my partner and I were doing well and nothing
					else-without any pressure to deliver something, a certain result or
					image of myself." - Lilian
				</p>
				<p>#strap-on #mastubation #explicitsex #forest</p>
				<h3>
					Mutal mastubation (2020) | 7:30min | Großbritanien | altSHIFT with
					Ella Venus, Bishop Black and Kali Sudhra | english Subtitels
				</h3>
				<h4>Synopsis</h4>
				<p>
					Performers are people and people are performers... Some of us love to
					be watched and some of us love to watch... and a lot of us are
					exhibitionists and voyeurs in equal amounts. What if the performers
					you love in porn wanted to watch you too?
				</p>
				<h4>Background</h4>
				<p>
					We recently started altSHIFT to utilize our expertise to create
					alternative porn, moving away from mainstream practices in the
					industry. We have a passion to make beautiful, arousing and unusual
					content. We want to harness our audiences’ progressive understanding
					and practice of sexuality, moving away from well-worn porn tropes. We
					care about LGBTQ+ stories, kink and BDSM, #MeToo, feminism, ethical
					non-monogamy, subverting traditional relationship roles, gender
					fluidity, and the orgasm gap to name a few. We want our porn to turn
					you on, but also to address the policing of our gender and sexuality.
				</p>
				<p>
					#nudity #explictsex #analsex #mastubation #voyeurism #consenttalk
					#oralsex #sextoy
				</p>
				<h3>
					Estrellarse (2022) | Chile | 12:44 min | Amadalia Liberté with Aylin,
					Cat, Carolina Gutiérrez, Dorian Artemis, Emiliano Lanata, Galatea
					Jorquera, Joaquín Carrasco, Luigi de La Paz, Nataniel Izquierdo, Pia
					de la Costa, Valentina Ximena | mostly english subtitels
				</h3>
				<h4>Synopsis</h4>
				<p>
					This piece born with the sighting of more than 50 starfish stranded on
					the last rock that separates the sea from the sand. In addition to the
					obvious similarity between the textures and shapes, this phenomenon
					inspires a research process on the behavior of starfish in relation to
					the ways of life that Latin American dissidents adopt to subsist
					inside this fascist, neoliberal and heteronorm system. I take the
					analogy of stranding as a dissident collective survival method against
					a system that violates and censors our existence. Resulting in an
					audiovisual piece, which mixes corporalities with sounds of aquatic
					and human nature, which invites the audience to immerse themselves in
					an erotic sensory experience.
				</p>
				<h4>Background</h4>
				<p>
					Individually, his self-taught training has allowed him to build
					experiential knowledge around the recording of performing arts and
					political performance. At the same time and individually, he develops
					performative proposals focusing his actions on political activism,
					dissidence, the affective / bonding and mental health located in the
					Latin American context. Throughout her artistic development she has
					been part of different collectives that explore from the body, dance,
					improvisation and the appropriation of public spaces.
				</p>
				<p>#starfish #group #nudity #ecosystem #tongue #spit</p>
				<h3>
					let our fingers do the dancing (2023) | Germany | Ocular Spice with
					Mika Diva and LesboPro | english
				</h3>
				<p>CN: explicit sex, nudity</p>
				<h4>Synopsis</h4>
				<p>
					The video showcases a lesbian encounter during a party. Two people
					share intimate moments away from the busy party in the bathroom. The
					idea is that sometimes in a room filled with people, music and good
					vibes, all you want is to be close to that one person.
				</p>
				<p>#party #wc #tattoos #fingering #oralsex</p>
				<h3>
					KLAPPE (2022) GERMANY / 18 mins/ Matt Lambert with GIUSEPPE, AXEL
					RUBBERAX, KAIDEN FORD, BILLY VEGA, CAIN / english
				</h3>
				<p>CN: piss, spiked collar, spanking, spitting</p>
				<p>
					An ode to club toilet cruising and the inversion of intimacy
					experienced so often in queer relationships – fuck first, then
					friendship.Produced by Erika Lust Films in Association with VITIUM
				</p>
				<p>
					#party #clubtoilet #explicitsex #nudity #group #tattoos #analsex
					#licking #oralsex
				</p>
				<h3>
					Gostosa de Galochas ( Squashed in Galoshes) | 28min. | Brazil |
					language: portuguese with english subtitels | Paulx and Iluminatrix
					with the performers Iluminatrix, Cyber, Profania| english subtitels
				</h3>
				<p>
					CN: cigarettes, spanking/slapping, paddle, biting, gagging, bondage
				</p>
				<h3>Content</h3>
				<p>
					Iluminatrix is ready to play the sub with Cyber in a special birthday
					session, but a surprise changes the plans a bit…
				</p>
				<h4>Background</h4>
				<p>
					Paulx is a non-binary fag, whore, pornografer, performer, positHIVe
					and hacker of imaginaires. Criticizing the devices of power, their
					production seeks to explore the various languages ​​of political
					bitching. Produces, performs and edits. Profania is a non-binary, born
					and raised in the interior of Bahia, She is a multimedia artist
					focused on performance and a researcher of oral pleasures.
				</p>
				<p>
					#party #nudity #oralsex #explicitsex #group #tattoos #piercings
					#consenttalk
				</p>
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
				<p>Admission from 6:00pm/ Einlass ab 18:00 Uhr</p>
				<p>
					language: english with german translation/ Sprache: englisch mit
					deutscher Übersetzung
				</p>
				<h3>Content</h3>
				<p>
					While porn seems to be the perfect moral panic, we see here at this
					festival that it is also empowering, that queer joy is celebrated in
					porn. This scares society and gives us the opportunity to embrace
					diverse bodies and harness the subversive potential of sex work. The
					rights of sex workers, queer people and marginalized groups are
					threatened by far-right politics in Germany and all over the world.
					Only by thinking about the struggles of sex workers and queer people
					together and fighting for the most marginalized groups can we protect
					queer lives.
				</p>
				<p>
					Luno Riot (no pronouns) is a non binary artist, activist and sex
					worker.
				</p>
				<p>
					Esti (she/no pronouns) helps to create a queer space at Candy Krush
					(candykrush13120) and encourages queer joy at Porn Better (prn.bttr).
				</p>
				<p>
					Cosmo Terra is a sex worker, drag artist, dancer, and transsexual
					menace. He aims to help spread awareness about stripping and sex work
					as a trans man.
				</p>
				<p>
					River Roux is performance artist, aerialist and sex worker. A luscious
					mix of bounce, flow and brains River dances through the air with raw
					sensuality earned by over a decade in the sex industry.
				</p>
				<p>
					JorgeTheObscene is a Chilean filmmaker and actor, therapist and sex
					worker, currently based in Berlin. Since 2014 he started his
					exploration in queer porn: as producer, performer, co-editor,
					script-writer, director and editor.
				</p>
				<p>
					Bevor and afterwards you can get your toothgems made at
					<span className={`${pix.className}`}>@</span>_hotline.bling
					(recommended price 1 stone/ 15€). They will be there with a stand from
					6pm to 11pm (with a break during the events).
				</p>
				<p>German:</p>
				<h2>Queer(ing) Porn: Queere Lust, Aktivismus und Sexarbeit</h2>
				<p>
					Podium mit Cosmo Terra, River Roux, Jorge the Obscene, Luno Riot und
					moderiert von Esti (PornBetter, Candykrush)
				</p>
				<p>Sprache: englisch mit deutscher Übersetzung</p>
				<h3>Inhalt</h3>
				<p>
					Während Porno die perfekte moralische Panik zu sein scheint, sehen wir
					hier auf diesem Festival, dass er auch ermächtigend ist, dass queere
					Freude, Lust und Empowerment im Porno gefeiert wird. Das macht der
					Gesellschaft Angst und gibt uns die Möglichkeit, verschiedene Körper
					zu umarmen und das subversive Potenzial der Sexarbeit zu nutzen. Die
					Rechte von Sexarbeiter*innen, queeren Menschen und maginalisierten
					Gruppen sind durch rechtsextreme Politik in Deutschland und auf der
					ganzen Welt bedroht. Nur wenn wir über die Kämpfe von
					Sexarbeiter*innen und queeren Menschen gemeinsam nachdenken und für
					die am meisten marginalisierten Gruppen kämpfen, können wir queeres
					Leben schützen.
				</p>
				<p>
					Luno Riot (keine Pronomen) ist ein*e nicht-binäre Künstler*in,
					Aktivist*in und Sexarbeiter*in.
				</p>
				<p>
					Esti (sie/keine Pronomen) hilft, einen queeren Raum bei Candy Krush
					(candykrush13120) zu schaffen und ermutigt queere Freude bei Porn
					Better (prn.bttr).
				</p>
				<p>
					Cosmo Terra ist ein Sexarbeiter, Drag-Künstler, Tänzer und
					trans-Aktivist. Er möchte als Transmann das Bewusstsein für Strippen
					und Sexarbeit schärfen.
				</p>
				<p>
					River Roux ist Performance-Künstler*in, Luftakrobat*in und
					Sexarbeiter*in. Mit einer köstlichen Mischung aus Schwung, Flow und
					Hirn tanzt River durch die Luft mit einer rohen Sinnlichkeit, die
					River sich in über einem Jahrzehnt in der Sexindustrie erworben hat.
				</p>
				<p>
					JorgeTheObscene ist ein chilenischer Filmemacher und Schauspieler,
					Therapeut und Sexarbeiter, der derzeit in Berlin lebt. Seit 2014
					beschäftigt er sich mit queeren Pornos: als Produzent, Darsteller,
					Mitherausgeber, Drehbuchautor, Regisseur und Cutter.
				</p>
				<p>
					Davor und im Anschluss könnt ihr euch Toothgems machen lassen bei
					@_hotline.bling (Preisempfehlung 1Stein/ 15€). Sie werden mit einem
					Stand von 18-23 Uhr da sein (mit Pause während den Veranstaltungen).
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
				<h3>Cosmo Terra (he/him)</h3>
				<p>
					Cosmo Terra is a sex worker, drag artist, dancer, and transsexual
					menace. He aims to help spread awareness about stripping and sex work
					as a trans man. Activist organizing has been a part of Cosmo's life
					since he joined Boise Mutual Aid in his hometown during the pandemic.
					After discovering mutual aid and the transformational change it
					brought to communities of marginalized people, he was motivated to
					join a group that brings mutual aid and self-determination to queer
					sex workers. He write his thesis on how centering sex workers' voices
					decreases stigma and violence towards them.
					<br />
					Cosmo has performed at queer and cultural venues including the
					Volksbühne am Rosa-Luxemburg Platz, Clubtheater Berlin, SO36, the
					Olympic Stadium, Tipsy Bear Berlin, Curly Bar Berlin, Menschmeier
					Club, Re:mise Club and 800A Cabaret Bar. His performance repertoire
					spans from intimate events such as Stripper Stories, Showstoppers Drag
					and Pole Show, and Go-go Dancing, to extravagant shows like
					Lollapalooza Festival, the Tag der Clubkultur Award Ceremony, or the
					Queens Against Borders Drag event.
				</p>
				<h3>River Roux (they/she)</h3>
				<p>
					River Roux is performance artist, aerialist and sex worker. A luscious
					mix of bounce, flow and brains River dances through the air with raw
					sensuality earned by over a decade in the sex industry.
					<br />
					River is frequently performing across Berlin’s nightlife venues, has
					staged and starred in the collective‘s first theatre production ‚Merry
					Stripmas‘ for Volksbühne Berlin, performed at WHOLE Festival, Tag der
					Clubkultur and many more. They is currently on stage in ‚Happy Nights‘
					by Lola Arias, to be seen at Theater Bremen.
				</p>
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
				<h3>Barrieren</h3>
				<p>
					eine Stufe am Eingang, keine Möglichkeit eine Rampe anzulegen; keine
					barrierearmen Toiletten; es wird KEIN(E) Nebelmaschine oder
					Strobuskoplicht eingesetzt
				</p>
			</>
		),
	},
	{
		title: "Festivalzentrale und Meeting Point mit Infostand von Hydra:",
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
		location: "Voegelei",
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
		time: "19:00 - 21:00",
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
		title: "Festivalzentrale und Meeting Point",
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
