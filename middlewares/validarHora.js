// Módulo que contiene la lógica de validación de la hora.
const hora = 12                                                                         // las horas van de 0 a 23!!

module.exports = (req, res, next) => {
  console.log(`Hora recibida: ${req.horaActual}`)
  if(req.horaActual < hora) {
    res.locals.mensaje = `Aún no es la hora, espera hasta las ${hora}:00 para poder entrar`;
    return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
  }
  next()
}

//código DATA
// const hora = 22

// module.exports = (req, res, next) => {
//   if(req.horaActual < hora) {
//   res.locals.mensaje = `Aún no es la hora, espera hasta las ${hora}:00 para entrar`;
//   return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
//   }
//   next()
// }


