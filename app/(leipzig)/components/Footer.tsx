"use client";

import Image from "next/image";
import logo from "@/public/Logo-QXP-white.png";
import Link from "next/link";
import {
	notFound,
	usePathname,
	useRouter,
	useSearchParams,
} from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
	useEffect(() => {
		document.ontouchmove = function (event) {
			event.preventDefault();
		};
	});

	const [showImprint, setShowImprint] = useState(false);

	const searchParams = useSearchParams();
	const langParam = searchParams.get("lang") ?? "de";
	if (!["en", "de"].includes(langParam)) {
		return notFound();
	}
	const lang = langParam as "en" | "de";

	const router = useRouter();
	const pathname = usePathname()

	return (
		<>
			<footer className="fixed bottom-0 bg backdrop-blur-sm h-16 z-10">
				<div className="w-screen h-full flex justify-between">
					<div
						className="items-center p-4 flex gap-4"
						style={{
							textShadow: "0 0 32px #fff",
						}}
					>
						<button
							type="button"
							onClick={() => router.push(`${pathname}?${lang === "de" ? "lang=en" : "lang=de"}`)}
						>
							{lang === "de" ? "EN" : "DE"}
						</button>
						<button type="button" onClick={() => setShowImprint(!showImprint)}>
							Imprint
						</button>
					</div>
					<Link href={"/"}>
						<Image src={logo} alt="logo" height={64} />
					</Link>
				</div>
			</footer>
			<Imprint show={showImprint} lang={lang} />
		</>
	);
}

function applyLangToPath(lang: "en" | "de", pathname: string) {
	if (pathname.includes(lang)) {
		return pathname;
	} else if (pathname.includes("en")) {
		return pathname.replace("en", "de");
	} else if (pathname.includes("de")) {
		return pathname.replace("de", "en");
	} else {
		return `${pathname}${pathname.endsWith("/") ? "" : "/"}${lang}`;
	}
}

function Imprint({ show, lang }: { show: boolean; lang: "en" | "de" }) {
	return (
		<motion.div
			className="fixed top-0 left-0 h-screen w-screen bg-gradient-to-b from-[#000a] from-90% to-[#0002] z-0"
			initial={{ y: "-100vh" }}
			animate={{ y: show ? 0 : "-100vh", transition: { bounce: 0 } }}
		>
			<div className="text-base md:text-[3rem] md:leading-[100%] h-full w-full lg:w-2/3 p-4 overflow-scroll  pb-16">
				<p className="pb-8 md:pb-16 text-7xl">
					{lang === "de" ? "Impressum" : "Imprint"}
				</p>
				<p className="pb-8 md:pb-16">
					Vielfalt Leben - QueerWeg <br />
					Verein für Thüringen e. V.
					<br />
					Löbdergraben 25a
					<br />
					07745 Jena
				</p>
				{lang === "de" ? (
					<>
						<p className="pb-8 md:pb-16">
							Für alle Inhalte auf der Website ist ausschließlich nur das
							Kollektiv hinter dem Queerfilmfestival Leipzig und Weimar
							verantwortlich. Ihr könnt diese erreichen unter:
						</p>
						<p>
							<a href="mailto:queerxplicit@riseup.net">
								queerxplicit(at)riseup.net
							</a>{" "}
							und
							<br />
							<a href="mailto:queerfilmfestival21@riseup.net">
								queerfilmfestival21(at)riseup.net
							</a>
						</p>
					</>
				) : (
					<>
						<p className="pb-8 md:pb-16">
							Only the collective behind the Queerfilmfestival Leipzig and
							Weimar is responsible for all content on the website. You can
							reach them at:
						</p>
						<p>
							<a href="mailto:queerxplicit@riseup.net">
								queerxplicit(at)riseup.net
							</a>{" "}
							and
							<br />
							<a href="mailto:queerfilmfestival21@riseup.net">
								queerfilmfestival21(at)riseup.net
							</a>
						</p>
					</>
				)}
			</div>
		</motion.div>
	);
}
