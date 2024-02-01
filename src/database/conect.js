const mongoose = require('mongoose')
const { ADM, MONGODB_PASSWORD } = require('../utils/env')

const uri = `mongodb+srv://${process.env.ADM}:${process.env.MONGODB_PASSWORD}@nodejsiniciante.qjowcfy.mongodb.net/NodeIniciante?retryWrites=true&w=majority`

const connectToDataBase = async () => {
 (await mongoose.connect(`${uri}`)) 
}

module.exports = connectToDataBase