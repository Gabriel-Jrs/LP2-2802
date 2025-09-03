let operacoes = {
  soma: 0,
  subtracao: 0,
  multiplicacao: 0,
  divisao: 0
}

while (true) {
  let opcao = prompt(
    "Escolha uma opção:\n" +
    "a) SOMA\n" +
    "b) SUBTRAÇÃO\n" +
    "c) MULTIPLICAÇÃO\n" +
    "d) DIVISÃO\n" +
    "e) sair"
  )

  if (opcao === "e") {
    break
  }

  if (["a", "b", "c", "d"].indexOf(opcao) === -1) {
    console.log("Opção inválida, tente novamente")
    continue
  }

  let num1 = prompt("Digite o primeiro número")
  let num2 = prompt("Digite o segundo número")

  let n1 = +num1
  let n2 = +num2
  let resultado

  if (opcao === "a") {
    resultado = n1 + n2
    operacoes.soma = operacoes.soma + 1
  } else if (opcao === "b") {
    resultado = n1 - n2
    operacoes.subtracao = operacoes.subtracao + 1
  } else if (opcao === "c") {
    resultado = n1 * n2
    operacoes.multiplicacao = operacoes.multiplicacao + 1
  } else if (opcao === "d") {
    if (n2 === 0) {
      console.log("Erro: divisão por zero")
      continue
    }
    resultado = n1 / n2
    operacoes.divisao = operacoes.divisao + 1
  }

  console.log("Resultado:", resultado)
}

console.log("Operações feitas:")
console.log("Soma:", operacoes.soma)
console.log("Subtração:", operacoes.subtracao)
console.log("Multiplicação:", operacoes.multiplicacao)
console.log("Divisão:", operacoes.divisao)
