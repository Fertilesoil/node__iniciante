﻿// const { Person } = require('./person')
const dotenv = require('dotenv')
const connectToDataBase = require('./src/database/conect')

dotenv.config({ encoding: 'latin1' , path: 'C:/Users/user/Desktop/Node Iniciante/.env', debug: true })
console.log(dotenv.config())
connectToDataBase()

// require('./modules/path')
// require('./modules/fs')
// require('./modules/http')

// require('./modules/express')

// const person = new Person('Fefe')

// 01:08:42
// https://www.youtube.com/watch?v=IOfDoyP1Aq0