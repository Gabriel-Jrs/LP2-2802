const totalAlunos = 5

/*
// usando while
let alunos = []
let contador = 0

while (contador < totalAlunos) {
  let matricula = prompt("Digite a matrícula do aluno")
  let nota = prompt("Digite a nota do aluno")

  alunos.push({ matricula: matricula, nota: +nota })

  contador = contador + 1
}

let soma = 0
contador = 0

while (contador < totalAlunos) {
  soma = soma + alunos[contador].nota
  contador = contador + 1
}

let media = soma / totalAlunos

console.log("Média das notas:", media)

contador = 0

console.log("Alunos com nota acima da média (while):")

while (contador < totalAlunos) {
  if (alunos[contador].nota > media) {
    console.log(alunos[contador].matricula)
  }
  contador = contador + 1
}
*/

/*
// usando do...while
let alunos = []
let contador = 0

do {
  let matricula = prompt("Digite a matrícula do aluno")
  let nota = prompt("Digite a nota do aluno")

  alunos.push({ matricula: matricula, nota: +nota })

  contador = contador + 1
} while (contador < totalAlunos)

let soma = 0
contador = 0

do {
  soma = soma + alunos[contador].nota
  contador = contador + 1
} while (contador < totalAlunos)

let media = soma / totalAlunos

console.log("Média das notas:", media)

contador = 0

console.log("Alunos com nota acima da média (do...while):")

do {
  if (alunos[contador].nota > media) {
    console.log(alunos[contador].matricula)
  }
  contador = contador + 1
} while (contador < totalAlunos)
*/

// usando for
let alunos = []

for (let i = 0; i < totalAlunos; i = i + 1) {
  let matricula = prompt("Digite a matrícula do aluno")
  let nota = prompt("Digite a nota do aluno")

  alunos.push({ matricula: matricula, nota: +nota })
}

let soma = 0

for (let i = 0; i < totalAlunos; i = i + 1) {
  soma = soma + alunos[i].nota
}

let media = soma / totalAlunos

console.log("Média das notas:", media)

console.log("Alunos com nota acima da média (for):")

for (let i = 0; i < totalAlunos; i = i + 1) {
  if (alunos[i].nota > media) {
    console.log(alunos[i].matricula)
  }
}
