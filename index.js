const { ApolloServer, gql } = require('apollo-server');
const { libraryAPI, bankAPI } = require('./mocks');

const typeDefs = gql`

  type Rate {
    currency: String
    value: Float
  }

  type Book {
    title: String
    author: Author
    year: Int
  }

  type Author {
    name: String
    books: [Book]
  }


  # В квери описано какой резолвер для какого типа нужно дернуть
  # По своей сути это тип верхнего уровня с которого начинается схема
  # Например, authors: [Author] значит что для получения данных типа *Author*
  # надо дернуть резолвер *authors* (resolvers.Query.authors)

  type Query {
    rates: [Rate],
    books: [Book],
    authors: [Author],
    getAuthorBooks(name: String!): Author,
  }


`;


const resolvers = {
  Query: {
      rates: () => bankAPI.rates,
      books: () => libraryAPI.books,
      authors: () => libraryAPI.authors,
      getAuthorBooks(root, { name }) {
        return libraryAPI.authors.find(author => author.name === name);
      }
  },
  Author: {
    books(author) {
      // console.log('author', JSON.stringify(author, null, 2))
      return libraryAPI.books.filter(book => book.author === author.name);
    },
  },
};


const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});