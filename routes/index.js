// Módulo de RUTA para la página principal.

const express = require('express')
const router = express.Router()
const validarHora = require('../middlewares/validarHora')

router.get('/', (req, res) => {
  const mensaje = req.query.mensaje || ''
  res.send(`
    <h1>Hola, maja</h1>
    <p>Son las ${req.horaTotal}</p>
    <p>${mensaje}</p>
    ${mensaje ? '<a href="/"><button>Volver</button></a>' :'<a href="/endroute"><button>Entrar</button></a>'}
    `)
})

router.get('/endroute', validarHora, (req, res) => {
  res.send(`
    <h1>¡Ya puedes comprar las entradas de Bruno Mars!</h1>
    `)
})

module.exports = router



//código DATA
// const express = require("express")
// const router = express.Router()
// const validarHora = require("../middlewares/validarHora")

// router.get("/", (req, res) => {
//   const mensaje = req.query.mensaje || ""
//   console.log(mensaje)
//   res.send(`
//     <h1>BIENVENIDA!!!</h1>
//     <p>Son las: ${req.horaTotal}</p>
//     <p>${mensaje}</p>
//     <a href="/endroute"><button>Entrar</button></a>
//   `)
// })

// router.get("/endroute", validarHora, (req, res) => {
//   res.send("Ya puedes comprar las entradas de las Spice Girls")
// })

// module.exports = router