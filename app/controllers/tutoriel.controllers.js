const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

// Create and Save a new user
exports.create = (req, res) => {
    if (!req.body.id) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
    }
    const user = {
        cin: req.body.cin,
        name: req.body.name,
        surname: req.body.surname,
        jobTitle: req.body.jobTitle,
      };
    
      // Save User in database
      Tutorial.create(user)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Tutorial."
          });
    });
};

// Retrieve all users from the database.
exports.findAll = (req, res) => {
    const cin = req.query.cin;
    var condition = cin ? { cin: { [Op.iLike]: `%${cin}%` } } : null;
  
    Tutorial.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      });
  };


// Delete a user with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Tutorial.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "user was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete user with id=${id}. Maybe user was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete user with id=" + id
        });
      });
  };

