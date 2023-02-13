module.exports = (sequelize, Sequelize) => {

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
      Account.belongsTo(User);
      return Account
}