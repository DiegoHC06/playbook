// Ejemplo 3: Objeto con diferentes propiedades
const myObject3 = {
    name: "Tulio",
    age: 2,
    //cuando agredo llaves{} me da error por que cada atributo no tiene una variable para agregar varios atributos a una variable de agrega por []
    nicknames: {
     "Tulipan",
      "Tulancingo",
      "Tulish"
},
    address: {
      zip_code: "10000",
      street: "Dr. Vertiz 11 Benito Juarez",
      city: "CDMX"
    }
  }
  console.log("Ejemplo 3: Objeto con diferentes propiedades")
  console.log(myObject3)
  console.log(myObject3.name)
  console.log(myObject3["address"])