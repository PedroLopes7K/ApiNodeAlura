import mongoose from 'mongoose'

mongoose.connect(
  'mongodb+srv://pedro:pedro123@curso-node-alura.3xvci.mongodb.net/node-express'
)

let db = mongoose.connection

export default db
