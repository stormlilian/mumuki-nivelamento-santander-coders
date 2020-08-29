// Escreva as seguintes funções: 1. acontece, que diz se a aula sucederá de acordo com o array dos estudantes que entraram. 2. aberturas, que utiliza um array com os arrays dos estudantes que entraram nos outros dias, e a quantidade mínima de estudantes, e diga quais os dias em que as aulas aconteceram e quais não


function acontece(alunosDia, quorum) {
   let presentes = 0;
   for(  let i = 0; i < alunosDia.length; i++) {
       if(alunosDia[i] <= 0) {
           presentes++;
   }
   }
   return presentes >= quorum;
}
function aberturas(alunosDia, quorum) {
    let resultado = [ ];
    for(  let i = 0; i < alunosDia.length; i++) {
        resultado.push(acontece(alunosDia[i], quorum));
    }
    return resultado;
}