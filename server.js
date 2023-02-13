
const express = require("express") 
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")

const port = 8081;

app.use(cors())
app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });


db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});



app.listen(port, () => {
  console.log(`The server is up on port ${port}.`);
});


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bank application." });
});


//module.exports = { User, Account, Operation };





