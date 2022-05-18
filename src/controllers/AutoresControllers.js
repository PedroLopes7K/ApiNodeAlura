// import autores from '../models/Autor.js'
import autores from '../models/Autor'

class AutoresController {
  static listarAutores = (req, res) => {
    autores.find((err, autores) => {
      res.status(200).json(autores)
    })
  }
  static listarAutorID = (req, res) => {
    const id = req.params.id

    autores.findById(id, (erro, Autor) => {
      if (erro) {
        res
          .status(400)
          .send({ message: `${erro.message} - Autor não encontrado!` })
      } else {
        res.status(200).send(Autor)
      }
    })
  }

  static cadastrarAutor = (req, res) => {
    let Autor = new autores(req.body)

    Autor.save(erro => {
      // tratando caso haja erro
      if (erro) {
        res
          .status(500)
          .send({ message: `${erro.message} - falha ao cadastrar Autor` })
      }
      // caso dê certo
      else {
        // toJSON converte para json
        res.status(201).send(Autor.toJSON())
      }
    })
  }

  static atualizarAutor = (req, res) => {
    const id = req.params.id
    // metodo do mongodb
    autores.findByIdAndUpdate(id, { $set: req.body }, erro => {
      // se NÃO tiver erro
      if (!erro) {
        res.status(200).send({ message: 'Autor atualizado com sucesso!' })
      }
      // se tiver erro
      else {
        res
          .status(500)
          .send({ message: `${erro.message} - Falha ao cadastrar Autor!` })
      }
    })
  }

  static excluirAutor = (req, res) => {
    let id = req.params.id

    autores.findByIdAndDelete(id, (error, Autor) => {
      if (error) {
        res.status(400).send({
          message: `${error.message} - Não foi possivel excluir o Autor! `
        })
      } else {
        res.status(200).send(`Autor deletado ${Autor}`)
      }
    })
  }
}

export default AutoresController
