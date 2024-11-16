const Blog = require('../models/blogModel');

const addNewBlog = async (req, res) => {
  const { title, content, category, tags } = req.body;

  if (!title && !content) {
    return res.status(400).json({
      status: 'gagal',
      pesan: 'Judul dan konten tidak boleh kosong.',
    });
  }

  try {
    const newBlog = await Blog.create({
      title,
      content,
      category,
      tags,
    });

    res.status(201).json({
      status: 'sukses',
      pesan: 'Blog baru berhasil ditambahkan.',
      data: newBlog,
    });
  } catch (err) {
    res.status(400).json({
      status: 'gagal',
      pesan: `Gagal menambahkan blog baru: ${err.message}`,
    });
  }
};

const getAllBlog = async (req, res) => {
  try {
    const blogs = await Blog.find();

    if (blogs.length === 0) {
      return res.status(404).json({
        status: 'gagal',
        pesan: 'Tidak ada blog yang ditemukan.',
      });
    }

    res.status(200).json({
      status: 'sukses',
      pesan: 'Berhasil mendapatkan semua blog.',
      data: blogs,
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      pesan: `Gagal mendapatkan semua blog: ${err.message}`,
    });
  }
};

const getBlogById = async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({
        status: 'gagal',
        pesan: 'Blog dengan ID yang dimaksud tidak ditemukan.',
      });
    }

    res.status(200).json({
      status: 'sukses',
      pesan: 'Berhasil mendapatkan blog berdasarkan ID.',
      data: blog,
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      pesan: `Terjadi kesalahan saat mendapatkan blog: ${err.message}`,
    });
  }
};

const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, content, category, tags } = req.body;

  if (!title && !content) {
    return res.status(400).json({
      status: 'gagal',
      pesan: 'Judul dan konten tidak boleh kosong.',
    });
  }

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, content, category, tags },
      { new: true, runValidators: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({
        status: 'gagal',
        pesan: 'Blog dengan ID dimaksud tidak ditemukan.',
      });
    }

    res.status(200).json({
      status: 'sukses',
      pesan: 'Blog berhasil diperbarui.',
      data: updatedBlog,
    });
  } catch (err) {
    res.status(400).json({
      status: 'gagal',
      pesan: `Gagal memperbarui blog: ${err.message}`,
    });
  }
};

const deleteBlog = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res.status(404).json({
        status: 'gagal',
        pesan: 'Blog dengan ID tersebut tidak ditemukan.',
      });
    }

    res.status(200).json({
      status: 'sukses',
      pesan: 'Blog berhasil dihapus.',
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      pesan: `Terjadi kesalahan saat menghapus blog: ${err.message}`,
    });
  }
};

module.exports = {
  addNewBlog,
  getAllBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
};