module.exports = app => {
    const operations = require("../controllers/tutorial.controller.js");
  
    var router = require("express").Router();
  
    // Create a new user
    router.post("/", operations.create);
  
    // Retrieve all users
    router.get("/users", operations.findAll);


    // Delete a Tutorial with id
    router.delete("/user/:id", operations.delete);

   
    app.use('/katabank', router);
};