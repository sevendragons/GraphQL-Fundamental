const users = [];
const items = [];
let user = {};

import Item from './models/item'
import User from './models/user'

export const resolvers = {
  Query: {
    hello: () => 'Hello and Welcome to GraphQL',
    getItem: async(_,{id}) => {
      return await Item.findOne({ _id: id });
    },
    getUser: async (_, {id}) => {
       return await User.findById(id );
     },
    getUsers: async() => {
      return await User.find().populate('items');

    },
    users: () => {
      return users;

    },
    items: () => {
      return items;

    },
  },
  Mutation: {
    createUser: async(_, {input}, context, info ) => {
      const user = await User.create(input);
      return await User.findOne( {_id: user.id} ).populate('items')
    },
    createItem: (_, {input}) => {
      return Promise.resolve(Item.create(input)   );
    },
    updateUser: async(_, {input}) => {
      return await User.findOneAndUpdate({_id: input.id}, input, {new: true})
    },
    deleteUser: async(_, {id}) => {
      return await User.findOneAndRemove({_id: id})
    }

  }

};





/*--------------------------------------------------------------*/
/* Other version
/*--------------------------------------------------------------*/
// const users = [];
// let user = {}
//
// const root = {
//   hello: () => 'Hello and Welcome to GraphQL',
//   item: () => {
//     return {
//       id: "12123123",
//       text: "This is hacker new Item",
//       timeISO: "2pm tuesday",
//       time: 11312,
//       title: " Graphql Learning Schema",
//       delete: true
//     }
//   },
//
//   getUser: ({id}) => {
//     return users.find(user => user.id === id );
//   },
//
//   users: () => {
//     return users;
//
//   },
//
//   createUser: ({input}) => {
//     user = input;
//     users.push(user);
//     return user;
//   }
//
// };
//
// export default root
