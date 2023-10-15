import Image from "next/image";

export default function Home() {
	return (
		<main className="h-screen">
			<div
				style={{
					textShadow: "0px 0px 16px #fff",
				}}
				className="p-10 overflow-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-center"
			>
				<p className="text-4xl sm:text-6xl md:text-8xl">
					8.-12.&nbsp;nov&#8217;23
				</p>
				<p className="text-2xl sm:text-4xl md:text-6xl">Leipzig</p>
			</div>
		</main>
	);
}
