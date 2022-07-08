// mongoose nos permite conectarnos a nuestras bases de datos y hacer CRUD
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// un esquema es la estructura de datos de nuestra colección, definimos los tipos de datos
// y sus relaciones
const ComputadoresSchema = new Schema(
  {
    nombre: String,
    creador: String,
    nacionalidad: String,
    // vinculamos alos Computadores a muchas aplicaciones (array)
    aplicaciones: [
      {
        type: Schema.Types.ObjectId,
        ref: "App"
      } 
    ]
  }
);

// exportamos el modelo
var Computadores = mongoose.model("Computadores", ComputadoresSchema);
module.exports = Computadores;
