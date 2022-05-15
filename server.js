// const http = require("http")
import App from './src/App.js'

// se a api for para produção,  hospedada como por exemplo no heruko, usara a porta do servidor que eles definirem
// caso o contrario, localmente, ela rodara na porta 3000
const port = process.env.PORT || 3000

// const rotas = {
//   '/': 'Curso de Node',
//   '/livros': 'Entrei na pag de livros',
//   '/autores': 'Listagem de autores',
//   '/editora': 'Pag de editora',
//   '/sobre': 'Info sobre o projeto'
// }

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end(rotas[req.url]);
// })

App.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`)
})
