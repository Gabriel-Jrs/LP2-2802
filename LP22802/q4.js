let maior = null
let menor = null

for (let i = 0; i < 10; i = i + 1) {
  let valor = prompt("Digite um número:")

  if (maior === null || +valor > maior) {
    maior = +valor
  }

  if (menor === null || +valor < menor) {
    menor = +valor
  }
}

console.log("Maior número:", maior)
console.log("Menor número:", menor)
