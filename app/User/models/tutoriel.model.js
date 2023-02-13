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
    User.hasMany(Accounts);
    return User    
}
      