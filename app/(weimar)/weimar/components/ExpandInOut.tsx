"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export function ExpandInOut({ children }: { children: ReactNode }) {
	return (
		<motion.div
			initial={{ height: 0 }}
			animate={{ height: "fit-content" }}
			exit={{ height: 0 }}
			transition={{duration: .7,}}
			className="overflow-y-auto"
		>
			{children}
		</motion.div>
	);
}
