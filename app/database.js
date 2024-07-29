const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const config = require('./config')
const MONGO_URI = config.MONGO_URI;

const connectDB = async () => {
  try {
    const con = await mongoose.connect(MONGO_URI);
    console.log(`Database Connected at : ${con.connection.host}`);

    // Create collections if they don't exist
    const db = mongoose.connection;
    await db.createCollection('users', { capped: false });
    await db.createCollection('products', { capped: false });

  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
