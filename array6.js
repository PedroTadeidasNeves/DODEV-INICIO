var contador = 4
var array = []  
var arrayAjuda = []

for (var index = 0; index < 5; index++) {
    array[index] = parseInt(prompt("Insira um número"))        
} console.log(array)

for (var index = 0; index < 5; index++) {
    arrayAjuda[contador] = array[index]
    contador--   
}

array = arrayAjuda

console.log(array)


