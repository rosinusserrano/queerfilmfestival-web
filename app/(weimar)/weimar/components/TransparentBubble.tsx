"use client";

import { ReactElement, useState } from "react";
import { ExpandableContent } from "./ExpandableContent";
import { motion } from "framer-motion";

export function TransparentBubble({
	children,
}: { children: [ReactElement, ReactElement] }) {
	const title = children[0];
	const body = children[1];

	const [expanded, setExpanded] = useState(false);

	return (
		<motion.div
			className="pl-10 py-4 my-1"
			style={{
				background: "linear-gradient(180deg, #E1C7E1 83.73%, #C6DFB6 92.46%)",
				mixBlendMode: "luminosity",
				marginTop: 5,
				marginBottom: 5,
			}}
			animate={{
				marginRight: expanded ? 0 : 10,
				marginLeft: expanded ? 0 : 10,
				borderRadius: expanded ? 0 : 50
			}}
			onClick={() => setExpanded(!expanded)}
		>
			{title}
			<ExpandableContent expanded={expanded}>{body}</ExpandableContent>
		</motion.div>
	);
}
