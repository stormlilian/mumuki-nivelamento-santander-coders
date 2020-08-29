// Ciclos

// 2. O computador repete para nós
// Faça uma função chamada imprimirAzul4 que mostre 4 vezes a palavra Azul.

function imprimirAzul4(){
    for(let i = 0; i < 4; i++) {
   console.log("Azul")
}}

// 3. Reforçando o que vimos
// Execute uma função chamada imprimir5vezes5 que mostra no console 5 vezes o número 5.

function imprimir5vezes5(){
    for(let i = 0; i < 5; i++){
   console.log(5)
}}

// 4. Passo a passo
// Sabendo disso, escreva uma função passoAPasso, que imprime 5 vezes o conteúdo de i. Lembre-se de respeitar a estrutura do for. Por exemplo:

 passoAPasso()
"01234"

function passoAPasso(){
    for( i = 0; i < 5; i++) {
   console.log(i)
}}


// 5. Mais um representante
// Execute uma função chamada passandoPor que imprime no console "aqui eu tenho o valor de x" onde x será o valor de i em cada iteração, para cada valor de 0 a 3.


function passandoPor(){
     for(i = 0; i < 4; i++) {
   console.log('aqui eu tenho o valor de ' + i)
    
     }

}

// 6. Par ou ímpar
// Execute uma função chamada passandoPelosPares() que mostra pelo console aqui eu tenho o valor de x para cada valor PAR que percorra i de 0 até e inclusive 6.

// Lembre-se que como vamos passar apenas pelos pares a repetição deve ocorrer 4 vezes, pois o objetivo é imprimir apenas os números pares.



function passandoPelosPares(){
    for (i = 0; i<7; i++){
        if(i%2==0){
            console.log("aqui eu tenho o valor de " + i)
        }
    }

}


// 7. Repetição
// Sabendo isso, escreva uma função imprimirAzul que receba como parâmetro um valor numérico “x” e imprima “Azul” “x” vezes. Por exemplo

//  imprimirAzul(3)
// "AzulAzulAzul"

function imprimirAzul(vezes){
    let quant=4
    for(let i = 0; i < vezes ; i++) {
        console.log("Azul")

    }

}

// 8. Repetição variavel
// escreva uma função somar5MoedasDe25Centavos, que adiciona o valor de 5 moedas de 0,25 centavos e retorna o resultado.



function somar5MoedasDe25Centavos(){
    let total=0;
    for(let i = 0; i < 5; i++){
        total = total + 0.25;
       
    }

     return total

}


// 9. Muitas coxinhas
// escreva uma função somarMoedasDe25(quantidadeDeMoedas), que toma como parâmetro um valor numérico e retorna a soma das moedas de 25 centavos. 



function somarMoedasDe25(quantidadeDeMoedas){
    let total = 0;
    for(let i = 0; i < quantidadeDeMoedas; i++){   total = total + 0.25;
        
    }
    return total




}

// 10. Continuamos mudando
// Defina a função somaDosPares(x) que retorna a soma total de todos os números que são pares, ou seja, divisíveis por 2 obtendo resto 0. Desta forma: 0 + 2 + 4 + 6 + 8 + 10 + ..... X


function somaDosPares(x){

let soma = 0

for(let i = 1; i <= x; i++){
            if (i %2 ==0){

                 soma = soma + i;

                
     }
 } 
return soma;


}

// 11. Somatória
// Defina a função chamada somatoria, que receba como parâmetro um número e retorne a soma dos números antecessores a ele



function somatoria(numero)
{
let soma = 0;

{
 for(let i = 0; i<=(numero+1); i++)
   {

    numero = numero - 1;

    soma = soma + numero;

    }
}

return soma;
}

// 12. Usain Bolt precisa de você!
// crie uma função chamada caloriasDeTrote(), que recebe por parâmetro o número de voltas representado por um valor numérico e retorne a quantidade de calorias que será consumida.


function caloriasDeTrote(voltas){
    let calorias = 0;
    for(let i =1; i<=voltas; i++)
calorias +=5 * i;
    return calorias

}