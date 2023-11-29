import { client } from "@/sanity/lib/client";
import { ProgrammEntry } from "@/sanity/schemaTypes/programm";
import { DateTime } from "luxon";
import { TransparentBubble } from "../components/TransparentBubble";
import { LanguageListener } from "../components/LanguageListener";
import { ExpandInOut } from "../components/ExpandInOut";
import { H1, H3 } from "../components/text/headings";

export default async function ProgramPage() {
	const { wednesday, friday, saturday, thursday, sunday } = await getProgram();

	console.log(wednesday);

	return (
		<ExpandInOut>
			<main>
				<LanguageListener>
					<H1 padded wonderFont>
						MITTWOCH
					</H1>
					<H1 padded wonderFont>
						WEDNESDAY
					</H1>
				</LanguageListener>
				{wednesday
					.sort((a, b) => (a.from_time > b.from_time ? 1 : -1))
					.map((pe, i) => (
						<ProgrammEntryBubble
							programmEntry={pe}
							dayString={["Mittwoch", "Wednesday"]}
							key={`programbubbleaskjdksa_${i}`}
						/>
					))}
				<LanguageListener>
					<H1 padded wonderFont>
						DONNERSTAG
					</H1>
					<H1 padded wonderFont>
						THURSDAY
					</H1>
				</LanguageListener>
				<LanguageListener>
					<H1 padded wonderFont>
						FREITAG
					</H1>
					<H1 padded wonderFont>
						FRIDAY
					</H1>
				</LanguageListener>
				<LanguageListener>
					<H1 padded wonderFont>
						SAMSTAG
					</H1>
					<H1 padded wonderFont>
						SATURDAY
					</H1>
				</LanguageListener>
				<LanguageListener>
					<H1 padded wonderFont>
						SONNTAG
					</H1>
					<H1 padded wonderFont>
						SUNDAY
					</H1>
				</LanguageListener>
			</main>
		</ExpandInOut>
	);
}

function ProgrammEntryBubble({
	programmEntry,
	dayString,
}: { programmEntry: ProgrammEntry; dayString: [string, string] }) {
	console.log(programmEntry);
	return (
		<TransparentBubble>
			<div className="grid grid-cols-1 sm:grid-cols-2">
				<h3 className="text-center sm:text-left text-h6resp sm:text-h2resp">
					{programmEntry.from_time}
					{programmEntry.to_time && " - "}
					{programmEntry.to_time}
				</h3>
				<h3 className="text-center sm:text-left text-h2resp">
					<LanguageListener>
						{/* biome-ignore lint/complexity/noUselessFragments: <explanation> */}
						<>{programmEntry.title_de}</>
						{/* biome-ignore lint/complexity/noUselessFragments: <explanation> */}
						<>{programmEntry.title_de}</>
					</LanguageListener>
				</h3>
			</div>
			<div>
				<LanguageListener>
					<p>DE</p>
					<p>EN</p>
				</LanguageListener>
			</div>
		</TransparentBubble>
	);
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

	console.log({
		wednesday,
		thursday,
		friday,
		saturday,
		sunday,
	});

	return {
		wednesday,
		thursday,
		friday,
		saturday,
		sunday,
	};
}
