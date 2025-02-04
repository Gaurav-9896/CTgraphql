"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const fs_1 = require("fs");
const graphql_1 = require("graphql");
const express4_1 = require("@apollo/server/express4");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const schemaString = (0, fs_1.readFileSync)('./schema.graphql', { encoding: 'utf8' });
        const schema = (0, graphql_1.buildSchema)(schemaString);
        const server = new server_1.ApolloServer({
            schema,
            //resolvers,
            introspection: true
        });
        const app = (0, express_1.default)();
        app.use(express_1.default.json());
        app.use((0, cors_1.default)());
        yield server.start();
        app.use('/graphql', (0, express4_1.expressMiddleware)(server));
        app.listen(8000, () => console.log('Server started at port 8000'));
    });
}
startServer().catch(error => {
    console.error('Error starting the server:', error);
});
