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

// Синхронизация с базой данных и запуск сервера
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
  });
}).catch(error => {
  console.error('Ошибка подключения к базе данных:', error);
});
