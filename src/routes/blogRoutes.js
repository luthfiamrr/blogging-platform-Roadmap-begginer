const express = require('express');
const router = express.Router();

const {
  addNewBlog,
  getAllBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require('../controllers/blogController');

router.post('/blog', addNewBlog);
router.get('/blog', getAllBlog);
router.get('/blog/:id', getBlogById);
router.put('/blog/:id', updateBlog);
router.delete('/blog/:id', deleteBlog);

module.exports = router;
