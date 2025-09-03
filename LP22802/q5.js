let n = prompt("Quantas pessoas vão informar a temperatura")

/*
// usando while
let contador = 0
let febre = 0

while (contador < n) {
  let temp = prompt("Digite a temperatura da pessoa")
  
  if (+temp > 38) {
    febre = febre + 1
  }

  contador = contador + 1
}

console.log("Pessoas com febre (while):", febre)
*/

/*
// usando do...while
let contador = 0
let febre = 0

do {
  let temp = prompt("Digite a temperatura da pessoa")
  
  if (+temp > 38) {
    febre = febre + 1
  }

  contador = contador + 1
} while (contador < n)

console.log("Pessoas com febre (do...while):", febre)
*/

// usando for
let febre = 0

for (let i = 0; i < n; i = i + 1) {
  let temp = prompt("Digite a temperatura da pessoa")

  if (+temp > 38) {
    febre = febre + 1
  }
}

console.log("Pessoas com febre (for):", febre)
