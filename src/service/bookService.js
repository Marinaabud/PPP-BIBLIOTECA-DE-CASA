const { books } = require('../model/db');

exports.addBook = (readerId, data) => {
  const { title, author, coverImage, status, queue, rating, notes } = data;
  if (!title || !author) throw new Error('Título e autor são obrigatórios');
  const book = {
    id: books.length + 1,
    readerId,
    title,
    author,
    coverImage,
    status,
    queue,
    rating,
    notes
  };
  books.push(book);
  return book;
};

exports.listBooks = (readerId) => books.filter(b => b.readerId === readerId);

exports.getBook = (readerId, id) => {
  const book = books.find(b => b.readerId === readerId && b.id == id);
  if (!book) throw new Error('Livro não encontrado');
  return book;
};

exports.updateBook = (readerId, id, data) => {
  const book = books.find(b => b.readerId === readerId && b.id == id);
  if (!book) throw new Error('Livro não encontrado');
  Object.assign(book, data);
  return book;
};

exports.deleteBook = (readerId, id) => {
  const idx = books.findIndex(b => b.readerId === readerId && b.id == id);
  if (idx === -1) throw new Error('Livro não encontrado');
  books.splice(idx, 1);
};
