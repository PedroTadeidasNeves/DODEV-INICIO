var fibonacci = []
var numero = parseInt(prompt("Insira um numero"))
console.log("Numero inserido", numero)

fibonacci[0] = numero - 1
fibonacci[1] = numero

for (var index = 2; index < 10; index++) {
    fibonacci[index] = fibonacci[index - 1] + fibonacci[index - 2]
}
console.log(fibonacci)