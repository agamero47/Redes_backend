// mongoose nos permite conectarnos a nuestras bases de datos y hacer CRUD
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// un esquema es la estructura de datos de nuestra colección, definimos los tipos de datos
// y sus relaciones
const AplicacionesSchema = new Schema({
  Nombre: String,
  Descripcion: String,
  Puntaje: number,
  FechaLanzamiento: date,
  Creador: String,
   celulares: [
      {
        type: Schema.Types.ObjectId,
        ref: "Celulares"
      } 
    ]
  // vinculamos las aplicaciones a un solo celular
   
});

// exportamos el modelo
var Aplicaciones = mongoose.model("Aplicaciones", AplicacionesSchema);
module.exports = Aplicaciones;