// Escreva a função produto

function produto(num) {
let resultado = 1;
   for( i = 0; i < num.length; i++) {
  resultado *= num[i];
     }
   return resultado;
}