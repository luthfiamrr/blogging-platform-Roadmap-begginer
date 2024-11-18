const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/blog');
    console.log('Koneksi database berhasil');
  } catch (err) {
    console.error('Gagal terhubung ke database', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
