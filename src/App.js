import express from 'express'
import req from 'express/lib/request'
// import req from 'express/lib/request'

const app = express()

// permite interpretar oque é enviado via post e put no ofrmato json
app.use(express.json())

const livros = [
  { id: 1, titulo: 'Senhor dos Aneis' },
  { id: 2, titulo: 'O Hobbit' }
]

app.get('/', (req, res) => {
  res.status(200).send('Curso Node')
})

app.get('/livros', (req, res) => {
  res.status(200).json(livros)
})
app.put('/livros/:id', (req, res) => {
  let index = buscaLivro(req.params.id)
  res.json(livros[index])
})

app.post('/livros', (req, res) => {
  livros.push(req.body)
  res.status(201).send('Livro cadastrado com sucesso!')
})

app.put('/livros/:id', (req, res) => {
  let index = buscaLivro(req.params.id)
  livros[index].titulo = req.body.titulo
  res.json(livros)
})
app.delete('/livros/:id', (req, res) => {
  let { id } = req.params
  let index = buscaLivro(id)
  livros.splice(index, 1)
  res.send(`Livro ${id} deletado!`)
  // res.json(livros)
})

function buscaLivro(id) {
  return livros.findIndex(livro => livro.id == id)
}
export default app
