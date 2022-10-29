var negativoPositivo = []


for (var index = 0; index < 5; index++) {
    negativoPositivo[index] = parseInt(prompt("Digite 5 numeros, pode ser positivo ou negativo"))

    if (negativoPositivo[index] > 0) {
        negativoPositivo[index] = true
    } else {
        negativoPositivo [index] = false
    }

}

console.log(negativoPositivo)
