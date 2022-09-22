// import path from 'path'
import { writeFileSync } from 'fs';
import { printSchema } from 'graphql';
import { schema } from '../schema/schema';

const targetFile = '../web/data/schema.graphql';

writeFileSync(targetFile, printSchema(schema));
