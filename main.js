const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// Servir archivos estáticos (css, js, img, src, etc.) desde la raíz del proyecto
app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/OCR', (req, res) => {
  res.sendFile(path.join(__dirname, '/OCR/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})