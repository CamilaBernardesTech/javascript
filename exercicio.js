const notaUm = 7;
const notaDois = 6;
const notaTres = 7;

let media = (notaUm + notaDois + notaTres) / 3;

console.log(media);

if (media < 5) {
    console.log('Reprovado');
} else if (media >= 5 && media <= 7) {
    console.log('Recuperação');
} else {
    console.log('Aprovado');
}