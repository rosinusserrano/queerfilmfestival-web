import { client } from "@/sanity/lib/client";
import { ProgrammEntry } from "@/sanity/schemaTypes/programm";
import { DateTime } from "luxon";
import { TransparentBubble } from "../components/TransparentBubble";
import { LanguageListener } from "../components/LanguageListener";
import { ExpandInOut } from "../components/ExpandInOut";
import { H1, H2, H3 } from "../components/text/headings";
import { getBlockContentById } from "../utils";
import { SubRiderBubble } from "../components/SubRiderBubble";
import SanityBlock from "../components/SanityBlock";
import { ProgramAsImages } from "./ProgramAsImages";

export default async function ProgramPage() {
	const { wednesday, friday, saturday, thursday, sunday } = await getProgram();
	const workshopApplication = await getWorkshopApplication();

	return (
		<ExpandInOut duration={3}>
			<main className="text-olive">
				<ProgramAsImages />
				<SubRiderBubble
					blockContent={workshopApplication}
					titleDE="Workshop&shy;anmeldung"
					titleEN="Workshop application"
				/>
				<ProgramDayTitle de="MITTWOCH" en="WEDNESDAY" />
				{wednesday
					.sort((a, b) => (a.from_time > b.from_time ? 1 : -1))
					.map((pe, i) => (
						<ProgrammEntryBubble
							programmEntry={pe}
							dayString={["Mittwoch", "Wednesday"]}
							key={`programbubbleaskjdksa_${i}`}
						/>
					))}
				<ProgramDayTitle de="DONNERSTAG" en="THURSDAY" />
				{thursday
					.sort((a, b) => (a.from_time > b.from_time ? 1 : -1))
					.map((pe, i) => (
						<ProgrammEntryBubble
							programmEntry={pe}
							dayString={["Mittwoch", "Wednesday"]}
							key={`programbubbleaskjdksa_${i}`}
						/>
					))}
				<ProgramDayTitle de="FREITAG" en="FRIDAY" />
				{friday
					.sort((a, b) => (a.from_time > b.from_time ? 1 : -1))
					.map((pe, i) => (
						<ProgrammEntryBubble
							programmEntry={pe}
							dayString={["Mittwoch", "Wednesday"]}
							key={`programbubbleaskjdksa_${i}`}
						/>
					))}
				<ProgramDayTitle de="SAMSTAG" en="SATURDAY" />
				{saturday
					.sort((a, b) => (a.from_time > b.from_time ? 1 : -1))
					.map((pe, i) => (
						<ProgrammEntryBubble
							programmEntry={pe}
							dayString={["Mittwoch", "Wednesday"]}
							key={`programbubbleaskjdksa_${i}`}
						/>
					))}
				<ProgramDayTitle de="SONNTAG" en="SUNDAY" />
				{sunday
					.sort((a, b) => (a.from_time > b.from_time ? 1 : -1))
					.map((pe, i) => (
						<ProgrammEntryBubble
							programmEntry={pe}
							dayString={["Sonntag", "Sunday"]}
							key={`programbubbleaskjdksa_${i}`}
						/>
					))}
			</main>
		</ExpandInOut>
	);
}

function ProgramDayTitle({ en, de }: { en: string; de: string }) {
	const className = "text-center sm:text-left pl-0 sm:pl-4 md:pl-8";
	return (
		<LanguageListener>
			<H1 padded wonderFont className={className}>
				{de}
			</H1>
			<H1 padded wonderFont className={className}>
				{en}
			</H1>
		</LanguageListener>
	);
}

function ProgrammEntryBubble({
	programmEntry,
	dayString,
}: { programmEntry: ProgrammEntry; dayString: [string, string] }) {
	return (
		<TransparentBubble>
			<div className="grid grid-cols-1 sm:grid-cols-2 w-full py-4">
				<h2 className="leading-none text-center sm:text-left text-h5resp sm:text-h2resp">
					{/* <LanguageListener>
						<span>{dayString[0]}, </span>
						<span>{dayString[1]}, </span>
					</LanguageListener> */}
					{programmEntry.from_time}
					{programmEntry.to_time && " - "}
					{programmEntry.to_time}
				</h2>
				<H2 className="text-center sm:text-left leading-none">
					<LanguageListener>
						{/* biome-ignore lint/complexity/noUselessFragments: <explanation> */}
						<>{programmEntry.title_de}</>
						{/* biome-ignore lint/complexity/noUselessFragments: <explanation> */}
						<>{programmEntry.title_en}</>
					</LanguageListener>
				</H2>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 w-full">
				<LanguageListener>
					<main className="col-start-1 sm:col-start-2">
						<p>
							{programmEntry.location_de && (
								<span>
									Ort:
									<br />
								</span>
							)}
							{programmEntry.location_de}
						</p>
						<p>
							{programmEntry.barriers_de && (
								<span>
									Barrieren:
									<br />
								</span>
							)}
							{programmEntry.barriers_de}
						</p>
						<p>
							{programmEntry.language_de && (
								<span>
									Sprache:
									<br />
								</span>
							)}
							{programmEntry.language_de}
						</p>
						<p>{programmEntry.details_de && "Details:"}</p>
						{programmEntry.details_de?.map((bl) => (
							<SanityBlock sanityBlock={bl} />
						))}
					</main>
					<main className="col-start-1 sm:col-start-2">
						<p>
							{programmEntry.location_en && (
								<span>
									Location:
									<br />
								</span>
							)}
							{programmEntry.location_en}
						</p>
						<p>
							{programmEntry.barriers_en && (
								<span>
									Barriers:
									<br />
								</span>
							)}
							{programmEntry.barriers_en}
						</p>
						<p>
							{programmEntry.language_en && (
								<span>
									Language:
									<br />
								</span>
							)}
							{programmEntry.language_en}
						</p>
						<p>{programmEntry.details_en && "Details:"}</p>
						{programmEntry.details_en?.map((bl) => (
							<SanityBlock sanityBlock={bl} />
						))}
					</main>
				</LanguageListener>
			</div>
		</TransparentBubble>
	);
}

async function getWorkshopApplication() {
	const workshopApplication = await getBlockContentById("workshop-application");
	return workshopApplication;
}

async function getProgram(): Promise<{
	wednesday: ProgrammEntry[];
	thursday: ProgrammEntry[];
	friday: ProgrammEntry[];
	saturday: ProgrammEntry[];
	sunday: ProgrammEntry[];
}> {
	const wednesday = (await client.fetch(
		`*[_type == 'program-wednesday']`,
	)) as ProgrammEntry[];
	const thursday = (await client.fetch(
		`*[_type == 'program-thursday']`,
	)) as ProgrammEntry[];
	const friday = (await client.fetch(
		`*[_type == 'program-friday']`,
	)) as ProgrammEntry[];
	const saturday = (await client.fetch(
		`*[_type == 'program-saturday']`,
	)) as ProgrammEntry[];
	const sunday = (await client.fetch(
		`*[_type == 'program-sunday']`,
	)) as ProgrammEntry[];

	return {
		wednesday,
		thursday,
		friday,
		saturday,
		sunday,
	};
}
