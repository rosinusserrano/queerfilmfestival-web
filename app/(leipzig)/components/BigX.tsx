import bigx from "@/public/QXP_X_textur.png";
import Image from "next/image";

export default function BigX() {
	return (
		<div className="overlay-child w-full h-full flex items-end justify-end">
			<div className="pb-16 md:pb-0 h-full flex items-start pt-36 lg:pt-16">
				<img
					src={"/QXP_X_textur.png"}
					alt="big x"
					className="sm:h-full"
				/>
				{/* <div className="h-full bg-red-200">hi</div> */}
			</div>
		</div>
	);
}
