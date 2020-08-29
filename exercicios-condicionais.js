// Condicionais

// Operadores lógicos

// 0. Condicionais

// 2. Que tal se?
// Declara a variavel diaDeSemana que receba uma string "domingo". Depois implemente uma condicional usando o if que compare se diaDeSemana é igual a "domingo", se for verdadeiro imprima uma string "Hoje é dia de futebol!!!".

// Lembre-se que as variaveis e as strings devem ser escritas igual ao enunciado, respeitando os espaços e as exclamações.

let diaDeSemana = "domingo";
if (diaDeSemana == "domingo") {
    console.log("Hoje é dia de futebol! ! !");
    }

// 3. E que tal se não?
// Define a função hojeSeJoga, que receba por parâmetro uma string que informe o día da semana. Esta função deve retornar"Hoje é dia de futebol!!!" se parâmetro for "domingo", caso contrário deve retornar "Hoje não é dia de futebol :(".

// Lembre-se que as variaveis e as strings devem ser escritas igual ao enunciado, respeitando os espaços e as exclamações.

let diaDaSemana = "domingo";
function hojeSeJoga(diaDaSemana){
    if (diaDaSemana == "domingo"){
        return "Hoje é dia de futebol! ! !"
        }
        else {
            return "Hoje não é dia de futebol :("
        }
}


// 4. Qual é maior?
// Defina a função eMaior, que recebe dois números por parâmetro, e retorna o maior entre eles.

let num1 = 2;
let num2 = 6;
function eMaior(num1, num2){
    if (num1>num2){
        return num1
    }
    else {
        return num2
    }
}


// 5. Qual é o seu sinal?
// Portanto, vamos definir a função sinal que recebe um número para alcançar o objetivo desejado. DICA: Lembre-se que você pode precisar usar mais de um if.

function sinal(numero){
    if (numero >= 1)
        return 1
    if (numero == 0)
         return 0
    if (numero < 0) 
        return -1
}

// 6. O número da sorte
// Escreva a função eNumeroDaSorte que, recebendo um número, diz a se é um número da sorte. Lembre-se de que o número deve obedecer às três condições mencionadas. Seu desafio adicional será: NÃO use o if.

function eNumeroDaSorte(numero){
    return numero >=1 && numero!=15 && numero %3 == 0 || numero %2 ==0


}


// 7. Posso ir ao banco?
// Defina a função possoIrAoBanco que, receba dois parâmetros, o primeiro é diaDaSemana (string) e o segundo horaAtual(numero), a função deve retornar true, apenas se o banco estiver aberto.

function possoIrAoBanco(diaDaSemana,horaAtual){
    return diaDaSemana !="Sábado" && diaDaSemana != "Domingo" && horaAtual >=9 && horaAtual<15
}


// 8. O filósofo hipster
// Defina a função filosofoHipster que recebe como parâmetro: a profissão de uma pessoa (string), nacionalidade (string) e o número de quilômetros que ele anda por dia (número). Com esses parâmetros avalie se essa pessoa é ou não (true / false), um filósofo Hipster. Tenha em mente que um filósofo Hipster é um Músico, nascido no Brasil e que gosta de andar mais de 2 quilômetros por dia.

    function filosofoHipster(profissao, nacionalidade, numKm){
        return profissao == "Músico" && nacionalidade == "Brasil" && numKm >= 2


    }


// 9. As tabelas verdade
// Use a função console.log para mostrar os resultados da execução da função filosofoHipster com parâmetros diferentes, pelo menos 3 vezes. A função filosofoHipster já está definida, mesmo que você não a veja, basta chamá-la como no exemplo acima

console.log(filosofoHipster('Docente', 'Canadá', 12))
console.log(filosofoHipster('agiota', 'quixada', 12))
console.log(filosofoHipster('desempregado', 'benfica', 12))

// 11.Um exercício sem precedentes
// Escreva a função podeSeAposentar que recebe por parâmetro a idade, o sexo e os anos de contribuição previdenciária que uma pessoa tem, exemplo:

//  podeSeAposentar(62, "F", 34)
// true
// Tenha em mente que a idade mínima para se aposentar para mulheres é 60 anos, enquanto que para homens é 65. Em ambos os casos, você deve ter pelo menos 30 anos de contribuição.

function podeSeAposentar(idade, sexo, contribuicao){
    return (idade>=60 && sexo== "F" && contribuicao >=30) || (idade>=65 && sexo== "M" && contribuicao >=30)
contribuicao >=30
}

// 12.Nós vamos ao parque de diversões
// Defina a função podeSubir, recebendo 3 parâmetros: alturaPessoa (numero), vemComCompania (booleano), temProblemaCardiaco (booleano), retorne true ou false conforme o caso. Lelet em conta as condições necessárias mencionadas acima


function podeSubir(alturaPessoa, vemComCompania, temProblemaCardiaco){
    return (alturaPessoa >=1.2 && vemComCompania ==true && temProblemaCardiaco ==false) || (alturaPessoa >=1.5 && temProblemaCardiaco ==false)

}


// 13.Agora vamos ter dar um prêmio
// Defina a função medalhaSegundoOPosto que recebe o posto como parâmetro e retorna um texto de acordo com o parâmetro. Dica: nessa função você pode usar vários if.


function medalhaSegundoOPosto(posto){
    if (posto==1){
        return "ouro"
        }

    if (posto==2){
        return "prata"
    }
    if (posto==3){
        return "bronze"
    }  
    if (posto>3){
        return "Continue participando"
    }
    }