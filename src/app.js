const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../resources/swagger.json');
const readerRoutes = require('./routes/readerRoutes');
const bookRoutes = require('./routes/bookRoutes');
const { authenticateJWT } = require('./service/authService');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/readers', readerRoutes);
app.use('/api/books', authenticateJWT, bookRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
  res.send('PPP Biblioteca de Casa API');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
