function findAuthorById(authors, id) {
  let authorId = authors.find((author) => author.id === id);
  return authorId;
}

function findBookById(books, id) {
  let bookId = books.find((book) => book.id === id);
  return bookId;
}

function partitionBooksByBorrowedStatus(books) {
  let checkedOutBooks = books.filter((book) => book.borrows.some((borrowed) => borrowed.returned === false));
  let returnedBooks = books.filter((book) => book.borrows.every((borrowed) => borrowed.returned === true));
  
let allBooks = [checkedOutBooks, returnedBooks];
return allBooks
}

function getBorrowersForBook(book, accounts) {
 return book.borrows.map((borrow) => {
   let borrower = accounts.find((borrower) => borrower.id === borrow.id);
   return {...borrow, ...borrower};
  })
  .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
