
const controller = require("./controller")

module.exports = (app)=>{
  app.get("/", (req, res)=>{
    res.send('pagina inicial')
  })

  
  // Traer todos los Computadores
  app.get("/Computadores", (req, res)=>{    
    controller.getComputadores(res)
  })
  
 //crear un Computadores
  app.post("/Computadores", (req, res)=>{
    let Computadores = req.body
    console.log(req.body)
    controller.postComputadores(Computadores, res)
  })
  //traer Computadores por su id
  app.get("/Computadores/;id",(req, res)=>{
    let id = req.params.id
    controller.getComputadoresPorId(id, res)
  })

  //modificar un celular
  app.put("/Computadores/;id", (req, res)=>{
    let id = req.params.id;
    let Computadores = req.body
    controller.updateComputadoresPorId(id, Computadores, res)
    
  })


  //eliminar un Computadores
  app.delete("/Computadores/;id", (req, res)=>{
    let id = req.params.id
    controller.deleteComputadores(id, res)
  })
} 
