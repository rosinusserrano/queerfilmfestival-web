import { type SchemaTypeDefinition } from "sanity";

import { blockContent } from "./schemaTypes/blockContent";
import {
	programWednesday,
	programFriday,
	programSaturday,
	programSunday,
	programThursday,
} from "./schemaTypes/programm";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		blockContent,
		programWednesday,
		programFriday,
		programSaturday,
		programSunday,
		programThursday,
	],
};
