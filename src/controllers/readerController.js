const readerService = require('../service/readerService');

exports.register = (req, res) => {
  const { name, email, password } = req.body;
  try {
    const reader = readerService.register(name, email, password);
    res.status(201).json(reader);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  try {
    const token = readerService.login(email, password);
    res.status(200).json({ token });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};
