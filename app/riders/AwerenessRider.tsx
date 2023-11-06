"use client";

import { ReactNode, useState } from "react";
import MenuRider from "../components/MenuRider";

export default function AwarenessRider({
	expandedMenu,
	setExpanded,
	lang,
}: {
	expandedMenu: string;
	setExpanded: { (menu: string): void };
	lang: "en" | "de";
}) {
	const textColor = "#E73E98";
	const backgroundColor = "#BC8C9F";
	return (
		<MenuRider
			title="Awareness"
			textColor={textColor}
			backgroundColor={backgroundColor}
			submenuContentMap={
				lang === "de"
					? AwarenessMenuToContentMapDeutsch
					: AwarenessMenuToContentMapEnglisch
			}
			orderedSubmenu={
				lang === "de"
					? [
							"Awarenesskonzept",
							"Barrieren",
							"Covid-19",
							"Wie gehen wir mit Kohle um?",
							"Wie wählen wir Filme aus?",
					  ]
					: ["Concept", "Accessibility", "Covid-19", "Film selection"]
			}
			expandedMenu={expandedMenu}
			setExpanded={setExpanded}
			lang={lang}
		/>
	);
}

const AwarenessMenuToContentMapDeutsch: { [key: string]: ReactNode } = {
	Awarenesskonzept: (
		<div>
			<p>1.Selbstverständnis</p>
			<p>
				Auf dem QueerfilmFestival schaffen wir einen Ort zum Austausch
				intersektionale Perspektiven gemeinsames Empowerment queerer
				Identitäten. Dabei entsteht ein Raum in dem viele Menschen mit
				veschiedenen Erfahrungen aufeinander treffen. Uns ist bewusst dass, es
				keinen gewalt- und diskriminierungsfreien Raum in einer gewaltvollen
				Gesellschaft geben kann. Auch das Queerfilmfestival kann also nicht per
				se frei von direkter zwischenmenschlichen und strukturellen Gewalt sein.
				Deswegen ist es wichtig, dem eine solidarische und sorgende Struktur
				entgegenzusetzten, die sich mit einer klare Haltung gegen
				Diskriminierung positioniert, sich immerzu selber reflektiert und
				konkrete Unterstützungsangebote für Betroffene organisiert. Wir arbeiten
				mit Definitionsmacht und Parteilichkeit : Wenn du Übergriffe erfährst,
				steht deine Perspektive im Mittelpunkt. Wir hören deinen Erfahrungen zu
				ohne sie anzuzweifeln und unterstützen dich in Solidarität bei deinen
				Bedürfnissen und Wünschen. Du definierst eine Grenzüberschreitung. Einen
				Ort für die queere Community zu schaffen wo Betroffene von verschiedenen
				gesellschaftlichen Diskriminierung zusammentreffen, bedeutet auch
				sensibel für verschiedene Barrieren zu sein, die Menschen darin hindern
				kommen zu können. Wir wollen lernen und diskriminierende Strukturen
				abbauen, die wir reproduzieren - wir freuen uns über Hinweise und
				Kritik. Awareness darf dabei jedoch nicht an ein Team oder
				Veranstalter*innen geoutcourced werden sondern liegt in kollektiver
				Verantwortung aller. Es liegt an uns allen Priveligien zu relfektieren
				und uns solidarisch und konsensual zu Verhalten. Individuelle Grenzen
				müssen immer respektiert werden. Nur ein klares Ja ist ein Ja!
			</p>
			<p>
				Awareness ist eine emanzipatorische Praxis, die ihren Ursprung in
				antirassistischen und antisexistischen Kämpfen findet. Das Verständnis
				des historischen Kontexts ist von großer Bedeutung, um die radikalen
				politischen Ansätze und das gesellschaftlich transformatorische
				Potenzial zu erfassen. In den USA haben FlintaGq* of Colors in
				BIPoc-Communitys kollektive Strukturen und Praktiken gegen Gewalt und
				Diskriminierung entwickelt. Auch schufen feministische Bewegungen in
				Deutschland in den 1970er Jahren vielfältige Unterstützungsangebote für
				FlintaGq*s. Dadurch ist Awareness Teil der Arbeit von Transformative
				Justice (Transformativer Gerechtigkeit), deren langfristiges Ziel darin
				besteht, communitybasierte Lösungsansätze gegen strukturelle Gewalt und
				Diskriminierung zu entwickeln [siehe f(x)Broschüre_Initiative Awareness
				Leipzig]
			</p>
			<p>2. Mindeststandart und Prinzipen bei Awareness</p>
			<p>
				Als Veranstalter*innen wollen wir professionelle Awareness
				Unterstützungsangebote anbieten. Das bedeutet, dass…
			</p>
			<p>
				…Awareness Schichten nur von Menschen übernommen werden können, die
				einen Awareness Workshop besucht haben und/oder schon ausreichend
				praktische Erfahrungen gesammelt haben, über Diskriminierungsformen und
				in der Unterstützung von Betroffenen geschult sind. Es ist schwierig ein
				konkretes Level zu nennen, da Personen auf verschiedene Wegen Wissen
				über Diskriminierungsformen sammeln und es unterschiedliche
				Unterstützungserfahrungen bei Gewalterfahrungen gibt. Die
				Ansprechpersonen für Helfer*innen sind für individuelle Bedenken und
				Einschätzung ansprechbar.
			</p>
			<p>…in jedem Team eine Person, die kein endo-cis Mann ist.</p>
			<p>
				…aus den gleichen Gründen in jedem Team eine Person sein sollte, die
				Erfahrungen mit unterschiedlichen Diskriminierungsformen wir Rassismus
				oder Queerfeindlichkeit hat. Ein Team also verschiedene Betroffenheiten
				vereint und so aus einer kollektiven intersektionalen agieren kann. Aus
				Kapazitätsgründen können wir leider nur Teams von 2-4 Personen
				organisieren.
			</p>
			<p>
				…Sorgearbeit wie Awarenessarbeit bezahlt werden muss. Menschen die
				Schichten übernehmen werden pro Stunde mit 15 € Entschädigung entlohnt.
			</p>
			<p>
				…das Awarenesskonzept gemeinsam mit dem OrgaTeam durchgesprochen und
				beschlossen wird und Awareness bei allen Bestandteilen des Festivals
				mitgedacht wurde. Awareness darf nicht an eine Arbeitsgruppe oder ein
				Awa-Team geoutsourced werden!
			</p>
			<p>
				…Bedürfnisse des Awa-Teams abgesprochen sind und Möglichkeiten zu
				Awa-SelfCare von Veranstalter*innen ermöglicht werden. Das könnten
				Snacks, Schichtlänge, Schichtzeitpunkt, Schichtpartner*innen oder
				Rückzugsraum sein. Die hauptverantwortlichen eines Programmslots
			</p>
			<p>…Awareness Schicht Prinzipen (Siehe 2.2.) eingehalten werden.</p>
			<p>
				…Awarenessarbeit im die eine Awareness-Schicht übernehmen zusammen
				arbeiten und kommunizieren. Hier ist hilfreich eine Schicht mit einer
				Check-In Runde zu beginnen (Siehe 2.3.)
			</p>
			<p>
				...wir kommunizieren, was Awareness ist/leisten kann und was nicht. Die
				meisten von uns sind keine ausgebildeten Sozial Arbeiter*innen oder
				Psychotherapeut*innen. Trotzdem können wir durch aktives Zuhören,
				Rückzugsmöglichkeiten und Unterstützung bei Bedürfnisserfüllung, dabei
				helfen sich aus gewaltvollen Situation zu ziehen und Handlungskontrolle
				zurückzubekommen. Im Awarenesskoffer liegt auch ein Informationszettel
				zu langfrisitigeren Anlaufstellen für Betroffenen mit dem
				verwiesen/weitervermittelt werden kann, wenn ihr an die Grenzen, was ihr
				leisten könnt/wollt.
			</p>
			<p>2.1 Prinzipen bei einer Awareness-Schicht</p>
			<p>1. Nüchtern arbeiten</p>
			<p>2. Vertraulichkeit vermitteln und einhalten!</p>
			<p>
				3. Eigene Grenzen und Selfcarebedarf situativ wahrnehmen,
				berücksichtigen und im Team transparent machen; Bedürfnisse formulieren;
				sich Unterstützung holen; Unterstützung einer betroffenen Person aus
				unterschiedlichen Gründen (z. B. Involviertheit) innerhalb des Teams
				auch ablehnen und an andere Personen im Team abgeben können; Förderung
				von Awareness innerhalb des Awarenessteams
			</p>
			<p>
				4. Kommunikationsabläufe im Team präsent haben, Treffpunkte und
				Schichtwechsel einhalten Vermittlung: Was ist Konsens? (Auch während der
				Schicht) Gespräche darüber führen und Material ausgeben
			</p>
			<p>
				5. Nie allein agieren: immer im Team arbeiten und mit zweiter Person
				abstimmen
			</p>
			<p>
				6. Ständige Erreichbarkeit innerhalb des aktiv arbeitenden Teams (z. B.
				zwischen mobilen Teams und gegebenenfalls festem Anlaufpunkt)
			</p>
			<p>
				7. nach der Awareness Initiative Leipzig, Zine: Umgang mit
				Diskriminierung & (sexualisierter) Gewalt bei Veranstaltungen, Seite 41
			</p>
			<p>2.2 Anfangen mit einer Check-in Runde im Team:</p>
			<p>
				- Welche Erfahrungen habe wir/ich schon mit Awareness-Arbeit gemacht?
			</p>
			<p>
				- Gibt es bestimmte Situationen, die triggernd auf mich wirken könnten?
				Was bräuchte ich dann von euch und meiner Umgebung?
			</p>
			<p>
				- Was machen wir, wenn es uns/mir zu viel wird und wir/ich mehr
				Unterstützung & Entlastung bräuchten?
			</p>
			<p>- Was hilft mir/uns, mit der Betroffenheit umzugehen?</p>
			<p>
				- Was machen wir/ich, wenn wir/ich merken, dass wir/ich der Situation
				gerade nicht gerecht werden oder auch gerecht werden können?
			</p>
			<p>
				- In welchem emotionalen und physischen Umfang kann ich Unterstützung
				anbieten?
			</p>
			<p>3. AwarenessStruktur bei Filmvorführungen/Kinos</p>
			<p>
				Filmen zeigen Bilder, Töne und Inhalte, die triggernd sein können.
				Queere Filme können auch diskriminierende Perspektiven oder
				stigmatisierende Vorstellungen zeigen. Beides wird bei Vorauswahl der
				Filme beachtet. Mit der Gesamtkomposition der Filme soll ein
				intersektionale Perspektive auf Sexualität, Gender und
				zwischenmenschliche [intime] Beziehung gezeigt werden. Zu dieser
				Thematik haben wir ein TriggerWarning Konzept erarbeitet - dieses könnt
				ihr auf unserer Website nachlesen.
			</p>
			<p>3.1.Wie informieren wir über Awareness Arbeit?</p>
			<p>
				- Bei jeder Filmvorführung wird zu Beginn ein Awareness-Trailer gezeigt.
				Bei Filmabenden mit Pausen auch nach der Pause [eng/deu]
			</p>
			<p>- Im Kino hängt dieses Awarenesskonzept aus [eng/deu]</p>
			<p>
				- Beim Einlass werden die Unterstützungsmöglichkeiten erklärt und sich
				zu Anti Diskriminierung positioniert [eng/deu]
			</p>
			<p>
				- Es liegt Infomaterial zu Awareness als emanzipatorische Praxis aus
			</p>
			<p>
				- Es werden Flyer ausgelegt, in dem Tigger-Warnings und Content Notes
				für die einzelnen Filme stehen. Trigger und Content Notes werden
				außerdem auf Social Media gepostet [eng/deu]
			</p>
			<p>
				- Beim Einlass und im Trailer sensibilisieren wir dafür, dass Awareness
				nicht geoutsourced werden kann: weder auf eine extra Awareness-Team noch
				auf die Veranstalter*innen. Zuschauer*innen müssen ebenso auf eigenes
				Verhalten gegenüber ihren Sitznachbar*innen achten und Verantwortung
				füreinander nehmen.
			</p>
			<p>
				3.2.Wie kann das Awareness Team erreicht/Unterstützung in Anspruch
				genommen werden?
			</p>
			<p>
				- Bei jedem Filmabend ist ein Team von zwei Awareness Menschen vor Ort,
				bei den betroffene Personen Unterstützung finden können
			</p>
			<p>
				- Das Awarenessteam ist an einem pinken Harness (Gurt um den Oberkörper)
				erkennbar
			</p>
			<p>
				- Das Team sitzt ab Programmbeginn (Einlass) bis Programmende (Abbau) im
				Foyer des Kino bei der Awareness-Anlaufstelle
			</p>
			<p>
				- Es kann (auch anonym) über die Email Adresse:{" "}
				<b>
					<a href="mailto:queerfilmfestival-awareness@riseup.net">
						queerfilmfestival-awareness(at)riseup.net
					</a>
				</b>{" "}
				erreicht werden
			</p>
			<p>3.3 Awarenessecke/-Anlaufstelle und Rückzugsraum</p>
			<p>
				Ein <b>Rückzugsraum</b> ist je nach Kino möglich. Der Raum soll
				Möglichkeiten bieten sich aus diskriminierenden oder
				grenzüberschreitenden oder anderen überfordernden Situationen in einen
				sensitiv ruhigen Ort zurückzuziehen. Awareness First Aid Materialien
				liegen aus. Aus mangelnden Raumkapazitäten ist es nicht möglich einzelne
				für diskriminierte Gruppen spezifische Safer Spaces zu haben. Dies und
				eine Beschreibung des Raumes wird Besucher*innen über ein Poster
				mitgeteilt. Das Awareness-Team kann sich mit Betroffenen Personen auch
				in den Raum zurückziehen. Ob der Raum unverschlossen gelassen werden
				kann oder nur durch das Awa-Team geöffnet werden kann, muss nach
				Raummöglichkeiten entschieden werden.
			</p>
			<p>
				Die <b>Awarenessecke/Anlaufstelle</b> ist im Foyer aufgebaut. Sinn der
				Ecke ist es eine niedrigschwellige Anlaufstelle für
				Unterstützungssuchende Menschen zu schaffen.Gleichzeitig sensibilisiert
				sie durch Sichtbarkeit für Awareness. Es liegen Informationsmaterialien
				und der Awarenesskoffer (siehe 3.5.) aus. Außerdem sitzt das Awa-Team
				während der Filmvorführung dort. Kinospezifisch werden sich Rückzugsorte
				gewählt, wo sie das Team für Gespräche mit betroffenen Personen
				zurückziehen können.
			</p>
			<p>Awarenessecke und Rückzugsraum muss mit Rollstuhl erreichbar sein.</p>
			<p>
				<b>*Reflexion:</b> Während des Queerfilmfestivals 2022 in Weimar haben
				wir mit einem Ampelsystem gearbeitet, wo das Awa-Team im Kinosaal saß
				und über eine Ampel kontaktiert werden konnte (grün: ich brauche keine
				Unterstützung / gelb: wenn ich in x minuten nicht da bin, dann schaut
				nach mir / rot: ich brauche Unterstützung). In der Reflexion haben
				festgestellen, dass die nicht viel genutzt wurde. In der Pornfilmnacht
				hingegen, als eine Person im Foyer saß, konnte besser unterstützt
				werden. Wenn es ein Team aus vier Personen gibt, kann sich auf Kinsosaal
				und Foyer aufgeteilt werden (trotzdem ohne Ampel).
			</p>
			<p>3.5.Awarenesskoffer</p>
			<p>
				<b>Inhalt:</b> Traubenzucker, süße und saure Snacks, Kaugummi, sensitive
				Stimulationsgegenstände (Knetbälle etc.), Masken, Menstruationsartikel,
				Kondome und Lecktücher, Kuscheltier, Schmerztabletten, Ohrstöpsel,
				Decken, Medizinisches Erste-Hilfe Kit, Liste mit bereits organisiereten
				Anlaufstellen für Betroffenen in der Umgebung
			</p>
			<p>4.AwarenessStruktur bei Workshops</p>
			<p>4.1Wie informieren wir über Awareness Arbeit?</p>
			<p>
				- In der Workshopbeschreibung auf unseren Social Media Plattformen und
				mündlich vor Beginn des Workshops wird über das
				Awa-Unterstützungsangebot informiert
			</p>
			<p>
				- Das Awa-Team stellt sich vor dem Workshop vor. Je nach Workshop und
				Raum findet es mit den Workshopgebenden und den haupterantwortlichen
				Organisator*innen des Workshops eine Lösung wo es zu finden ist / den
				Workshop verbringt oder auch am Workshop teilnimmt.
			</p>
			<p>
				- Dieses Konzept ist auch bei den Workshops einsehbar und wird den
				Workshopgebende im Vorhinein zugesendet
			</p>
			<p>
				- Barrieren werden spezifisch in der Workshopbeschreibung auf unseren
				Social Media Plattformen gelistet.
			</p>
			<p>4.2 Organisation</p>
			<p>
				Das Awa-Team bei Workshops besteht aus zwei Menschen. Eine Schicht
				dauert, wenn nicht anderes mit Awa-Team abgesprochen, von Workshopbeginn
				bis Ende an.
			</p>
			<p>4.3 Rückzugsraum/ort</p>
			<p>
				Ein <b>Rückzugsraum</b> ist je nach Workshoport möglich. Falls es kein
				Raum zur Verfügung steht klärt das Awa-Team vor Beginn mit der
				spezifischen organisatorischen haupterantwortlichen Person und den
				Workshopgebenden Personen ab, wo Betroffene Personen sich zurückziehen
				können. Dies wird bei der Awareness Vorstellung den Teilnehmenden
				mündlich kommuniziert.
			</p>
			<p>
				Ein Rückzugsraum soll Möglichkeiten bieten sich aus diskriminierenden
				oder grenzüberschreitenden oder anderen überfordernden Situationen in
				einen sensitiv ruhigen Ort zurückzuziehen. Awareness First Aid
				Materialien liegen aus. Aus mangelnden Raumkapazitäten ist es nicht
				möglich einzelne für diskriminierte Gruppen spezifische Safer Spaces zu
				ermöglichen. Dies und eine Beschreibung des Raumes wird Besucher*innen
				mündlich bei der Vorstellung zu Beginn mitgeteilt. Das Awareness-Team
				kann sich mit Betroffenen Personen auch in den Raum zurückziehen. Ob der
				Raum unverschlossen gelassen werden kann oder nur durch das Awa-Team
				geöffnet werden kann, muss nach Raummöglichkeiten entschieden werden.
			</p>
			<p>4.4 Awarenesskoffer</p>
			<p>
				Inhalt: Traubenzucker, süße und saure Snacks, Kaugummi, sensitive
				Stimulationsgegenstände (Knetbälle etc.), Masken, Menstruationsartikel,
				Kondome und Lecktücher, Kuscheltier, Schmerztabletten, Ohrstöpsel,
				Decken, Medizinisches Erste-Hilfe Kit, Liste mit bereits organisiereten
				Anlaufstellen für Betroffenen in der Umgebung
			</p>
			<p>5. AwarenessStruktur bei der Party</p>
			<p>5.1Wie informieren wir über Awareness Arbeit?</p>
			<p>
				- Beim Einlass und in der Bar hängt das Awarenesskonzept aus [eng/deu]
			</p>
			<p>
				- Beim Einlass werden die Unterstützungsmöglichkeiten erklärt und sich
				zu Anti-Diskriminierung positioniert [eng/deu]
			</p>
			<p>
				- Es liegen Infomaterial zu Awareness als emanzipatorische Praxis aus
			</p>
			<p>
				- Zwischen den einzelnen Acts wird mündlich auf das
				Awareness-Unterstützungsangebot informiert und für gegenseitige
				Verantwortungsübernahme sensibilisiert.
			</p>
			<p>
				- Poster hängen aus die über Kontaktaufnahme Möglichkeiten mit dem
				Awa-Team informieren. Andere Poster hängen außerdem aus, die sich gegen
				diskriminierendes und gewaltvollen Verhalten positonieren und für
				Konsens und solidarisches und sorgendes Miteinander sensibilisieren.
			</p>
			<p>5.2 Kontaktaufnahme</p>
			<p>- Das Awa-Team ist an pinken Harnessen zu erkennen</p>
			<p>
				- Zwei Awa-Personen laufen mit Walkies herum und sind in den Partyräumen
				präsent
			</p>
			<p>
				- Betroffene / Unterstützung Suchende Menschen können außerdem die
				Menschen hinter der Bar oder am Einlass informieren, die über Walkies
				dem Awa-Team Bescheid gibt. Dies ist auch anonym mit dem Code xx„Wo ist
				Louisa?“xx möglich. Der Code wird ebenfalls auf den Postern genannt.
			</p>
			<p>5.3 Organisation</p>
			<p>
				<u>Größe des Teams</u>: 2 Personen
			</p>
			<p>
				<u>Schichtlänge</u>: 2 Stunden
			</p>
			<p>
				<u>Schichtwechsel</u>: Die erste Schicht bekommt das AwaEquipment von
				der Orga Hauptverantwortlichen Person. Die späteren können sich mit den
				jeweiligen folgenden Schichten bei der Awa-Anlaufstelle treffen. Kommt
				gerne 10 Minuten früher als euere Schicht beginnt, damit ihr Zeit für
				ein Gruppen Check-In habt und Bedürfnisse rechtzeitig geklärt werden
				können.
			</p>
			<p>
				<u>Schichtbuch</u>: Im Schichtbuch hält das Team während ihrer Schicht
				Vorfälle oder andere Informationen fest, die für die folgende Schicht
				wichtig zu wissen sind. Anonymisiert beim Aufschreiben, klärt es mit den
				betroffenen Personen ab und reflektiert die Notwendigkeit, was
				aufgeschrieben werden muss und was grenzüberschreitend aufzuschreiben
				sein kann.
			</p>
			<p>5.4 Rückzugsraum</p>
			<p>
				Der Rückzugsraum bietet Möglichkeit sich aus diskriminierenden oder
				grenzüberschreitenden oder anderen überfordernden Situationen in einen
				sensitiv ruhigen Ort zurückzuziehen. Awareness First Aid Materialien
				liegen aus. Aus mangelnden Raumkapazitäten ist es nicht möglich einzelne
				für diskriminierte Gruppen spezifische Safer Spaces zu haben. Dies und
				eine Beschreibung des Raumes wird Besucher*innen über ein
				RückzugsraumPoster mitgeteilt. Das Awa-Team kann sich mit Betroffenen
				Personen auch in den Raum zurückziehen. Ob der Raum unverschlossen
				gelassen werden kann oder nur durch das Awa-Team geöffnet werden kann,
				muss nach Raummöglichkeiten entschieden werden.
			</p>
			<p>
				Eine <b>Awareness-Anlaufstelle</b> ist an einen sichtbaren Ort in den
				Partyräumen aufgebaut. Sinn der Ecke ist es eine niedrigschwellige
				Anlaufstelle für Unterstützungssuchende Menschen zu schaffen.
				Gleichzeitig sensibilisiert sie durch Sichtbarkeit für Awareness. Es
				liegen Informationsmaterialien aus.
			</p>
			<p>5.5 Awarenesskoffer</p>
			<p>
				Inhalt: Traubenzucker, süße und saure Snacks, Kaugummi, sensitive
				Stimulationsgegenstände (Knetbälle etc.), Masken, Menstruationsartikel,
				Kondome und Lecktücher, Kuscheltier, Schmerztabletten, Ohrstöpsel,
				Decken, Medizinisches Erste-Hilfe Kit, Liste mit bereits organisiereten
				Anlaufstellen für Betroffenen in der Umgebung
			</p>
			<p>5.6 Awa-Team Material</p>
			<p>
				- Walkies, die sie mit anderen Helfer*innen (Einlass, Bar) und einer
				Orga-Person verbinden
			</p>
			<p>- Awa-Team Snacks</p>
			<p>
				- Wenn Partyräumlichkeiten es hergeben eigener Rückzugsort für nach
				Schicht
			</p>
			<p>- xZine/Infomaterialien zu „Awareness & SubstanzDrogen“ x</p>
			<p>- Awareness-Koffer als reduzierte Awareness-Bauschtasche</p>
			<p>6.Nachbereitung und Kritik</p>
			<p>
				Nach dem Festival laden wir euch zu einem Nachbereitungstreffen ein.
				Hier reflektieren wird zusammen die AwarenessStruktur und Arbeit. Wir
				haben eine anonyme Mailadresse eingerichtet an welche jederzeit Kritik,
				Fragen und Anliegen gesendet werden können:{" "}
				<a href="mailto:queerfilmfestival-awareness@riseup.net">
					<b>queerfilmfestival-awareness(at)riseup.net</b>
				</a>
				. Wir freuen uns über Hinweise und ein offenes Feedback, um stetig
				gemeinsam weiter zu lernen.
			</p>
		</div>
	),
	Barrieren: <div>Infos folgen...</div>,
	"Covid-19": <div>Infos folgen</div>,
	"Wie gehen wir mit Kohle um?": <div>Infos folgen</div>,
	"Wie wählen wir Filme aus?": (
		<div>
			<p>Wie kommen wir an Filme?</p>
			<p>
				Zum einen haben wir nach zwei vergangenen Festivals bereits eine große
				Anzahl an Kontakten und Künstler*innen/Produzent*innen/Performer*innen
				die wir in diesem Jahr wieder angeschrieben haben. Zum anderen haben wir
				über Instagram Storys und Posts Menschen eingeladen uns Sichtungslinks
				zu schicken. Zusätzlich haben wir auch in diesem Jahr uns das Programm
				andere queere Filmfestivals und alternative Filmvertriebe angeschaut und
				dort gezeigte Filme angeschrieben.
			</p>
			<p>Wie wählen wir aus?</p>
			<p>
				Wir haben eine Tabelle mit allen Filmen. Am Ende gibt es 3 Spalten:
				Kuration Team intern, Kuration Team Wien und Kuration Team
				Leipzig/Weimar. Die jeweiligen Teams/Personen "bewerten" die Filme, in
				Hinblick auf die Übereinstimmung mit unseren Werten (siehe
				Selbstverständnis), und dem Backroundcheck (s.u.). Sind alle gesichtet,
				entscheiden wir wie wir die einzelnen Programme zueinander kuratieren
				und welche Filme rein passen. Dabei ist uns wichtig eine internationale,
				intersektionale, queer_feministische Sichtweise auf queere Themen zu
				zeigen. Wir haben generell mehr Filme als wir zeigen und bezahlen
				können, weshalb wir in jedem Jahr leider nicht alle Filme zeigen können,
				die wir gerne zeigen würden.
			</p>
			<p>
				Mit der Auswahl der Filme geht eine gewisse Macht einher. Denn als
				Kurationsteam haben wir die Entscheidungsgewalt darüber, was und wer auf
				der Leinwand präsentiert wird. Dadurch bestimmen wir auch, welche
				Themen, Produktionen und Stimmen in der Öffentlichkeit präsent sind und
				möglicherweise Bekanntheit erlangen. Unser Anspruch ist international,
				intersektional und queer-feministisches Filmprogramm aufzustellen. Da
				das Kurationsteam in diesem Jahr weiß positioniert, vorwiegend trans und
				vorwiegend mit akademischem Hintergrund ist, legen wir einen starken
				Fokus auf das kritische einordnen unserer Perspektiven und versuchen
				aktiv Filme und Stimmen zu zeigen, die vielfältige Perspektiven
				repräsentieren, um ein breites Spektrum an Geschichten und Erfahrungen
				zu zeigen, welche wir als Kurationsteam nicht abbilden können.
			</p>
			<p>
				Andere Dinge auf die wir achten sind auch bestimmte Trigger die
				womöglich in den Filmen beinhaltet sein könnten. Hier fragen wir uns,
				müssen wir den Film zeigen? Sind die Inhalte relevant für das Festival?
				Durch das herausarbeiten des Contents (Inhalt) und möglichen Triggern
				können wir auf SocialMedia die Filme auch vorab schon beschrieben,
				sodass jede*r selbst entscheiden kann zu kommen oder nicht. Allgemein
				stellen wir uns immer wieder die Frage: Was sollen die Filme beinhalten?
				Wir möchten auch queer joy zeigen und nicht immer nur
				Queerfeindlichkeit, auch wenn natürlich beides wichtig ist zu
				thematisieren.
			</p>
			<p>Backroundchecks:</p>
			<p>
				Wir bitten immer darum uns Informationen zu den beteiligten Personen zu
				schicken, wir verstehen und respektieren aber auch, dass das nicht alle
				wollen. Wir möchten nur Filme zeigen die keine Stereotype und
				konservative Narrative beinhalten. Dabei spielt die eigene Position der
				Regie und der Performenden im Film eine wichtige Rolle.
				<br />
				Wir haben uns bei den "Backroundchecks" der Filmemacher*innen folgende
				Fragen gestellt: Wer zeigt welche Perspektiven, aus welcher Sichtweise
				und auf welche Perspektiven sind die Filme produziert, im Bezug auf
				Positionierung in der Gesellschaft, Sexuelle Orientierung,
				Genderidentity,... Uns ist wichtig, dass die Filme aus und nicht über
				die entsprechende Community gehen.
			</p>
		</div>
	),
};

const AwarenessMenuToContentMapEnglisch: { [key: string]: ReactNode } = {
	Concept: "follows soon",
	Accessibility: "follows soon",
	"Covid-19": "follows soon",
	"Film selection": (
		<>
			<p>How do we get films?</p>
			<p>
				On the one hand, after two previous festivals, we already have a large
				number of contacts and artists/producers/performers that we have
				contacted again this year. On the other hand, we have invited people via
				Instagram stories and posts to send us viewing links. In addition, this
				year we also looked at the program of other queer film festivals and
				alternative film distributors and wrote to films shown there.
			</p>
			<p>How do we select?</p>
			<p>
				We have a table with all the films. At the end there are 3 columns:
				Curation Team Internal, Curation Team Vienna and Curation Team
				Leipzig/Weimar. The respective teams/persons "evaluate" the films, in
				terms of conformity with our values (see self-image), and the background
				check (see below). Once all have been screened, we decide how to curate
				the individual programs in relation to each other and which films fit
				in. It is important to us to show an international, intersectional,
				queer_feminist perspective on queer issues. We generally have more films
				than we can show and pay for, so unfortunately we can't show all the
				films we'd like to in any given year.
			</p>
			<p>
				With the selection of films comes a certain power. Because as the
				curation team, we have the power to decide what and who is presented on
				the screen. In this way, we also determine which topics, productions,
				and voices are present in the public sphere and potentially become
				popular. Our aspiration is to put on international, intersectional, and
				queer-feminist film programming. Because the curation team this year is
				white positioned, mainly trans, and mostly academic, we are placing a
				strong focus on critically framing our perspectives and actively seeking
				to show films and voices that represent diverse perspectives in order to
				show a wide range of stories and experiences that we as a curation team
				cannot represent.
			</p>
			<p>
				Other things we look for are certain triggers that might be in the film.
				Here we ask ourselves, do we need to show the film? Is the content
				relevant to the festival? By working out the content and possible
				triggers, we can also describe the films in advance on social media, so
				that everyone can decide for themselves whether to come or not. In
				general, we always ask ourselves the question: What should the films
				contain? We also want to show queer joy and not always queer hostility,
				even though both are important to address.
			</p>
			<p>
				Backround checks:
				<br />
				We always ask to send us information about the people involved, but we
				also understand and respect that not everyone wants that. We only want
				to show films that do not contain stereotypes and conservative
				narratives. The director's and performer's own position in the film
				plays an important role.
				<br />
				We asked ourselves the following questions during the "background
				checks" of the filmmakers: Who shows which perspectives, from which
				point of view and on which perspectives are the films produced, in
				relation to positioning in society, sexual orientation, gender
				identity,...? It is important to us that the films are from and not
				about the respective community.
			</p>
		</>
	),
};
