const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Book.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch((error) => {
        console.error(error);
    });
  },
  findById: function(req, res) {
    db.Book.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch((error) => {
        console.error(error);
    });
  },
  create: function(req, res) {
    db.Book.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch((error) => {
        console.error(error);
    });
  },
  remove: function(req, res) {
    db.Book.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch((error) => {
        console.error(error);
    });
  }
};