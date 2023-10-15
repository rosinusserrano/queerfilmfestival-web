import bigx from "@/public/Vector.png";
import Image from "next/image";

export default function BigX() {
	return (
		<div className="p-10 overflow-auto absolute min-w-[150px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
			<Image src={bigx} alt="big x"/>
		</div>
	);
}
