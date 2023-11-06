import MenuRider from "../components/MenuRider";
import { pix } from "../fonts/fonts";

export default function KontaktRider({
	expandedMenu,
	setExpanded,
	lang,
}: {
	expandedMenu: string;
	setExpanded: { (menu: string): void };
	lang: "de" | "en";
}) {
	return (
		<MenuRider
			title={lang === "de" ? "Kontakt" : "Contact"}
			textColor="#BC8C9F"
			backgroundColor="#B75566"
			orderedSubmenu={[""]}
			submenuContentMap={KontaktMenuToContentMapDeutsch}
			expandedMenu={expandedMenu}
			setExpanded={setExpanded}
			lang={lang}
			staticContent={
				lang === "de" ? (
					<div
						className="text-base overflow-auto w-full text-white min-h-[37rem]"
						style={{ textShadow: "none" }}
					>
						<p>
							Egal ob ihr Fragen zu Filmen, Content oder Trigger Warnings,
							Barrieren habt oder Lust habt bei uns im Team mitzumachen,
							schreibt uns einfach eine Mail.
						</p>
						<p>
							Da wir ein kleines ehrenamtliches Kollektiv sind, kann es manchmal
							etwas dauern bis wir eure Nachrichten beantworten, wir geben aber
							unser bestes:
						</p>
						<p>
							Allgemein:
							<br />
							<a href="mailto:queerxplicit@riseup.net">
								queerxplicit(at)riseup.net
							</a>
						</p>
						<p>
							Presse:
							<br />
							<a href="mailto:press_queerxplicit@riseup.net">
								press_queerxplicit(at)riseup.net
							</a>
						</p>
						<p>
							Film Einreichungen:
							<br />
							<a href="mailto:queerxplicit@riseup.net">
								queerxplicit(at)riseup.net
							</a>
						</p>
						<p>
							Awareness:
							<br />
							<a href="mailto:awareness_queerxplicit@riseup.net">
								awareness_queerxplicit(at)riseup.net
							</a>
						</p>
						<p>
							Workshopanmeldung:
							<br />
							<a href="mailto:application_queerxplicit@riseup.net">
								application_queerxplicit(at)riseup.net
							</a>
						</p>
						<p>
							Wir sind auch jederzeit erreichbar unter unserem
							Instagram-Account: <span className={pix.className}>@</span>
							queerfilmfestivalleipzig
						</p>
						<div className="h-32" />
					</div>
				) : (
					<div
						className="text-base overflow-auto w-full text-white min-h-[37rem]"
						style={{ textShadow: "none" }}
					>
						<p>
							Whether you have questions about films, content or trigger
							warnings, barriers or want to join our team, just send us an
							email.
						</p>
						<p>
							We are a small volunteer collective, so it can sometimes take a
							while until we answer your messages, but we do our best:
						</p>
						<p>
							General:
							<br />
							<a href="mailto:queerxplicit@riseup.net">
								queerxplicit(at)riseup.net
							</a>
						</p>
						<p>
							Press:
							<br />
							<a href="mailto:press_queerxplicit@riseup.net">
								press_queerxplicit(at)riseup.net
							</a>
						</p>
						<p>
							Film submissions:
							<br />
							<a href="mailto:queerxplicit@riseup.net">
								queerxplicit(at)riseup.net
							</a>
						</p>
						<p>
							Awareness:
							<br />
							<a href="mailto:awareness_queerxplicit@riseup.net">
								awareness_queerxplicit(at)riseup.net
							</a>
						</p>
						<p>
							Workshop application:
							<br />
							<a href="mailto:application_queerxplicit@riseup.net">
								application_queerxplicit(at)riseup.net
							</a>
						</p>
						<p>
							We are also always available on our Instagram account:
							<br />
							<span className={pix.className}>@</span>
							queerfilmfestivalleipzig
						</p>
						<div className="h-32" />
					</div>
				)
			}
		/>
	);
}

const KontaktMenuToContentMapDeutsch = {
	"": <div />,
};
