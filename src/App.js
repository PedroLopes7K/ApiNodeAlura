import express from 'express'
import db from './config/dbConnect.js'
import routes from './routes/index.js'

// tratando erros de conexção
db.on('error', console.log.bind(console, 'Erro de conexão'))
db.once('open', () => {
  console.log('Conexão realizada com sucesso!')
})
const app = express()

// permite interpretar oque é enviado via post e put no ofrmato json
app.use(express.json())
routes(app)

export default app
