let somaIdades = 0
let quantidadePessoas = 0

while (true) {
  let idade = prompt("Digite a idade (0 ou menor para encerrar):")

  if (idade <= 0) {
    break
  }

  somaIdades += +idade
  quantidadePessoas++
}

if (quantidadePessoas > 0) {
  let media = somaIdades / quantidadePessoas;
  console.log("Idade média da população:", media)
} else {
  console.log("Nenhuma idade válida foi informada.")
}
