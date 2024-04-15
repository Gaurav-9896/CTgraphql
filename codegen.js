"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    // Define the remote GraphQL endpoint with authentication details
    schema: [
        {
            'https://api.australia-southeast1.gcp.commercetools.com/ct-assessment/graphql': {
                headers: {
                    Authorization: `Bearer XekIMfP0bDlRM34Kv6cCQjNFY_VWhYB6`, // Use an environment variable for production
                },
            },
        },
    ],
    // Specify where to generate the schema file and which plugin to use
    generates: {
        './schema.graphql': {
            plugins: ['schema-ast'], // Generates the schema in GraphQL SDL format
        },
    },
    // Optionally, set the overwrite option to true to replace the file each time you generate
    overwrite: true,
};
exports.default = config;
