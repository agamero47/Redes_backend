
const controller = require("./controller")

module.exports = (app)=>{
  app.get("/", (req, res)=>{
    res.send('pagina inicial')
  })

  
  // Traer todos los celulares
  app.get("/celulares", (req, res)=>{    
    controller.getCelulares(res)
  })
  
 //crear un celulares
  app.post("/celulares", (req, res)=>{
    let celulares = req.body
    console.log(req.body)
    controller.postCelulares(celulares, res)
  })
  //traer celulares por su id
  app.get("/celulares/;id",(req, res)=>{
    let id = req.params.id
    controller.getCelularesPorId(id, res)
  })

  //modificar un celular
  app.put("/celulares/;id", (req, res)=>{
    let id = req.params.id;
    let celulares = req.body
    controller.updateCelularesPorId(id, celulares, res)
    
  })


  //eliminar un celulares
  app.delete("/celulares/;id", (req, res)=>{
    let id = req.params.id
    controller.deleteCelulares(id, res)
  })
} 
