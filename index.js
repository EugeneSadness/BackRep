const express = require('express');
const cors = require('cors');

const { Sequelize, DataTypes, QueryTypes } = require('sequelize');

const sequelize = new Sequelize('test', 'eugene', 'king5681', {
    host: 'localhost',
    dialect: 'postgres'
  })
try {
    sequelize.authenticate()
    console.log('Соединение с БД было успешно установлено')
  } catch (e) {
    console.log('Невозможно выполнить подключение к БД: ', e)
  }

const Users = sequelize.define(
  'Users',
  {
    firstName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    id: DataTypes.INTEGER,
  },
  {
    timestamps: false,
  }
)

console.log(Users == sequelize.models.Users)

await Users.sync({alter: true, match: /users$/ })
console.log('Таблица приведена к соответствующей модели')

//const results = new String;

// sequelize.query("SELECT users.fisrtname FROM users WHERE users.fisrtname LIKE 'E%'", { type:
//   QueryTypes.SELECT })
//   .then(results => {
//     console.log(results);
//   })
//   .catch(error => {
//     console.error('Ошибка выполнения запроса');
//   });


const app = express();
app.use(cors());

app.get("/getData",(req,res)=>{
  res.send('Hello from a database user: ' + results);
});

app.listen(3000, () => console.log('Example app is listening on port 3000.'));