// Escreva a função maisMenos

function maisMenos(numeros) {
 let quantidade = numeros.length
 let positivos = 0;
 let zeros = 0;
 let negativos = 0;
 let i = 0;
 for (let i = 0; i < quantidade; i++) {
  if (numeros[i] < 0) {
    negativos = negativos + 1;  
  } else if (numeros[i] > 0) {
    positivos = positivos + 1;  
  } else {
    zeros = zeros + 1;  
  }
 }
 positivos = positivos / quantidade;
 zeros = zeros / quantidade;
 negativos = negativos / quantidade;
 let total = [positivos, zeros, negativos];
 return total;
}