const fs = require('fs')
const path = require('path')

// Criando uma pasta
// fs.mkdir(path.join(__dirname, '/teste'), (error) => {
//  if (error) {
//   return console.log(`Erro: ${error}`);
//  }

//  console.log('Pasta criada com sucesso!!');
// })

// Criar um arquivo
// fs.writeFile(path.join(__dirname, '/teste', 'criacao.txt'), `É meu amigo,
//  isso aqui funciona mesmo!!`, (error) => {

//  if (error) {
//   return console.log(`Erro: ${error}`);
//  }

//  console.log('Arquivo criado com sucesso!');
// })

// Adicionar texto a um arquivo existente, juntar os dois pois essa função
// de criação sobrescreve.
// fs.appendFile(path.join(__dirname, './teste', 'criacao.txt'), 'Hello World',
//  (error) => {
//   if (error) {
//   return console.log(`Erro: ${error}`);
//  }

//   console.log('Deu bom hem');
// })

// Como ler um arquivo 
// fs.readFile(path.join(__dirname, '/teste', 'criacao.txt'), 'utf8',
//  (error, data) => {
//   if (error) {
//    return console.log(`Error: ${error}`);
//   } 

//   console.log(data);
//  })

// Apenas se lembre que estas funções são assíncronas, então o jeito
// certo de assegurar que isso vai ser feito da forma correta é dizendo
// para o computador uma função só, dessa forma uma função não vai
// acontecer se a outra não trouxer o resultado

fs.writeFile(
 path.join(__dirname, '/teste', 'criacao.txt'),
  `É meu amigo,
 isso aqui funciona mesmo!!`, (error) => {

 if (error) {
  return console.log(`Erro: ${error}`);
 }

 console.log('Arquivo criado com sucesso!');

 fs.appendFile(
  path.join(__dirname, './teste', 'criacao.txt'),
  ' Hello World', 
  (error) => {
   if (error) {
    return console.log(`Erro: ${error}`);
   }

   console.log('Deu bom hem');
  })

 fs.readFile(
  path.join(__dirname, '/teste', 'criacao.txt'), 'utf8',
  (error, data) => {
   if (error) {
    return console.log(`Error: ${error}`);
   }

   console.log(data);
  }) 
})