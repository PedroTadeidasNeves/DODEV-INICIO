var valor
var nota100
var nota50
var nota100
var nota5
var moeda1
valor = prompt("Insira um valor: ")
nota100 = Math.floor(valor/100)
valor = valor - nota100 * 100
nota50 = Math.floor(valor/50)
valor = valor - nota50 * 50
nota10 = Math.floor(valor/10)
valor = valor - nota10 * 10
nota5 = Math.floor(valor/5)
valor = valor - nota5 * 5
moeda1 = valor

console.log("Você receberá ", nota100, " notas de  R$100,00", nota50, " notas de R$50,00", nota10, " notas de R$10,00 ", nota5, " notas de R$5,00", moeda1, " moeda de R$1,00")