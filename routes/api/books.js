const router = require("express").Router();
const booksController = require("../../controllers/books");

router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

router.route("/:id")
  .get(booksController.findById)
  .delete(booksController.remove);

module.exports = router;