import { wonder } from "@/app/fonts/fonts";
import { H1 } from "./text/headings";

export default function SubLettering() {
	return (
		<center className="sticky top-0">
				<span
					className={`${wonder.className} text-white text-shadow-outline-light-pink`}
					style={{fontSize: "max(6vw, 36px)"}}
				>
					Queer&nbsp;Film Festival&nbsp;Weimar
				</span>
		</center>
	);
}
