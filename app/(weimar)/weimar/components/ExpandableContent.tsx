"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function ExpandableContent({
	children,
	expanded,
	delay,
	maxHeight,
}: {
	children: ReactNode;
	expanded: boolean;
	delay?: number;
	maxHeight?: string;
}) {
	return (
		<motion.div
			initial={{ height: expanded ? "fit-content" : 0 }}
			animate={{
				height: expanded ? "fit-content" : 0,
				transition: { delay: delay },
			}}
			className="overflow-auto max-h-[50vh]"
			// style={{ maxHeight: maxHeight }}
		>
			{children}
		</motion.div>
	);
}
