import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';

import schema from './schema'
// import resolvers from './resolvers'


const app =  express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/graphqldb')


app.get('/', (req, res) => {
  return res.json({
    msg: 'Welcome to GraphQL World!'
  })
});

// const root = resolvers;
// rootValue: root

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}) );

app.listen(3000, () => {
  console.log("Express working in port 3000");

});
