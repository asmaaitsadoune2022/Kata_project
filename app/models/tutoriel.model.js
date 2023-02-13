module.exports = (sequelize, Sequelize) => {
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
    return User

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
      
}
      