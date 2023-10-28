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
}: { expandedMenu: string; setExpanded: { (menu: string): void } }) {
	const textColor = "#A42965";
	const backgroundColor = "#E73E98";

	return (
		<MenuRider
			title="Programm"
			textColor={textColor}
			backgroundColor={backgroundColor}
			orderedSubmenu={["Übersicht", "Workshopanmeldung"]}
			submenuContentMap={ProgrammMenuToContentMapDeutsch}
			expandedMenu={expandedMenu}
			setExpanded={setExpanded}
		/>
	);
}

const ProgrammMenuToContentMapDeutsch: { [key: string]: ReactNode } = {
	Übersicht: (
		<div
			className="grid grid-cols-2 md:grid-cols-3 auto-cols-auto"
		>
			<ProgrammTag title="Mittwoch, 8. November" programm={programmMittwoch} />
			<ProgrammTag
				title="Donnerstag, 9. November"
				programm={programmDonnerstag}
			/>
			<ProgrammTag title="Freitag, 10. November" programm={programmFreitag} />
			<ProgrammTag title="Samstag, 11. November" programm={programmSamstag} />
			<ProgrammTag title="Sonntag, 12. November" programm={programmSonntag} />
			<div className="h-16 col-span-2 md:col-span-3"/>
		</div>
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
			<div className="col-span-2 md:col-span-3 h-4 md:h-0"/>
		</>
	);
}
