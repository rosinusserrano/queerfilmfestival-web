import bgImg from "@/public/weimar/images/QFFW Programm Bubbles Backdrop.png";
import bubblesImg from "@/public/weimar/images/QFFW Programm Bubbles Inhalt.png";
import Image from "next/image";

export function ProgramAsImages() {
	return (
		<div className="w-screen h-[70vh] md:h-fit overflow-auto">
			<section
				className="grid w-[156.8vh] md:w-full h-[70vh] md:h-fit"
				style={{
					gridTemplateAreas: '"overlay"',
				}}
			>
				<div
					style={{ gridArea: "overlay" }}
					className="mix-blend-luminosity h-[70vh] md:h-fit"
				>
					<Image
						// width={1920}
						// height={1080}
						alt="program background"
						src={bgImg}
						// className="h-[70vh] md:h-fit"
					/>
				</div>
				<div
					style={{ gridArea: "overlay" }}
					className="isolate h-[70vh] md:h-fit"
				>
					<Image
						alt="program bubbles"
						src={bubblesImg}
						// width={1920}
						// height={1080}
						// className="h-[70vh] md:h-fit"
					/>
				</div>
			</section>
		</div>
	);
}
