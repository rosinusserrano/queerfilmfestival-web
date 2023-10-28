import MenuRider from "../components/MenuRider";
import { pix } from "../fonts/fonts";

export default function KontaktRider({
	expandedMenu,
	setExpanded,
}: { expandedMenu: string; setExpanded: { (menu: string): void } }) {
	return (
		<MenuRider
			title="Kontakt"
			textColor="#BC8C9F"
			backgroundColor="#B75566"
			orderedSubmenu={[""]}
			submenuContentMap={KontaktMenuToContentMapDeutsch}
			expandedMenu={expandedMenu}
			setExpanded={setExpanded}
			staticContent={
				<div
					className="text-base overflow-auto w-full text-white min-h-[37rem]"
					style={{ textShadow: "none" }}
				>
					<p>
						Egal ob ihr Fragen zu Filmen, Content oder Trigger Warnings,
						Barrieren habt oder Lust habt bei uns im Team mitzumachen, schreibt
						uns einfach eine Mail.
					</p>
					<p>
						Da wir ein kleines ehrenamtliches Kollektiv sind, kann es manchmal
						etwas dauern bis wir eure Nachrichten beantworten, wir geben aber
						unser bestes:
					</p>
					<p>
						Allgemein:{" "}
						<a href="mailto:queerxplicit@riseup.net">
							queerxplicit(at)riseup.net
						</a>
					</p>
					<p>
						Presse:{" "}
						<a href="mailto:press_queerxplicit@riseup.net">
							press_queerxplicit(at)riseup.net
						</a>
					</p>
					<p>
						Film Einreichungen:{" "}
						<a href="mailto:queerxplicit@riseup.net">
							queerxplicit(at)riseup.net
						</a>
					</p>
					<p>
						Awareness:{" "}
						<a href="mailto:awareness_queerxplicit@riseup.net">
							awareness_queerxplicit(at)riseup.net
						</a>
					</p>
					<p>
						Workshopanmeldung:{" "}
						<a href="mailto:application_queerxplicit@riseup.net">
							application_queerxplicit(at)riseup.net
						</a>
					</p>
					<p>
						Wir sind auch jederzeit erreichbar unter unserem Instagram-Account:{" "}
						<span className={pix.className}>@</span>queerfilmfestivalleipzig
					</p>
					<div className="h-16" />
				</div>
			}
		/>
	);
}

const KontaktMenuToContentMapDeutsch = {
	"": <div />,
};
