const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: [String], required: true },
  description: { type: String, required: true },
  image: { type: String },
  link: { type: String, required: true },
  publishedDate: { type: String },
  rating: { type: Number },
  categories: {type: Array },
  pageCount: { type: Number },
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;