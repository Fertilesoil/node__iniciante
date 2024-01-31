const express = require('express')

const app = express()
const port = 8080

app.get('/home', (req, res) => {
 res.contentType('application/html')
 res.status(200).send(`<h1>Oi mundo!!</h1>`)
})

app.get('/users', (req, res) => { 
 const users = [
  {
   nome: 'Jhon Doe',
   email: 'jhon.doe@gmail.com'
  },
  {
   nome: 'Addy Ferrer',
   email: 'addyferrer@gmail.com'
  },
 ]

 res.status(200).json(users)
})

app.listen(port, () =>
 console.log(`Escutando na porta: ${port}`))