"use client"

import { motion } from "framer-motion";

export default function CenterDate() {
	return (
		<div className="p-10 overflow-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-center">
			<motion.p className="text-4xl sm:text-6xl md:text-8xl"
            initial={{
                textShadow: "0px 0px 5px #fff"
            }}
            animate={{
                textShadow: "0px 0px 30px #fff"
            }}
            transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1
            }}>
				8.-12.
				<br />
				nov&#8217;23
			</motion.p>
			<p className="text-2xl sm:text-4xl md:text-6xl">Leipzig</p>
			<p
				style={{
					fontFeatureSettings: '"sso1" 1',
					MozFontFeatureSettings: '"sso1"',
					WebkitFontFeatureSettings: '"sso1"',
				}}
			>
				queerfilmfestival
			</p>
		</div>
	);
}
