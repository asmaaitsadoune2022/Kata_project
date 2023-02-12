const express = require("express") 
const app = express()
const cors = require("cors")


app.use(cors())
app.use(express.json())

const Sequelize = require('sequelize');
const sequelize = new Sequelize('bankdatabase', 'postgres', 'Asma@asma', {
  host: 'localhost',
  dialect: 'postgres',
});


sequelize.authenticate().then(() => {
  console.log("Success!");
}).catch((err) => {
  console.log(err);
});


