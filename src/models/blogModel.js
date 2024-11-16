const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      auto: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      enum: {
        values: ['Tech', 'Programming', 'Others'],
        message: '{VALUE} bukan tag yang didukung',
      },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
