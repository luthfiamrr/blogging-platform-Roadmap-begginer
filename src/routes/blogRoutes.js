const express = require('express');
const router = express.Router();

const {
  addNewBlog,
  getBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require('../controllers/blogController');

router.route('/blog').post(addNewBlog).get(getBlog);

router.route('/blog/:id').get(getBlogById).put(updateBlog).delete(deleteBlog);

module.exports = router;
