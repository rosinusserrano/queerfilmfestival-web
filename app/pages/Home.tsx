"use client";

import BackgroundVideo from "../components/BackgroundVideo";
import BigX from "../components/BigX";
import LandingInfo from "../components/LandingInfo";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import MenuRider from "../components/MenuRider";
import AboutRider from "../riders/AboutRider";
import { useEffect, useRef, useState } from "react";
import ProgrammRider from "../riders/ProgrammRider";
import AwarenessRider from "../riders/AwerenessRider";
import { useMediaQuery } from "../utils/media_query";
import NewsRider from "../riders/NewsRider";
import KontaktRider from "../riders/KontaktRider";

export default function Home({ lang }: { lang?: "en" | "de" }) {
	lang = lang ?? "de";

	const refChilds = [
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
	];
	const isInView = refChilds.map((refChild) =>
		useInView(refChild, { once: false }),
	);

	const isMobile = useMediaQuery(768);

	const [expandedMenu, setExpandedMenu] = useState("Kontakt");

	const ridersWithInfo = [
		{ Element: AboutRider, identifier: "About", flexGrow: 5 },
		{ Element: ProgrammRider, identifier: "Programm", flexGrow: 15 },
		{ Element: AwarenessRider, identifier: "Awareness", flexGrow: 10 },
		// { Element: NewsRider, identifier: "News", flexGrow: 1 },
		{ Element: KontaktRider, identifier: "Kontakt", flexGrow: 1 },
	];

	return (
		<div className="h-full overlay-parent">
			<div className="h-full overlay-child w-screen -z-20">
				<BackgroundVideo />
				<div className="overlay-parent flex-1 px-2 py-2 h-full">
					<BigX />
					<LandingInfo />
				</div>
			</div>
			<div className="h-full overlay-child overflow-auto snap-y snap-mandatory">
				<div className="h-full snap-start snap-always" />
				<motion.div className="flex flex-col md:flex-row h-full w-full snap-start overflow-x-hidden snap-always">
					{ridersWithInfo.map(({ Element, identifier, flexGrow }, index) => (
						<motion.div
							key={`riderelemtnjdksd_${index}`}
							ref={refChilds[index]}
							className="max-w-menu-rider"
							style={
								isMobile
									? {}
									: identifier === "Kontakt"
									? { width: "300px" }
									: {
											flexGrow: identifier === expandedMenu ? flexGrow : 1,
									  }
							}
							initial={{ x: isMobile ? "100vw" : 0, y: isMobile ? 0 : "90vh" }}
							animate={
								isMobile
									? {
											x: isInView[index] ? 0 : "100vw",
											transition: { delay: index * 0.08 },
									  }
									: {
											y: isInView[index] ? 0.1 : "90vh",
											transition: { delay: index * 0.08 },
									  }
							}
						>
							<Element
								expandedMenu={expandedMenu}
								setExpanded={setExpandedMenu}
							/>
						</motion.div>
					))}
				</motion.div>
			</div>
		</div>
	);
}
