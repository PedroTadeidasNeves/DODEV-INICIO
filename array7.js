var array = []
var arrayAjuda = []
var quantidade = parseint(prompt("Quantos numeros deseja inserir?"))
var contador = quantidade - 1

for (var index = 0; index < quantidade; index++) {
   array[index] = parseInt(prompt("Insira um numero"))     
} console.log(array)

for (let index = 0; index < quantidade; index++) {
    arrayAjuda[contador] = array[index]
    contador--    
}

array = arrayAjuda
console.log(array)