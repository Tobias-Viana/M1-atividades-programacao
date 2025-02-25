// Valores das notas
var n1 = 7
var n2 = 8
var n3 = 9
// Cálculo da média das notas
var media = (n1 + n2 + n3) / 3
// Comando para mostrar a estrutura do código, contendo as notas e a média final
console.log("Nota 1: " + n1);
console.log("Nota 2: " + n2);
console.log("Nota 3: " + n3);
console.log("Média Final: " + media);
// Comando para saber se com a nota atingida o aluno foi aprovado
if (media >= 7.0){
    console.log ("Parabéns, você foi aprovado com média " + media.toFixed(1));
} else {
    console.log ("Infelizmente, você não foi aprovado. Sua média foi " + media.toFixed(1));
}


