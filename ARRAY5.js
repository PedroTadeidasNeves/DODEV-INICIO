var array = []
var numero = 0

for (var index = 0; index < 10; index++) {
    array[index] = parseInt(prompt("Insira um numero para o array"))
}
numero = parseInt(prompt("Insira um numero para ser comparado"))

for (var index = 0; index < 10; index++) {
    if (numero == array[index]) {
        console.log("Número: ", numero, " está na posição ", index, " do array")
    }
}