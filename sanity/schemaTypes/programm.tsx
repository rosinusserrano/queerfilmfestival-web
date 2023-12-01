import { defineType, defineField } from "sanity";
import {
	defineBlockForBothLanguages,
	defineFieldForBothLanguages,
} from "./utils";
import { Block, BlockContent } from "./blockContent";
import { DateTime } from "luxon";

export const programWednesday = defineProgramType(
	"program-wednesday",
	"Programm (Mittwoch)",
);
export const programThursday = defineProgramType(
	"program-thursday",
	"Programm (Donnerstag)",
);
export const programFriday = defineProgramType(
	"program-friday",
	"Programm (Freitag)",
);
export const programSaturday = defineProgramType(
	"program-saturday",
	"Programm (Samstag)",
);
export const programSunday = defineProgramType(
	"program-sunday",
	"Programm (Sonntag)",
);

function defineProgramType(name: string, title: string) {
	return defineType({
		name: name,
		title: title,
		type: "document",
		fieldsets: [
			{ name: "title", title: "Titel" },
			{ name: "barriers", title: "Barrieren" },
			{ name: "details", title: "Details" },
			{ name: "language", title: "Sprache" },
			{ name: "time", title: "Zeiten" },
			{ name: "location", title: "Ort" },
		],
		fields: [
			...defineFieldForBothLanguages({
				name: "title",
				type: "string",
			}),
			...defineFieldForBothLanguages({
				name: "location",
				type: "string",
			}),
			defineField({
				name: "from_time",
				type: "string",
				fieldset: "time",
				description: <b>Unbedingt im Format HH:MM!</b>,
				title: "Beginn (Uhrzeit)",
			}),
			defineField({
				name: "to_time",
				type: "string",
				fieldset: "time",
				description: <b>Unbedingt im Format HH:MM!</b>,
				title: "Ende (Uhrzeit)",
			}),
			...defineFieldForBothLanguages({
				name: "language",
				type: "string",
			}),
			...defineFieldForBothLanguages({
				name: "barriers",
				type: "string",
			}),
			...defineBlockForBothLanguages({
				name: "details",
			}),
		],
	});
}

export interface ProgrammEntry {
	title_de: string;
	title_en: string;
	location_de: string;
	location_en: string;
	from_time: string;
	to_time?: string;
	language_de?: string;
	language_en?: string;
	barriers_de?: string;
	barriers_en?: string;
	details_de?: Block[];
	details_en?: Block[];
}
