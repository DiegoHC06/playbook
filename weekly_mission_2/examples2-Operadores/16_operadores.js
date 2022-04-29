// Ejemplo 16: Ordenando una lista de objetos
const users = [
    { name: 'O', age: 150 },
    { name: 'E', age: 50 },
    { name: 'G', age: 100 },
    { name: 'D', age: 22 },
    { name: 'I', age: 40 },
  ]
  
  users.sort((a, b) => { // podemos invocar una función
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
  })
  
  console.log("Ejemplo 16: Ordenando una lista de objetos por la edad")
  console.log(users) // sorted ascending