// Contiene el código principal de la aplicación con la configuración de Express, middleware y rutas.

const express = require('express')
const app = express()
const routes = require('./routes/index.js')
const horaMiddleware = require('./middlewares/horaMiddleware.js')
const PORT = 3000

app.use(horaMiddleware)

app.use('/', routes)

app.use((req, res) => {
  res.status(404).send('404 - Página no encontrada')
})

app.listen(PORT, () => {
  console.log(`El servidor está escuchando en el puerto http://localhost:${PORT}`)
})

//código DATA
// const express = require("express")
// const app = express()
// const routes = require("./routes/routes.js")
// const horaMiddleware = require("./middlewares/horaMiddleware.js")
// const PORT = 3000

// app.use(horaMiddleware)

// app.use("/", routes)

// app.use((req, res) => {
//   res.status(404).send("<h1>404 Not found</h1><p>La página que buscas no existe</p>")
// })

// app.listen(PORT, () => {
//   console.log(`El servidor está escuchando en el puerto http://localhost:${PORT}`)
// })