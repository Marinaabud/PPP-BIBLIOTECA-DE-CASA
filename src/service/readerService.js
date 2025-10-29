const jwt = require('jsonwebtoken');
const { readers } = require('../model/db');
const SECRET = 'biblioteca_secret';

exports.register = (name, email, password) => {
  if (readers.find(r => r.email === email)) {
    throw new Error('Email já cadastrado');
  }
  const reader = { id: readers.length + 1, name, email, password };
  readers.push(reader);
  return { id: reader.id, name: reader.name, email: reader.email };
};

exports.login = (email, password) => {
  const reader = readers.find(r => r.email === email && r.password === password);
  if (!reader) throw new Error('Credenciais inválidas');
  const token = jwt.sign({ id: reader.id, email: reader.email }, SECRET, { expiresIn: '1h' });
  return token;
};
