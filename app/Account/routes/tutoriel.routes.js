module.exports = app => {
    const accounts = require("../controllers/tutorial.controller.js");
  
    var router = require("express").Router();
  
    // Create a new user
    router.post("/", accounts.create);
  
    // Retrieve all users
    router.get("/users", accounts.findAll);


    // Delete a Tutorial with id
    router.delete("/user/:id", accounts.delete);

   
    app.use('/katabank', router);
};