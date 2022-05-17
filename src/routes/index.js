import express from 'express'
import livros from './LivrosRoutes.js'

const routes = app => {
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: 'Curso Nodejs' })
  })

  app.use(express.json(), livros)
}

export default routes
