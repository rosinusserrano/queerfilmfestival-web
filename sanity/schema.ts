import { type SchemaTypeDefinition } from 'sanity'

import { blockContent } from './schemaTypes/blockContent'
import { programm } from './schemaTypes/programm'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, programm],
}
