// FUNCÕES
// 2. DECLARAÇÃO
// Neste exercício, crie a função  dobro tendo como base o exemplo acima. O objetivo é fixar o seu entendimento sobre a estrutura de declaração de uma função.

function dobro (numero) {
    return numero*2;
}

// 3. MAIS FUNÇÕES
// Vamos praticar juntos: escreva agora uma função metade, que pega um número como parâmetro e retorna sua metade.


function metade(numero){
    return numero/2
}


// 4.FAZENDO CONTAS
// Escreva a função multiplicar que receba dois parâmetros, multiplique-os e retorne o resultado da multiplicação

function multiplicar(numero1,numero2){
  return numero1* numero2;
}

// 5.USANDO FUNÇÕES
// Agora pedimos que você declare uma função chamada triploDaSoma() que recebe dois parâmetros. Então você tem que adicionar ambos e retornar três vezes o valor do resultado da soma dos dois parâmetros . Para fazer isso, você já conta (mesmo que não veja declarado) com a função triplo, que recebe um parâmetro e retorna o valor dele multiplicado por três.

function triploDaSoma(num1, num2){
     let resultadoDaSoma = num1 + num2;
     return triplo(resultadoDaSoma)
} 

// 6.FORMULAS E FUNÇÕES
// Vamos criar uma função perimetro que nos diga o perímetro de um círculo quando damos a ele o raio como parâmetro.
// Também a função area que nos dá a área de um círculo quando recebe o raio como parâmetro. 
// Lembre-se de usar o valor de 3.14 no lugar do π 
// Aqui estão as fórmulas necessárias para as funções, além disso, para este exercício iremos considerar que o valor de π é 3.14. perimetro = π * raio * 2; area = π * raio * raio;

function perimetro(raio){
    return 3.14 * raio * 2;
}
function area(raio){
    return 3.14 * raio * raio;

}

// 7.OPERANDO STRINGS
// Vamos testar: Iremos criar uma função chamada tamanhoNomeCompleto, que recebe um nome e um sobrenome como parâmetros, e que irá devolver o tamanho total, contando um espaço extra para separar ambos:

function tamanhoNomeCompleto(nome, sobrenome){
    let nomeCompleto = nome + " " + sobrenome
     return nomeCompleto.length
}


// 8.CRIANDO CARTÕES
// Escreva a função escreverCartao, que recebe como parâmetros um título, um nome e um sobrenome e retorna uma única string como resultado.

function escreverCartao(titulo, nome, sobrenome){
    return titulo + " " + nome + " " + sobrenome

}


// 10.MAIS UMA FUNÇÃO
// Escreva uma função gerarProbabilidade(), que não recebe parâmetros e retorna a porcentagem de probabilidade de chuva, calculada aleatoriamente usando Math.random ().

function gerarProbabilidade(){
    return 100 * Math.random ()
}
