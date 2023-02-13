module.exports = app => {
    const users = require("../controllers/tutorial.controller.js");
  
    var router = require("express").Router();
  
    // Create a new user
    router.post("/", users.create);
  
    // Retrieve all users
    router.get("/users", users.findAll);


    // Delete a Tutorial with id
    router.delete("/user/:id", users.delete);

   
    app.use('/katabank', router);
};