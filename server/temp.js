import {Sequelize, DataTypes} from 'sequelize';

const sequelize = new Sequelize('test', 'root', '',{
    host : localhost,
    dialect: mysql,
});

const Register = sequelize.define('U_Register',{
    name :{
        type: DataTypes.STRING,
        allowNull : false,    },
    email :{
        type: DataTypes.email,
        allowNull: false,
    },
    password :{
        type : DataTypes.password,
        allowNull:false,
    },
});
(async () => {
    await sequelize.sync({ force: true }); // This will drop the table if it already exists
    console.log('Database synced');
  })();

module.exports={ Register };

