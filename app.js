// app.js
const express = require('express');
const sequelize = require('./config/database');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(productRoutes);
app.use(categoryRoutes);

// ������������� � ����� ������ � ������ �������
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`������ ������� �� http://localhost:${PORT}`);
  });
}).catch(error => {
  console.error('������ ����������� � ���� ������:', error);
});
