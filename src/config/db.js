const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/blog'); // Ganti sesuai URI Anda
    console.log('Koneksi database berhasil');
  } catch (err) {
    console.error('Gagal terhubung ke database', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
