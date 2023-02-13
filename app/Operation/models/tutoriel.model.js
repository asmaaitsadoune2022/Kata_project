module.exports = (sequelize, Sequelize) => {
      
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
      return Operation
      
}
      