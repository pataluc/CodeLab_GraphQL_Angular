import express from 'express'
import graphqlHTTP from 'express-graphql'

import {schema, root} from './graphql/graphql'

const app = express()

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(3000, function () {
  console.log('Server started')
})