var saldo = 1000

var nome
var cpf
var operacao
var valor
var maiorValor
var valorTotal
var mediaValores
var continuar
var quantidade

while (continuar != 2) {
    nome = prompt("Insira seu nome")
    cpf = prompt("Insira seu cpf")
    operacao = prompt("Insira a operação desejada (s para saque e d para depósito")
    valor = prompt("Insira o valor desejado")

    if (valor >= 0) {

        if (valor >= maiorValor) {
            maiorValor = valor
        }

        if (operacao == "s" && valor <= saldo) {
            saldo = saldo - valor
            quantidade++
        } else if (operacao == "s" && valor > saldo) {
            console.log("O valor inserido é maior que o saldo total")
        }

        if (operacao == "d") {
            saldo = saldo + valor
            quantidade++
        }

        valorTotal = valorTotal + valor
        mediaValores = valorTotal / quantidade
    } else {
        console.log("O valor inserido deve ser positivo")
    }

    continuar = prompt("deseja continuar com operação? 1 para continuar e 2 para parar")
}

console.log("O seu saldo total é de: R$ ", saldo)
console.log("O maior valor inserido foi de: R$ ", maiorValor)
console.log("A média de valores inseridos é de: R$ ", mediaValores)