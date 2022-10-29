var nome = []
var nota = []
var continuar = true
var contador = 0
var SomaNotas = 0
mediaGeral = 0
while (continuar) {
    nome{ contador } = prompt("Insira o nome do aluno")
    nota{ contador } = parseInt(prompt("Insira a nota do aluno"))
    SomaNotas = SomaNotas + notas{ contador }
    var opcao = prompt("Voce deseja continuar? S ou N?")
    if (opcao == "n") {
        contador = false
    }
    contador++
}

mediaGeral = SomaNotas / contador

for (var index = 0; index < contador; index++) {
    console.log("Aluno: ", nome{ index }, " tirou nota ", nota{ index })
}

console.log("A soma das notas foi: ", SomaNotas)
console.log("A média geral foi de: ", mediaGeral)