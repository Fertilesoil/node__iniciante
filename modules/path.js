const path = require('path')

// Basename - Pega o nome do arquivo atual
console.log(path.basename(__filename));

// Nome do diretório atual
console.log(path.dirname(__filename));

// Pegar a extensão do arquivo
console.log(path.extname(__filename));

// Como criar um objeto Path
console.log(path.parse(__filename));

// Juntando caminho dos arquivos
console.log(path.join(__dirname, 'test', 'test.html'));
// Sim, ele aceita parâmetros múltiplos e quanto mais caminhos forem
// passados mais diretórios serão criados