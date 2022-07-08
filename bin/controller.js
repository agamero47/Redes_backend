const Celulares = require("./models/Computadores");
// Crear un celular
const postCelulares = (celulares, res)=>{
  Celulares.create(celulares, (err, e)=>{
    if(err) throw err
    res.send(e);
  })
}
//Obterner todos los celulares
const getCelulares = (res)=>{
  Celulares.find({}, (err, e)=>{
    if(err) throw err
    res.send(e)
  })
}
//Obterner un celular por su Id
const getCelularesPorId = (id, res)=>{
  Celulares.find({_id:id}, (err, e)=>{
    if(err) throw err
    res.send(e)
  })
}
// actualizar un Celular por su id
const updateCelularesPorId = (id, Celulares, res)=>{
  Celulares.findByIdAndUpdate({_id:id}, Celulares, (err, e)=>{
    if(err) throw err
    res.send(e)
  })
}
// Eliminar un celular por su id
const deleteCelulares = (id, res)=>{
  Celulares.findByIdAndDelete({_id:id}, (err, e)=>{
    if(err) throw err
    res.send(e)
  })
}
// CRUD celulares
module.exports = {
  postCelulares,
  getCelulares,
  getCelularesPorId,
  updateCelularesPorId,
  deleteCelulares
}