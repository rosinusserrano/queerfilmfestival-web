import Image from "next/image";
import qff from "@/public/queerfilmfestival wortmarke.png";

export default function LandingInfo() {
	return (
		<div className="overlay-child select-none max-w-full max-h-full flex flex-col">
			<BigDate />
			<div className="pt-7 sm:pt-0 flex-1 overlay-parent w-full">
				<LPZ />
				<Keywords />
			</div>
			<div className="pb-32 md:pb-16 z-10">
				<Wording />
			</div>
		</div>
	);
}

function BigDate() {
	return (
		<p
			className="text-8xl sm:text-9xl md:text-[9rem] lg:text-[11rem] pt-4 -z-10"
			style={{
				lineHeight: "80%",
				textShadow: "0px 0px 10px #fff",
				letterSpacing: "-0.4rem",
			}}
		>
			8.-12. no<span style={{ letterSpacing: "-0.7rem" }}>v &#8217; </span>23
		</p>
	);
}

function LPZ() {
	return (
		<div className="overlay-child w-full -z-10 flex flex-col justify-end md:justify-normal">
			<span
				className="text-center md:text-left text-[13rem] md:text-[22rem] leading-[80%] w-fit"
				style={{
					color: "rgba(234, 116, 172, 0.4)",
					textShadow: "0 0 32px #e1307e",
				}}
			>
				LPZ
			</span>
		</div>
	);
}

function Keywords() {
	return (
		<p className="text-center md:text-right leading-[75%] md:leading-[75%]  text-[3rem] md:text-[4rem] overlay-child w-full">
			kino <br />
			workshops <br />
			panel <br />
			discussion <br />
			drag <br />
			party <br />
		</p>
	);
}

function Wording() {
	return (
		<Image
			src={qff}
			alt="wortmarke"
			style={{
				filter: "drop-shadow(0px 0px 10px #fff)",
			}}
		/>
	);
}
