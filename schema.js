import {buildSchema} from 'graphql'
import {makeExecutableSchema} from 'graphql-tools'
import {resolvers} from './resolvers'

// const schema = buildSchema(`
const typeDefs = [`
  type HackerNewsItem{
    id: String
    text: String
    timeISO: String
    time: Int
    title: String
    delete: Boolean
  }

  type Email{
    email: String!
  }

  type User{
    id: ID
    firstName: String!
    lastName: String!
    email: String
    age: Int!
    gender: Gender
    items: [HackerNewsItem]
  }

  enum Gender {
    Male
    Female
    Other
  }

  type Query{
    hello: String
    getItem(id: ID!): HackerNewsItem
    getUser(id: ID): User
    getUsers: [User]
    users: [User]
    items: [HackerNewsItem]
  }

  input HackerNewsItemInput{
    id: String
    text: String
    timeISO: String
    time: Int
    title: String
    delete: Boolean
  }

  input UserInput{
    id: ID
    firstName: String!
    lastName: String!
    email : String
    age: Int!
    gender: Gender
    items: [ID!]
  }
  type Mutation{
    createUser(input: UserInput) : User
    updateUser(input: UserInput): User
    deleteUser(id: ID!): User
    createItem(input: HackerNewsItemInput): HackerNewsItem
  }

`];

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;

// type Query{
//   hello: String
//   item: HackerNewsItem
//   user: User
//   users: [User]
// }
