var idade = []
var alturas = []

var mediaAltura = 0
var qtdAlunos = 0

for (var index = 0; index < 10; index++) {
    idade[index] = parseInt(prompt("Insira uma idade: "))
    alturas[index] = parseFloat(prompt("Insira uma altura: "))
    mediaAltura = mediaAltura + alturas[index]
}

mediaAltura = mediaAltura / 10

for (var index = 0; index < 10; index++) {
    if (idade[index] > 13 && alturas[index] < mediaAltura) {
        qtdAlunos++
    }


}
console.log(qtdAlunos, " alunos são maiores de 13 anos e tem a altura menor que a media geral")
