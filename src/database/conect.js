const mongoose = require('mongoose')
// const dotenv = require('dotenv') 

const uri = `mongodb+srv://${process.env.ADM}:passaai@nodejsiniciante.qjowcfy.mongodb.net/?retryWrites=true&w=majority`

const connectToDataBase = async () => {
 (await mongoose.connect(`${uri}`)) 
}

module.exports = connectToDataBase