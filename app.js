const express = require("express") 
const app = express()
const cors = require("cors")
const port = 8081;

app.use(cors())
app.use(express.json())

app.listen(port, () => {
  console.log(`The server is up on port ${port}.`);
});

const Sequelize = require('sequelize');
const sequelize = new Sequelize('bankdatabase', 'postgres', 'Asma@asma', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

const User = sequelize.define('user', {
  cin: {
    type: Sequelize.INTEGER,
    primaryKey: true
    },
  name: {
    type: Sequelize.STRING,
    allowNull: false
    },  
  surname: {
    type: Sequelize.STRING,
    allowNull: false
    },
  creationDate: {
    type: Sequelize.DATE,
    allowNull: false
    },
  modificationDate: {
    type: Sequelize.DATE,
    allowNull: false
    },
  jobTitle: {
    type: Sequelize.STRING,
    allowNull: false
    },
})


const Account = sequelize.define('account', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
    },
  surname: {
    type: Sequelize.STRING,
    allowNull: false
    },
  creationDate: {
    type: Sequelize.DATE,
    allowNull: false
    },
  modificationDate: {
    type: Sequelize.DATE,
    allowNull: false
    },
  userId: {
    type: Sequelize.STRING,
    allowNull: false
    },
  amount: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
    },
})

const Operation = sequelize.define('operation', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
    },
  type: {
    type: Sequelize.STRING,
    allowNull: false
    },
  amount: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
    },
  executionDate: {
    type: Sequelize.DATE,
    allowNull: false
    },
  realDate: {
    type: Sequelize.STRING,
    allowNull: false
    },
  userFrom: {
    type: Sequelize.STRING,
    allowNull: false
    },
  accountFrom: {
    type: Sequelize.STRING,
    allowNull: false
    }, 
})

sequelize.sync()
.then(() => {
console.log(`Tables 'user' and 'account' and 'operation' have been created successfully`);
})
.catch(error => {
console.error(`Error creating tables 'user' and 'account': ${error}`);
 });


module.exports = { User, Account, Operation };

sequelize.authenticate().then(() => {
  console.log("Success!");
}).catch((err) => {
  console.log(err);
});




