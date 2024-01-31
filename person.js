class Person {
 constructor(nome) {
  this.nome = nome;
 }

 faleMeuNome() {
  return `Olá, me chamo ${this.nome}.`
 }
}

module.exports = {
 Person,
}