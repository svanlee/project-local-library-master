function getTotalBooksCount(books) {
  let totalBooks = books.length;
  return totalBooks;
}


function getTotalAccountsCount(accounts) {
  let totalAccounts = accounts.length;
  return totalAccounts
}

function getBooksBorrowedCount(books) {
  let borrowedBooks = books.filter((list) => list.borrows[0].returned === false);
  return borrowedBooks.length;
}

function getMostCommonGenres(books) {
   let mostCommonGenres = [];
   let genreCount = books.reduce((acc, book) => {
    return {...acc, [book.genre]: (acc[book.genre] || 0) +1};
  }, []);
  for(let genre in genreCount){
    mostCommonGenres.push({ 
    name:genre, count:genreCount[genre]
    });
  };
  mostCommonGenres.sort((a, b) => {return b.count - a.count});
  return mostCommonGenres.slice(0, 5);
}

function getMostPopularBooks(books) {
  let popularBooks = books.map((book) => {
    return {name: book.title, count: book.borrows.length};
  })
  .sort((a, b) => (a.count < b.count ? 1 : -1))
  return popularBooks.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
 let popularAuthors = [];
 authors.forEach((author) => {
 let nameOfAuthor = author.name.first + ' ' + author.name.last;
    let count = 0;
      books.forEach(book => {
        if(book.authorId === author.id){
          count = count + book.borrows.length;
        }
      })
 popularAuthors.push({name: nameOfAuthor, count: count});
  })
  popularAuthors.sort((a, b) => {
    return b.count - a.count;
  })
  return popularAuthors.slice(0, 5);
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
