export default function BackgroundVideo() {
	return (
		<div className="absolute top-0 left-0 w-screen h-screen -z-10">
			<video
				muted
				loop
				autoPlay
				playsInline
				className="object-cover h-full w-full"
			>
				<source src="/Cherry Queer X P_loop_sanft.mp4" type="video/mp4" />
			</video>
		</div>
	);
}
