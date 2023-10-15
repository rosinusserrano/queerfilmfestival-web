"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import qff from "@/public/queerfilmfestival wortmarke.png";

export default function CenterDate() {
	return (
		<div className="overlay-child select-none text-center w-full h-full flex flex-col items-center justify-center sm:justify-evenly">
			<div className="w-1/3 mb-1">
				<Image src={qff} alt="wortmarke" className="img-ds" />
			</div>
			<motion.p
				className="text-7xl sm:text-9xl"
				style={{
					lineHeight: "80%",
				}}
				initial={{
					textShadow: "0px 0px 10px #fff",
				}}
				animate={{
					textShadow: "0px 0px 15px #fff",
				}}
				transition={{
					repeat: Infinity,
					repeatType: "reverse",
					duration: 2,
				}}
			>
				8.-12. <br className="md:hidden"/>nov &#8217;23
			</motion.p>
			<p className="text-xl sm:text-4xl md:text-6xl mt-2">Leipzig</p>
		</div>
	);
}
