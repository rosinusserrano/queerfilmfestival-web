import { defineType, defineField } from "sanity";
import {
	defineBlockForBothLanguages,
	defineFieldForBothLanguages,
} from "./utils";

export const programm = defineType({
	name: "programm-entry",
	title: "Programm",
	type: "document",
	fieldsets: [
		{ name: "title", title: "Titel" },
		{ name: "barriers", title: "Barrieren" },
		{ name: "details", title: "Details" },
		{ name: "language", title: "Sprache" },
	],
	fields: [
		...defineFieldForBothLanguages({
			name: "title",
			type: "string",
		}),
		defineField({
			name: "location",
			type: "string",
			title: "Ort",
		}),
		defineField({
			name: "datetime",
			type: "datetime",
			title: "Datum & Uhrzeit",
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
