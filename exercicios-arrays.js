// Adicionando itens
// Crie uma variavel do tipo array chamada pertences que contém as strings "espada","escudo","crossbow" e imprima o array utilizando o console.log.

// Utilize o método push para adicionar a string "cross", após adicionar a string imprima o array novamente com o console.log.

let pertences = ["espada", "escudo", "crossbow"];
console.log(pertences)
pertences.push("cross")
console.log(pertences)


// 8.Mover
// Declarar uma função chamada “mover”, que recebe dois arrays, remove o último elemento do primeiro e adiciona-o ao segundo.

let umAr = [1,2]
let doisAr = [3,4]
function mover(umAr, doisAr){
    (umAr.pop)
    (doisAr.push(2))
}

// 10. Contém
// Escreva a função contem(array, numero) que nos diz se um array contém um determinado elemento.

function contem(array, numero){

 if (array.indexOf(numero) != -1){

   return true

 }

 else {

   return false

 }

}

// 12. Mais prêmios
// Escreva a função “medalhaDeAcordoComPosto(numero)”, que recebe um número como parâmetro

let medalha = ["ouro","prata","bronze","nada","nada"];
function medalhaDeAcordoComPosto(numero){
if( numero >= medalha.length+1 ){
 return "nada";
 }else{
return medalha[numero-1];
}
}
console.log(medalhaDeAcordoComPosto(1))

// 15.Soma, terceira parte
// Você começa a ver um padrão? Tente escrever lucroTotal4 que funciona para 4 itens.

function lucroTotal4(umPeriodo) {
  let soma = 0;
  soma = soma + umPeriodo[0];
  soma = soma + umPeriodo[1];
  soma = soma + umPeriodo[2];
  soma = soma + umPeriodo[3];
  return soma ;
}

// 16.Soma, quarta parte
function lucroTotal(umPeriodo) {
  let soma= 0;
  let mes = 0;
  for (let i=0; i<umPeriodo.length; i++) {
    mes = umPeriodo[i];
    soma= soma+ mes;
  }
  return soma;
}
console.log(lucroTotal([]))
console.log(lucroTotal([100]))
console.log(lucroTotal([100, 2]))
console.log(lucroTotal([2, 10, -20]))
console.log(lucroTotal([2, 10, -20, 0, 0, 10, 10]))

  // 18.Contagens
  // Complete a função quantidadeDeMesesComLucro

function quantidadeDeMesesComLucro(umPeriodo){
   let quantidade = 0;
   for(let mes = 0; mes < umPeriodo.length; mes++){
       if(umPeriodo[mes] > 0)
           quantidade += 1;
   }
   return quantidade;
}
  
// 19.Mais contagens
// Escreva a função quantidadeDeMesesComPerda

function quantidadeDeMesesComPerda(periodo){
let quantidade= 0;
for (let mes=0; mes< periodo.length; mes++){
if(periodo[mes] < 0)
quantidade += 1;
}
return quantidade;
}

// 20.Filtrados
// Escreva a função saldoDeMesesComLucro

function saldoDeMesesComLucro(umPeriodo) {
 let saldo = [];
 for (let mes = 0; mes < umPeriodo.length; mes++) {
   if(umPeriodo[mes] > 0){
     saldo.push(umPeriodo[mes]);
   }
 }
 return saldo;
}


// 21.Naipe de truco
// escreva a função naipeDeTruco

function naipeDeTruco(naipe){
 let cartas =[];
 for (let i = 1; i <= 12; i++){
   if(i != 8 && i != 9){
     cartas.push([i]+" "+"de"+" "+ naipe);
   }
 }
 return cartas
}