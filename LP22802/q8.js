let pokemao = {
  nome: "Pikachu",
  hp: 20,
  ataque: Math.floor(Math.random() * 3) + 1,
  level: 1,
  vitorias: 0,
  derrotas: 0,
  hpInicial: 20,
  ataqueInicial: Math.floor(Math.random() * 3) + 1,
}

function batalhar() {
  let inimigo = { hp: Math.floor(Math.random() * 6) + 5, ataque: Math.floor(Math.random() * 5) }
  console.log("\nBatalha contra inimigo (HP:", inimigo.hp, "Ataque:", inimigo.ataque, ")")
  
  let pokeHP = pokemao.hp, inimigoHP = inimigo.hp
  while (pokeHP > 0 && inimigoHP > 0) {
    inimigoHP -= pokemao.ataque
    if (inimigoHP <= 0) break
    pokeHP -= inimigo.ataque
  }

  if (pokeHP > 0) {
    pokemao.vitorias++
    let atributo = prompt("Escolha 'hp' ou 'ataque' para melhorar:")
    if (atributo === "hp") pokemao.hp += 3
    if (atributo === "ataque") pokemao.ataque++
    console.log("\nPokemão venceu!")
  } else {
    pokemao.derrotas++
    console.log("\nPokemão perdeu!")
  }
}

function listarObjeto() {
  console.log("\nInicial:", pokemao.hpInicial, pokemao.ataqueInicial)
  console.log("Atual:", pokemao.hp, pokemao.ataque, pokemao.vitorias, pokemao.derrotas)
}

while (true) {
  let opcao = prompt("\n1) Batalhar\n2) Vitórias vs Derrotas\n3) Listar Objeto\n4) Sair")
  if (opcao === "1") batalhar()
  if (opcao === "2") console.log("\nVitórias:", pokemao.vitorias, "Derrotas:", pokemao.derrotas)
  if (opcao === "3") listarObjeto()
  if (opcao === "4") break
  if (!["1", "2", "3", "4"].includes(opcao)) console.log("Opção inválida.")
}
