function findAccountById(accounts, id) {
  let accountIds = accounts.find((account) => account.id === id);
  return accountIds
}

function sortAccountsByLastName(accounts) {
  let lastNames = accounts.sort((lastName1, lastName2) => (lastName1.name.last > lastName2.name.last ? 1 : -1));
  return lastNames;
}

function numberOfBorrows(account, books) {
  let timesBorrowed = 0;
  for (let directory in books) {
    if (books[directory].borrows.find((record) => record.id === account.id)) {
      timesBorrowed = timesBorrowed + 1;
  }
  }
  return timesBorrowed;
}

function getBooksPossessedByAccount(account, books, authors) {
  let checkedOut = [];
  books.forEach(book => {
      if (book.borrows.find(item => item.id === account.id && item.returned === false)) {
        checkedOut.push(book);
      }
    })
     checkedOut.forEach(book => {
      let writer = authors.find(person => person.id === book.authorId);
      book['author'] = writer;
    })
   return checkedOut;
  }

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
