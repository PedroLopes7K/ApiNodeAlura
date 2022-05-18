import express from 'express'
import AutoresController from '../controllers/AutoresControllers'

const router = express.Router()

router
  .get('/autores', AutoresController.listarAutores)
  .get('/autores/:id', AutoresController.listarAutorID)
  .post('/autores', AutoresController.cadastrarAutor)
  .put('/autores/:id', AutoresController.atualizarAutor)
  .delete('/autores/:id', AutoresController.excluirAutor)

export default router
