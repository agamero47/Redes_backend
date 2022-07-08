const Computadores = require("./models/Computadores");
// Crear un  Ceomputadores
const postComputadores = (Computadores, res)=>{
  Computadores.create(Computadores, (err, e)=>{
    if(err) throw err
    res.send(e);
  })
}
//Obterner todos los Computadores
const getComputadores = (res)=>{
  Computadores.find({}, (err, e)=>{
    if(err) throw err
    res.send(e)
  })
}
//Obterner un ccomputadoes por su Id
const getComputadoresPorId = (id, res)=>{
  Computadores.find({_id:id}, (err, e)=>{
    if(err) throw err
    res.send(e)
  })
}
// actualizar un Ceomputadores por su id
const updateComputadoresPorId = (id, Computadores, res)=>{
  Computadores.findByIdAndUpdate({_id:id}, Computadores, (err, e)=>{
    if(err) throw err
    res.send(e)
  })
}
// Eliminar un Ceomputadores por su id
const deleteComputadores = (id, res)=>{
  Computadores.findByIdAndDelete({_id:id}, (err, e)=>{
    if(err) throw err
    res.send(e)
  })
}
// CRUD Computadores
module.exports = {
  postComputadores,
  getComputadores,
  getComputadoresPorId,
  updateComputadoresPorId,
  deleteComputadores
}