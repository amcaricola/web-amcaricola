const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// Servir archivos estáticos (css, js, img, src, etc.) desde la raíz del proyecto
app.use(express.static(__dirname))

// Servir los archivos estáticos dentro de la carpeta OCR bajo la ruta /OCR
app.use('/OCR', express.static(path.join(__dirname, 'OCR')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})