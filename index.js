import express from 'express' // <= panggil package express
import authRouter from './routers/authRouters.js'

const app = express() // <= tampung dalam fungsi app
const port = 3000 // <= aplikasi kita jalan diport apa nantinya

app.use(express.json()) // <= fungsi ini supaya express bisa membaca inputan json dan diparse jadi object

app.use('/api/auth', authRouter)

app.listen(port, () => { // app.listen untuk menjalankan aplikasi kita dan di port 3000
  console.log(`server is running ${port}`)
})