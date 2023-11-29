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
			className="px-4 sm:px-6 md:px-8 my-1 relative"
			style={{
				background: "linear-gradient(180deg, #E1C7E1 83.73%, #C6DFB6 92.46%)",
				mixBlendMode: "luminosity",
				marginTop: 5,
				marginBottom: 5,
			}}
			animate={{
				marginRight: expanded ? 0 : 10,
				marginLeft: expanded ? 0 : 10,
				borderRadius: expanded ? 0 : 50,
			}}
			onClick={() => setExpanded(true)}
		>
			<div className="flex justify-between">
				{title}
				{expanded && (
					<motion.div
						className="absolute top-6 right-6 hover:text-white cursor-pointer"
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							setExpanded(false);
						}}
						initial={{
							scale: 0,
							rotate: 360
						}}
						animate={{
							scale: 1,
							rotate: 0
						}}
						transition={{delay: 0.3, duration: 0.4, type: "spring"}}
					>
						X
					</motion.div>
				)}
			</div>
			<ExpandableContent expanded={expanded} maxHeight="70vh">
				{body}
			</ExpandableContent>
		</motion.div>
	);
}
