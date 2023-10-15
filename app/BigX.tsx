import bigx from "@/public/QXP.png";
import Image from "next/image";

export default function BigX() {
	return (
		<div className="overlay-child w-full h-full flex items-center justify-center p-4">
			<Image src={bigx} alt="big x" />
		</div>
	);
}
