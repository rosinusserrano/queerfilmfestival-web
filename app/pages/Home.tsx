export default function Home({ lang }: { lang?: "en" | "de" }) {
	lang = lang ?? "de";
	return <main className="overlay-child" />;
}
