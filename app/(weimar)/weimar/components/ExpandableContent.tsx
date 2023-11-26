"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function ExpandableContent({
	children,
	expanded,
	delay
}: { children: ReactNode; expanded: boolean, delay?: number }) {
	return (
		<motion.div
			initial={{ height: expanded ? "fit-content" : 0 }}
			animate={{ height: expanded ? "fit-content" : 0, transition: {delay: delay} }}
            className="overflow-hidden"
		>
			{children}
		</motion.div>
	);
}
