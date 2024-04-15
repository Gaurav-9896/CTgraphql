import { ApolloServer } from '@apollo/server';
import { readFileSync } from 'fs';
import { buildSchema } from 'graphql';
import { expressMiddleware } from '@apollo/server/express4';
import express from 'express';
import cors from 'cors';

async function startServer() {
 
    const schemaString = readFileSync('./schema.graphql', { encoding: 'utf8' });
    const schema = buildSchema(schemaString);

   
    const server = new ApolloServer({
        schema,
     //resolvers,
        introspection: true 
    });

    const app = express();
    app.use(express.json());
    app.use(cors());

    await server.start();
    app.use('/graphql', expressMiddleware(server));

    app.listen(8000, () => console.log('Server started at port 8000'));
}

startServer().catch(error => {
    console.error('Error starting the server:', error);
});
