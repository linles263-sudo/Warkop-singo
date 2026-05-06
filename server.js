const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ status: 'API Warkop Singo Online Prof 🚬' })
  })

  const PORT = 3000
  app.listen(PORT, () => console.log(`Gas di port ${PORT}`))