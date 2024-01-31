const express = require('express')
const UserModel = require('../src/models/user.model')

const app = express()

app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', 'src/views')

// Criando nosso midleware
app.use((req, res, next) => {
 console.log(`Request Type: ${req.method}`)
 console.log(`Content Type Type: ${req.headers['content-type']}`)
 console.log(`Data: ${new Date()}`)

 next()
})

app.get('/views/users', async (req, res) => {
 try {
  const users = await UserModel.find({})
  res.render('index', {users})
 } catch (err) {
  return res.status(500).send(err.message)
 }
})

app.get('/home', (req, res) => {
 res.contentType('application/html')
 res.status(200).send(`<h1>Oi mundo!!</h1>`)
})

app.get('/users', async (req, res) => {
 try {
  const users = await UserModel.find({})
 
  return res.status(200).json(users)
 } catch (err) {
  return res.status(500).send(err.message)
 }
})

app.get('/users/:id', async (req, res) => {
 try {
  const id = req.params.id
  const user = await UserModel.findById(id)
  return res.status(200).json(user)
 } catch (err) {
  return res.status(500).send(err.message)
 }
})

app.post('/users', async (req, res) => {
 try {
  const user = await UserModel.create(req.body)

  return res.status(201).json(user)
 } catch (err) {
  return res.status(500).send(err.message)
 }
})

app.patch('/users/:id', async (req, res) => { 
 try {
  const id = req.params.id
  const user = await UserModel.findByIdAndUpdate(id, req.body, {new: true})

  return res.status(200).json(user)
 } catch (err) {
  return res.status(500).send(err.message)
 }
})

app.delete('/users/:id', async (req, res) => {
 try {
  const id = req.params.id
  await UserModel.findByIdAndDelete(id)

  return res.status(200).send('Deletado com sucesso!!')
 } catch (err) {
  return res.status(500).send(err.message)
 }
})


const port = 8080

app.listen(port, () =>
 console.log(`Escutando na porta: ${port}`))