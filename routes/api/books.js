const router = require("express").Router();
const books = require("../../controllers/books");

router.route("/")
  .get(books.findAll)
  .post(books.create);

router.route("/:id")
  .get(books.findById)
  .delete(books.remove);

module.exports = router;