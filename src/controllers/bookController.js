const bookService = require('../service/bookService');

exports.addBook = (req, res) => {
  try {
    const book = bookService.addBook(req.user.id, req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.listBooks = (req, res) => {
  const books = bookService.listBooks(req.user.id);
  res.status(200).json(books);
};

exports.getBook = (req, res) => {
  try {
    const book = bookService.getBook(req.user.id, req.params.id);
    res.status(200).json(book);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

exports.updateBook = (req, res) => {
  try {
    const book = bookService.updateBook(req.user.id, req.params.id, req.body);
    res.status(200).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteBook = (req, res) => {
  try {
    bookService.deleteBook(req.user.id, req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};
