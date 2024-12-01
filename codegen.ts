import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
 schema: "app/graphql/schema.graphql",
 documents: "app/javascript/hooks/**/*.ts", 
 ignoreNoDocuments: true,
 generates: {
   'app/javascript/types/graphql.ts': {
     plugins: ['typescript'],
     config: {
       useTypeImports: true,
       strictScalars: true,
       enumsAsTypes: true,
       scalars: {
         ISO8601Date: 'string',
         Date: 'string', 
         JSON: 'any'
       }
     }
   },
   'app/javascript/generated/': {
     preset: 'near-operation-file',
     presetConfig: {
       extension: '.generated.ts',
       baseTypesPath: '../types/graphql.ts',
       folder: '../generated'
     },
     plugins: [
       'typescript-operations',
       'typescript-react-apollo'
     ],
     config: {
       useTypeImports: true,
       strictScalars: true,
       preResolveTypes: false,
       flattenGeneratedTypes: false,
       omitOperationSuffix: false,
       operationResultSuffix: "",
       dedupeOperationSuffix: false,
       exportFragmentSpreadSubTypes: true,
       nonOptionalTypename: true,
       skipTypeNameForRoot: false,
       withHooks: true,
       withRefetchFn: true,
       namingConvention: {
         typeNames: 'keep',
         enumValues: 'keep',
         transformUnderscore: false
       },
       scalars: {
         ISO8601Date: 'string',
         Date: 'string',
         JSON: 'any'
       },
       wrapFieldDefinitions: false,
       addUnderscoreToArgsType: false
     }
   }
 }
};

export default config;