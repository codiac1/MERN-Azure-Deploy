const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./database');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

connectDB();

app.use(express.static(path.join(__dirname, 'client/build')));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));
app.use('/api/cart', require('./routes/cart'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.get('/', (req, res) => res.send('API is running...'));
console.log("App is loading");
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
