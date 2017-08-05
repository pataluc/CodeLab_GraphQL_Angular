import { graphql, buildSchema } from 'graphql';
import { MessageTypes, MessageQueries, MessageMutations, MessageResolvers } from '../message/message.type'

// Construct a schema, using GraphQL schema language
export const schema = buildSchema(`
    ${MessageTypes}

    type Query {
        ${MessageQueries}
    }

    type Mutation {
        ${MessageMutations}
    }
`)

// The root provides a resolver function for each API endpoint
export const root = Object.assign({}, MessageResolvers)
