"use client";

import { MouseEventHandler, ReactElement, useState } from "react";
import { ExpandableContent } from "./ExpandableContent";
import { motion } from "framer-motion";
import CloseX from "./CloseX";

export function TransparentBubble({
	children,
	onClick,
}: {
	children: [ReactElement, ReactElement];
	onClick?: MouseEventHandler<HTMLDivElement>;
}) {
	const title = children[0];
	const body = children[1];

	const [expanded, setExpanded] = useState(false);

	return (
		<motion.div
			className="my-1 relative bg-[#fff6] border-[3px] border-transparent hover:border-[#c8ff93]"
			style={{
				background: "linear-gradient(180deg, #E1C7E1 83.73%, #C6DFB6 92.46%)",
				mixBlendMode: "luminosity",
				marginTop: 5,
				marginBottom: 5,
			}}
			initial={{
				marginRight: 10,
				marginLeft: 10,
				paddingRight: 32,
				paddingLeft: 32,
				borderRadius: 35,
			}}
			animate={{
				marginRight: expanded ? 0 : 10,
				marginLeft: expanded ? 0 : 10,
				paddingRight: expanded ? 42 : 32,
				paddingLeft: expanded ? 42 : 32,
				borderRadius: expanded ? 0 : 35,
			}}
			onClick={onClick ?? (() => setExpanded(true))}
		>
			<div className="flex justify-between">
				{title}
				{expanded && (
					<CloseX
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							setExpanded(false);
						}}
					/>
				)}
			</div>
			<ExpandableContent expanded={expanded} maxHeight="70vh">
				{body}
			</ExpandableContent>
		</motion.div>
	);
}
