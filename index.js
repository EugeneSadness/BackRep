const express = require('express');
const cors = require('cors');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer();
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('test', 'eugene', 'king5681', {
  host: 'localhost',
  dialect: 'postgres'
})

const app = express();
app.use(cors());

var corsOptions = {
  origin: "http://localhost:3001"
};

app.use(cors(corsOptions));


// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./models");
const Role = db.role;

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);


app.get("/",(req,res)=>{
  res.send("Hello");
});

app.listen(3000, () => console.log('Example app is listening on port 3000.'));