// import req from 'express/lib/request'
// import res from 'express/lib/response'
import livros from '../models/Livro.js'

class LivroController {
  static listarLivros = (req, res) => {
    livros
      .find()
      .populate('autor')
      .exec((err, livros) => {
        res.status(200).json(livros)
      })
  }
  static listarLivroID = (req, res) => {
    const id = req.params.id

    livros
      .findById(id)
      .populate('autor', 'nome')
      .exec((erro, livro) => {
        if (erro) {
          res
            .status(400)
            .send({ message: `${erro.message} - Livro não encontrado!` })
        } else {
          res.status(200).send(livro)
        }
      })
  }

  static cadastrarLivro = (req, res) => {
    let livro = new livros(req.body)

    livro.save(erro => {
      // tratando caso haja erro
      if (erro) {
        res
          .status(500)
          .send({ message: `${erro.message} - falha ao cadastrar livro` })
      }
      // caso dê certo
      else {
        // toJSON converte para json
        res.status(201).send(livro.toJSON())
      }
    })
  }

  static atualizarLivro = (req, res) => {
    const id = req.params.id
    // metodo do mongodb
    livros.findByIdAndUpdate(id, { $set: req.body }, erro => {
      // se NÃO tiver erro
      if (!erro) {
        res.status(200).send({ message: 'Livro atualizado com sucesso!' })
      }
      // se tiver erro
      else {
        res
          .status(500)
          .send({ message: `${erro.message} - Falha ao cadastrar livro!` })
      }
    })
  }

  static excluirLivro = (req, res) => {
    let id = req.params.id

    livros.findByIdAndDelete(id, (error, livro) => {
      if (error) {
        res.status(400).send({
          message: `${error.message} - Não foi possivel excluir o livro! `
        })
      } else {
        res.status(200).send(`livro deletado ${livro}`)
      }
    })
  }
}

export default LivroController
