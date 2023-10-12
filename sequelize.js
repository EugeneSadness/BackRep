const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('test', 'eugene', 'king5681', {
  host: 'localhost',
  dialect: 'postgres'
})

const User = sequelize.define(
  'Mate',
  {
    // Здесь определяются атрибуты модели
    Id: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
  }
)

// `sequelize.define` возвращает модель
// console.log(User === sequelize.models.Mate) // true

// const newRec = User.build({
//   Id: '1283121',
//   name: 'Eugene',
//   email: 'eugene@gmail.com',
//   password: 'pswd'
// })

// newRec.save()
//   .then(result => {
//     console.log('Got it!');
//   })
//   .catch(error => {
//     console.error('fucked up.. ', error);
//   });