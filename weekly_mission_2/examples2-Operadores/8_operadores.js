// Ejemplo 8: Filtrar una lista por condicional
const scores = [
    { name: 'H', score: 95 },
    { name: 'U', score: 98 },
    { name: 'N', score: 80 },
    { name: 'E', score: 50 },
    { name: 'H', score: 85 },
    { name: '06', score: 100 },
  ]
  const scoresGreaterEighty = scores.filter((score) => score.score > 80)
  console.log("Ejemplo 8: Filtrando elementos por score")
  console.log(scoresGreaterEighty)