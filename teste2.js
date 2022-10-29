var nome;
var idade;
nome = prompt("Digite seu nome: ")
idade = prompt("Digite sua idade: ")
var AnoNascimento = 2022 - idade
var idadeParOuImpar
var anoNascParOuImpar;

if(idade % 2 == 0 ){
    idadeParOuImpar = "PAR"
} else{
    idadeParOuImpar = "IMPAR"
}

if(anoNascParOuImpar % 2 == 0){
    anoNascParOuImpar = "PAR"
} else {
    anoNascParOuImpar = "IMPAR"
}

console.log (
  "Olá " +
     nome + 
     " você têm " +
     idade +
      " anos que é um número " +
     idadeParOuImpar +
     " e nasceu no ano " +
      AnoNascimento +
       " que é um número " +
        anoNascParOuImpar
);
if(idade >= 18) {
    console.log("Esta liberado o consumo de bebidas alcoolicas")
}