"use client";

import { notFound, useSearchParams } from "next/navigation";
import Home from "./pages/Home";
import { Metadata } from "next";


export default function HomePage() {
	const searchParams = useSearchParams();
	const langParam = searchParams.get("lang") ?? "de";
	if (!["en", "de"].includes(langParam)) {
		return notFound();
	}
	const lang = langParam as "en" | "de";
	return <Home lang={lang} />;
}
