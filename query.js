mutation createUser {
  createUser(input: {
 		firstName: "Nicky",
    lastName: "Le",
    email: "something4@gmail.com",
    id: "1234"
  }){
    firstName
    lastName
    email
    id
  }
}

query getUser{
  getUser(id: "1234"){
    id
    firstName
    lastName
    email
  }
}
query allUser{
  users{
    id
    firstName
    lastName
    email
  }
}

/*------- Second query with HackerNewsItemInput -------*/
mutation createUser {
  createUser(input: {
 		firstName: "Nicky",
    lastName: "Le",
    email: "something4@gmail.com",
    id: "1234",
    age: 22,
    gender: Male
    items:[{
      id: "12",
      text:"Hack something",
      time:1232,
      timeISO: "2Pm",
      title: "Title"
    }]

  }){
    firstName
    lastName
    email
    id
    age
    gender
    items{
    	title
			id
    	text
    	time
    	timeISO
  	}
  }
}

query getUser{
  getUser(id: "1234"){
    firstName
    lastName
    email
    id
    age
    gender
    items{
    	title
			id
    	text
    	time
    	timeISO
  	}
  }
}
query allUser{
  users{
    firstName
    lastName
    email
    id
    age
    gender
    items{
    	title
			id
    	text
    	time
    	timeISO
  	}
  }
}


mutation {
 deleteUser( id:"5c522e8639bccfda85423f71") {
    id
    firstName
    lastName
    email
    items{
      text
      title

    }
  }
}

mutation{
  updateUser(input:{
    id: "5c522e8639bccfda85423f71",
    firstName: "Nicky cannt delete",
    lastName: "Le1",
    email: "somethingthing123@gmail.com",
    gender: Male,
    age:16
  }){
    id
    firstName
    lastName
    email
    items{
      title
    }
  }
}
