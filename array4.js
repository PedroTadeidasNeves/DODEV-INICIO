var arrayA = []
var arrayB = []
var arrayC = []
var indexC = 0


for (var index = 0; index < 10; index++) {
    arrayA[index] = parseInt(prompt("Insira um numero: "))
    arrayB[index] = parseInt(prompt("Insira um numero: "))
}

for (var indexA = 0; indexA < 10; indexA++) {
    for (var indexB = 0; indexB < 10; indexB++) {
        if (arrayA[indexA] == arrayB[indexB] && arrayA[indexA] > 5) {
            arrayC[indexC] = arrayA[indexA]
        }


    }


}

console.log(arrayA)
console.log(arrayB)
console.log(arrayC)