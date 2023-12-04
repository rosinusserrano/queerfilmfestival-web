import { wonder } from "@/app/fonts/fonts";
import { H1 } from "./text/headings";
import { FirstLetterWonder } from "./FirstLetterWonder";

export default function SubLettering() {
	return (
		<center className="">
			<span
				className={"text-white text-shadow-outline-light-pink"}
				style={{ fontSize: "max(6vw, 36px)" }}
			>
				<FirstLetterWonder>Queer</FirstLetterWonder>&nbsp;
				<FirstLetterWonder>Film</FirstLetterWonder>{" "}
				<FirstLetterWonder>Festival</FirstLetterWonder>&nbsp;
				<FirstLetterWonder>Weimar</FirstLetterWonder>
			</span>
		</center>
	);
}
