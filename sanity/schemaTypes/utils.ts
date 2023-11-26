import { defineField } from "sanity";

export function defineFieldForBothLanguages({
	name,
	type,
}: { name: string; type: string }) {
	return [
		defineField({
			name: `${name}_de`,
			fieldset: name,
			title: "Deutsch",
			type,
		}),
		defineField({
			name: `${name}_en`,
			fieldset: name,
			title: "Englisch",
			type,
		}),
	];
}

export function defineBlockForBothLanguages({ name }: { name: string }) {
	return [
		defineField({
			name: `${name}_de`,
			fieldset: name,
			title: "Deutsch",
			type: "array",
			of: [{ type: "block" }],
		}),
		defineField({
			name: `${name}_en`,
			fieldset: name,
			title: "Englisch",
			type: "array",
			of: [{ type: "block" }],
		}),
	];
}
