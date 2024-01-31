const mongoose = require('mongoose')
const dotenv = require('dotenv') 

const uri = `mongodb+srv://admin:passaai@nodejsiniciante.qjowcfy.mongodb.net/NodeIniciante?retryWrites=true&w=majority`

const connectToDataBase = async () => {
 (await mongoose.connect(`${uri}`)) 
}

module.exports = connectToDataBase