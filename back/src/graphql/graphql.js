import { graphql, buildSchema } from 'graphql';
import { MessageTypes, MessageQueries, MessageMutations, MessageResolvers } from '../message/message.type'

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
    ${MessageTypes}

    type Query {
        ${MessageQueries}
    }

    type Mutation {
        ${MessageMutations}
    }
`)

// The root provides a resolver function for each API endpoint
const root = Object.assign({}, MessageResolvers)

module.exports = {schema, root}
