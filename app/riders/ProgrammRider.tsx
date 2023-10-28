import { ReactNode } from "react";
import MenuRider from "../components/MenuRider";
import {
	ProgrammEntry,
	programmDonnerstag,
	programmFreitag,
	programmMittwoch,
	programmSamstag,
	programmSonntag,
} from "../programm";

export default function ProgrammRider({
	expandedMenu,
	setExpanded,
	lang,
}: {
	expandedMenu: string;
	setExpanded: { (menu: string): void };
	lang: "en" | "de";
}) {
	const textColor = "#A42965";
	const backgroundColor = "#E73E98";

	return (
		<MenuRider
			title="Programm"
			textColor={textColor}
			lang={lang}
			backgroundColor={backgroundColor}
			orderedSubmenu={
				lang === "de"
					? ["Übersicht", "Workshopanmeldung", "Submission"]
					: ["Overview", "Workshop registration", "Submission"]
			}
			submenuContentMap={
				lang === "de"
					? ProgrammMenuToContentMapDeutsch
					: ProgrammMenuToContentMapEnglish
			}
			expandedMenu={expandedMenu}
			setExpanded={setExpanded}
		/>
	);
}

const ProgrammMenuToContentMapDeutsch: { [key: string]: ReactNode } = {
	Übersicht: (
		<div className="grid grid-cols-auto-2 md:grid-cols-auto-3 gap-x-6">
			<ProgrammTag title="Mittwoch, 8. November" programm={programmMittwoch} />
			<ProgrammTag
				title="Donnerstag, 9. November"
				programm={programmDonnerstag}
			/>
			<ProgrammTag title="Freitag, 10. November" programm={programmFreitag} />
			<ProgrammTag title="Samstag, 11. November" programm={programmSamstag} />
			<ProgrammTag title="Sonntag, 12. November" programm={programmSonntag} />
			<div className="h-16 col-span-2 md:col-span-3" />
		</div>
	),
	Submission: (
		<>
			<p>
				Liebe Filmmacher*innen, Freund*innen und Kollektive,
				<br />
				vielen Dank für euer Interesse, euren Film bei uns einzureichen. Bitte
				schreibt uns eine Mail mit: Screening Link, Filmjahr, Länge,
				TriggerWarnings etc.
				<br />
				Jeder Film, der vor dem 24.10.2023 eingereicht wird, wird für unsere
				diesjährige Festivalausgabe berücksichtigt. Später eingereichte Filme
				werden in unsere Filmliste für 2024 aufgenommen.
				<br />
				Wir freuen uns darauf, euren Film zu sehen!
			</p>
		</>
	),
	Workshopanmeldung: (
		<>
			<p>
				Du hast Lust an einem Workshop von uns teilzunehmen? Dann schreib uns
				eine Mail an:
				<br />
				<a href="mailto:application_queerxplicit@riseup.net">
					application_queerxplicit(at)riseup.net
				</a>
			</p>
			<p>
				Bitte nenne den Namen den du dort verwenden möchtest und an welchem
				Workshop du teilnehmen möchtest (Name des Workshops).
			</p>
		</>
	),
};

const ProgrammMenuToContentMapEnglish: { [key: string]: ReactNode } = {
	Overview: (
		<div className="grid grid-cols-auto-2 md:grid-cols-auto-3 gap-x-6">
			<ProgrammTag title="Wednesday, November 8" programm={programmMittwoch} />
			<ProgrammTag title="Thursday, November 9" programm={programmDonnerstag} />
			<ProgrammTag title="Friday, November 10" programm={programmFreitag} />
			<ProgrammTag title="Saturday, November 11" programm={programmSamstag} />
			<ProgrammTag title="Sunday, November 12" programm={programmSonntag} />
			<div className="h-16 col-span-2 md:col-span-3" />
		</div>
	),
	Submission: (
		<>
			<p>
				Dear filmmakers, friends and collective,
				<br />
				thank you for your interest in submitting your film to us. Please send
				us an email with: Screening Link, Film Year, Length, TriggerWarnings
				etc.
				<br />
				Any film submitted before 10/24/2023 will be considered for our festival
				edition this year. Films submitted later will be included in our film
				list for 2024.
				<br />
				We look forward to seeing your film!
			</p>
		</>
	),
	"Workshop registration": (
		<>
			<p>
				You want to participate in one of our workshops? Then write us a mail
				to: application_queerxplicit(at)riseup.net
			</p>
			<p>
				Please mention the name you want to use there and which workshop you
				want to participate in (name of the workshop).
			</p>
		</>
	),
};

function ProgrammTag({
	title,
	programm,
}: { title: ReactNode; programm: ProgrammEntry[] }) {
	return (
		<>
			<text className="col-span-2 md:col-span-3 mb-4">{title}</text>
			{programm.map((p) => (
				<ProgrammEvent event={p} />
			))}
			<div className="col-span-2 md:col-span-3 h-8" />
		</>
	);
}

function ProgrammEvent({ event }: { event: ProgrammEntry }) {
	return (
		<>
			<text>{event.time}</text>
			<text>{event.title}</text>
			<text className="col-start-2 md:col-start-3">{event.location}</text>
			<div className="col-span-2 md:col-span-3 h-4 md:h-0" />
		</>
	);
}
