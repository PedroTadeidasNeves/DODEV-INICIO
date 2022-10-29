//REPETIÇÃO
//PARA DEFINIR A QUANTIDADE DE VEZES QUE IRIAMOS EXECUTAR AQUELA AÇÃO
//Definição da váriavel -> verifica a condição -> Executa o código
// -> vai para o laço e muda a váriavel

var numero = 0;
var maiorNumero=0;
for (var contador = 0; contador < 5; contador++) {
    numero = parseInt (prompt("Digite  numero"))

    if(numero >= maiorNumero){
        maiorNumero = numero
    }
}
console.log("O maior número é: ", maiorNumero)