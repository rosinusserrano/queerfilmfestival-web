"use client"

import { motion } from "framer-motion";
import { MouseEventHandler, useState } from "react";

export default function CloseX({
	onClick,
}: { onClick: MouseEventHandler<SVGSVGElement> }) {
    const [hovered, setHovered] = useState(false)
	return (
		<motion.svg
			width="25"
			height="25"
			viewBox="0 0 251 251"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="absolute top-3 right-3 animate-spin-slow mix-blend-multiply"
            onClick={onClick}
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)}
            initial={{scale: 0}}
            animate={{scale: 1, transition: {duration: 1}}}
		>
			<title>Closing X</title>
			<g filter="url(#filter0_d_454_6)">
				<motion.rect
                initial={{height: 0}}
                animate={{height: 203, transition:{delay: .5}}}
					x="130.17"
					y="21.4199"
					width="47"
					height="203"
					rx="23"
					transform="rotate(15.605 130.17 21.4199)"
					fill={!hovered ? "#243E13": "#E1C7E1"}
				/>
				<motion.rect
                initial={{height: 0}}
                animate={{height: 203, transition:{delay: .25}}}
					x="229.58"
					y="130.17"
					width="47"
					height="203"
					rx="23"
					transform="rotate(105.605 229.58 130.17)"
					fill={!hovered ? "#243E13": "#E1C7E1"}
				/>
			</g>
			<defs>
				<filter
					id="filter0_d_454_6"
					x="22.7532"
					y="26.7529"
					width="205.494"
					height="205.494"
					filterUnits="userSpaceOnUse"
					colorInterpolation={"sRGB"}
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="4" />
					<feGaussianBlur stdDeviation="2" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_454_6"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_454_6"
						result="shape"
					/>
				</filter>
			</defs>
		</motion.svg>
	);
}
