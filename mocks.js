exports.libraryAPI = {
  books: [
    {
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
      year: 1998
    },
    {
      title: 'Jurassic Park',
      author: 'Michael Crichton',
      year: 1990
    },
    {
      title: 'War and Peace',
      author: 'Leo Tolstoy',
      year: 1869
    },
  ],
  authors: [
    {
      name: 'Michael Crichton',
      books: [ 'Jurassic Park' ],
    },
    {
      name: 'J.K. Rowling',
      books: [ 'Harry Potter and the Chamber of Secrets' ],
    },
    {
      name: 'Leo Tolstoy',
      books: [ 'War and Peace' ],
    },
  ]
}

exports.bankAPI = {
  rates: [
    {
      currency: 'USD',
      value: '0.46'
    },
    {
      currency: 'BYN',
      value: '1'
    },
    {
      currency: 'RUB',
      value: '76.24'
    }
  ]
}