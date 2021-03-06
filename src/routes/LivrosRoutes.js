import express from 'express'
import LivroController from '../controllers/LivrosController.js'

const router = express.Router()

router
  .get('/livros', LivroController.listarLivros)
  .get('/livros/:id', LivroController.listarLivroID)
  .post('/livros', LivroController.cadastrarLivro)
  .put('/livros/:id', LivroController.atualizarLivro)
  .delete('/livros/:id', LivroController.excluirLivro)

export default router
