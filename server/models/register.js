import { Sequelize, DataTypes } from 'sequelize';

// Create a new Sequelize instance
const sequelize = new Sequelize('test', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

// Define your model
const  User = sequelize.define('users', {
 name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

});

// Sync the model with the database
(async () => {
  await sequelize.sync({ force: false }); // This will drop the table if it already exists
  console.log('Database synced');
})();

// Export the model
export default User;

