"use client";

import {
	useAnimationControls,
	useInView,
	useScroll,
	useTransform,
} from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import MenuUnterpunkt from "./MenuUnterpunkt";

export default function MenuRider({
	title,
	orderedSubmenu,
	submenuContentMap,
	textColor,
	backgroundColor,
	expandedMenu,
	setExpanded,
	staticContent
}: {
	orderedSubmenu: string[];
	submenuContentMap: { [key: string]: ReactNode };
	title: string;
	textColor: string;
	backgroundColor: string;
	expandedMenu: string;
	setExpanded: { (id: string): void };
	staticContent?: ReactNode
}) {
	const contentControls = useAnimationControls();

	const [content, setContent] = useState<ReactNode | undefined>(undefined);

	async function setRiderContent(content: ReactNode) {
		if (content) {
			await contentControls
				.start({ height: 0 })
				.then(() => setContent(undefined));
		}
		setContent(content);
		setTimeout(() => contentControls.start({ height: "fit-content" }), 500);
	}

	const isContact = title === "Kontakt"

	const isExpanded = expandedMenu === title || isContact;

	return (
		<motion.div
			style={{
				backgroundColor: backgroundColor,
				textShadow: "none",
			}}
			className={"w-full h-fit md:h-full text-6xl md:text-4xl p-2 overflow-y-auto"}

		>
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<p
				className="w-full hover:blur-sm"
				style={{
					lineHeight: "100%",
					letterSpacing: "-0.15rem", //"-0.30938rem",
					color: "transparent",
					textShadow: `0.5px 0.5px 3px ${textColor}, 0 0 0 #00000056`,
					cursor: "pointer",
				}}
				onClick={() => {
					setExpanded(title);
				}}
			>
				{title}
			</p>

			<motion.div
				className={`text-submenu leading-[85%] ${
					isExpanded ? "" : "overflow-hidden"
				}`}
				style={{
					color: textColor,
				}}
				initial={{ height: 0, width: 0 }}
				animate={{
					height: isExpanded ? "fit-content" : 0,
					width: isExpanded ? "fit-content" : 0,
					transition: { ease: "linear" },
				}}
			>
				{staticContent ?? (
					<>
						<div className="max-w-menu-content">
							{orderedSubmenu.map((submenu, index) => (
								<MenuUnterpunkt
									title={submenu}
									contentMap={submenuContentMap}
									contentKey={submenu}
									setContent={setRiderContent}
									key={`menunterpunsx_${index}`}
									appendComma={index !== orderedSubmenu.length - 1}
								/>
							))}
						</div>
						<motion.div
							initial={{ height: 0 }}
							animate={contentControls}
							className="text-xl overflow-hidden text-white mt-8 max-w-menu-content"
							style={{ textShadow: "none" }}
						>
							{content}
						</motion.div>
					</>
				)}
			</motion.div>
		</motion.div>
	);
}
