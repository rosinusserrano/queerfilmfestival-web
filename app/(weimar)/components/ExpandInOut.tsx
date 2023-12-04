"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export function ExpandInOut({
	children,
	duration = 0.7,
}: { children: ReactNode; duration?: number }) {
	return (
		<motion.div
			initial={{ height: 0 }}
			animate={{ height: "fit-content" }}
			exit={{ height: 0 }}
			transition={{ duration: duration }}
			className="overflow-y-auto"
		>
			{children}
		</motion.div>
	);
}
