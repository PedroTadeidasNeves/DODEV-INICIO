var array = []
var arrayPares = []
var arrayImpares = []
var indexPares = 0
var indexImpares = 0

for (var index = 0; index < 10; index++) {
    array[index] = parseInt(prompt("Insira um numero: "))
    if (array[index] % 2 == 0) {
        arrayPares[indexPares] = array[index]
        indexPares++
    } else {
        arrayImpares[indexImpares] = array[index]
        indexImpares++
    }

}

console.log(array)
console.log(arrayPares)
console.log(arrayImpares)
