import Image from "next/image";
import bgImage from "@/public/weimar/images/Backgroundnoanimals-web-smol-png.png";

export default function BackgroundImage() {
	return (
		<div className="w-full fixed top-0 h-screen overflow-hidden -z-10">
			<Image
				src={bgImage}
				alt="bg image"
				priority={true}
                className="object-cover min-h-screen w-full"
			/>
		</div>
	);
}
