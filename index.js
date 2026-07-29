// 1. Variáveis do personagem
let nomeDoHeroi = "Aragorn";
let classe = "Guerreiro";
let pontosDeVida = 100;

// 2. Função para mostrar a ficha do herói
function exibirFicha() {
  console.log("--- FICHA DO PERSONAGEM ---");
  console.log("Nome: " + nomeDoHeroi);
  console.log("Classe: " + classe);
  console.log("Vida: " + pontosDeVida);
  
  // 3. Condicional para ver o status
  if (pontosDeVida <= 0) {
    console.log("Status: 💀 DERROTADO");
  } else {
    console.log("Status: ❤️ VIVO E PRONTO PARA A BATALHA!");
  }
}

// 4. Função para receber dano
function receberDano(quantidade) {
  pontosDeVida -= quantidade;
  console.log(nomeDoHeroi + " sofreu " + quantidade + " de dano!");
}

// --- SIMULAÇÃO DO JOGO ---
exibirFicha();       
receberDano(40);     
exibirFicha();       
receberDano(70);     
exibirFicha();       
