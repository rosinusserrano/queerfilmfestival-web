"use client";

import { AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

export function AnimatePresenceWrapper({ children }: { children: ReactNode }) {
	return (
		<AnimatePresence mode="wait" initial={false}>
			{children}
		</AnimatePresence>
	);
}
