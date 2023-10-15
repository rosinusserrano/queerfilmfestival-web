import Image from "next/image";
import logo from "@/public/Logo-QXP-white.png";

export default function Footer() {
	return (
		<footer className="fixed bottom-0 flex items-end bg backdrop-blur-sm h-16">
			<div className="w-screen h-full flex justify-between">
				<nav className="flex items-center p-4 text-pink">
					<p className="text-xl">Home</p>
				</nav>
				<Image src={logo} alt="logo" height={64} />
			</div>
		</footer>
	);
}
