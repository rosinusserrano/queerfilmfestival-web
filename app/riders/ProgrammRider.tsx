"use client";

import { ReactNode, useState } from "react";
import MenuRider from "../components/MenuRider";
import { motion, useAnimationControls } from "framer-motion";
import MenuUnterpunkt from "../components/MenuUnterpunkt";

export default function ProgrammRider({
	expandedMenu,
	setExpanded,
}: { expandedMenu: string; setExpanded: { (menu: string): void } }) {
	const textColor = "#A42965";
	const backgroundColor = "#E73E98";
	const [content, setContent] = useState<ReactNode | undefined>(undefined);
	const controls = useAnimationControls();

	async function setRiderContent(content: ReactNode) {
		if (content) {
			await controls.start({ height: 0 }).then(() => setContent(undefined));
		}
		setContent(content);
		setTimeout(() => controls.start({ height: "fit-content" }), 500);
	}
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
		/* <div
				className={"text-submenu text-[color:#A42965] leading-[85%]"}
				style={{ textShadow: "none" }}
			>
				<MenuUnterpunkt
					title="Übersicht"
					contentKey="Übersicht"
					contentMap={ProgrammMenuToContentMapDeutsch}
					setContent={setRiderContent}
				/>
				{", "}
				<MenuUnterpunkt
					title="Workshopanmeldung"
					contentKey="Workshopanmeldung"
					contentMap={ProgrammMenuToContentMapDeutsch}
					setContent={setRiderContent}
				/>
			</div>
			<motion.div
				initial={{ height: 0 }}
				animate={controls}
				className="text-xl overflow-hidden"
				style={{ textShadow: "none" }}
			>
				{content}
			</motion.div> */
	);
}

const ProgrammMenuToContentMapDeutsch: { [key: string]: ReactNode } = {
	Übersicht: <p>Infos folgen...</p>,
	Workshopanmeldung: (
		<p>
			Liebe Filmmacher*innen, Freund*innen und Kollektive, vielen Dank für euer
			Interesse, euren Film bei uns einzureichen. Bitte schreibt uns eine Mail
			mit: Screening Link, Filmjahr, Länge, TriggerWarnings etc. Jeder Film, der
			vor dem 24.10.2023 eingereicht wird, wird für unsere diesjährige
			Festivalausgabe berücksichtigt. Später eingereichte Filme werden in unsere
			Filmliste für 2024 aufgenommen.
			<br />
			Wir freuen uns darauf, euren Film zu sehen!
		</p>
	),
};
