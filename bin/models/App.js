// mongoose nos permite conectarnos a nuestras bases de datos y hacer CRUD
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// un esquema es la estructura de datos de nuestra colección, definimos los tipos de datos
// y sus relaciones
const AppSchema = new Schema({
  Nombre: String,
  Descripcion: String,
  Puntaje: number,
  FechaLanzamiento: date,
  Creador: String,
   Computadores: [
      {
        type: Schema.Types.ObjectId,
        ref: "Computadores"
      } 
    ]
  // vinculamos las App a un solo compurdres
   
});

// exportamos el modelo
var App = mongoose.model("App", AppSchema);
module.exports = App;