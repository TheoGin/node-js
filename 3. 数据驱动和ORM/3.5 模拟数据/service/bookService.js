const Book = require("../models/Book");

exports.addBook = async function (bookObj) {
  const bookInstance = await Book.create(bookObj);
  return bookInstance.toJSON();
};

exports.updateBook = async function (bookId, bookObj) {
  return await Book.update(bookObj, {
    where: {
      id: bookId,
    }
  });
};

exports.deleteBook = async function (bookId) {
  return await Book.destroy({
    where: {
      id: bookId,
    }
  });
};

