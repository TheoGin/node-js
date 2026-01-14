const {addBook, updateBook, deleteBook} = require("./service/bookService");

addBook({
  name: "被讨厌的勇气2",
  author: "阿德勒",
  imageUrl: 'testUrl',
  publishDate: '2026-1-15'
}).then(r => {
  console.log(r);
});

/*updateBook(1, {
  imageUrl: 'test imageUrl',
  publishDate: '2026-1'
}).then(r => {
  console.log(r);
});*/

/*deleteBook(1).then(r => {
  console.log(r);
});*/
