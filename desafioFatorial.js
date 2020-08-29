// Escreva uma função fatorial

function fatorial(numero){
let resultado = numero;
 for(let i = 1; i < numero; i++){
   resultado= resultado * i;
 }
 return resultado;
}