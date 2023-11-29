import { defineType, defineField } from "sanity";
import { defineBlockForBothLanguages } from "./utils";

export const blockContent = defineType({
	type: "document",
	name: "block-content",
	description: `
        Jeglicher Text der mittels Überschriften, Paragraphen, etc. formattiert
        werden soll.
        `,
	fieldsets: [
		{
			name: "content",
			description: "Das ist der Text, der auf der Webseite angezeigt wird.",
			title: "Inhalt",
		},
	],
	fields: [
		defineField({
			type: "string",
			name: "id",
			title: "ID",
			description: `
                Dieses Feld ist nicht sichtbar auf der Webseite, sondern wird
                nur im Code verwendet um Inhalte zu differenzieren.
                Erlaubt sind 0-9, a-z, A-Z, "_" und "-", keine Leerzeichen.
            `,
			validation: (Rule) => Rule.required().min(3).regex(/[\w-]+/),
		}),
		...defineBlockForBothLanguages({
			name: "content",
		}),
	],
});

export interface BlockContent {
	content_en: Block[];
	content_de: Block[];
}

export interface Block {
	children: BlockChild[];
	style: "normal" | "h1" | "h2" | "h3" | "h4";
	listItem?: "bullet";
	level?: number;
	markDefs: MarkDef[];
}

export interface BlockChild {
	_type: string;
	text: string;
	marks: string[];
}

export interface MarkDef {
	_type: string;
	href: string;
	_key: string;
}
