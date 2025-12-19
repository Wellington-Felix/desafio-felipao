// Variavel com uma lista de heróis
let herois = [
  { nome: "Art", xp: 750 },
  { nome: "Well", xp: 1900 },
  { nome: "Ali", xp: 4980 },
  { nome: "Home", xp: 6950 },
  { nome: "Lion", xp: 7500 },
  { nome: "Delta", xp: 8200},
  { nome: "Omega", xp: 9890},
  { nome: "Zeus", xp: 12000}
]

// Utilizando o for como laço de repetição para verificar os herois
for (let i = 0; i < herois.length; i++) {
  let nivel = ""
  let xp = herois[i].xp

  // Estrutura de decisão utilizada para verificar os niveis dos herois
  if (xp < 1000) {
    nivel = "Ferro"
  } else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze"
  } else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata"
  } else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro"
  } else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina"
  } else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente"
  } else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal"
  } else {
    nivel = "Radiante"
  }

  // Mensagem de saida
  console.log(`O Herói de nome ${herois[i].nome} está no nível de ${nivel}`)
}
