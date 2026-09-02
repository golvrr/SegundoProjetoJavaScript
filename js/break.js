/* const numeros = [5, 12, 8, 3, 19, 7, 25]
const procurado = 19

for (const num of numeros){
    console.log("Numero analisado: " + num)
    if (num === procurado){
        console.log("Encontrado")
        break; 
    }
}

console.log("Loop terminou.")

console.log("Numeros Impares de 1 a 10")

for( let numero = 1;numero <= 10; numero++){
    if(numero %2 == 0){
        continue;
    }
    console.log(numero)
}

const nomes = ["Guilherme", "Boneco", "Ferreira", "Moreno"]

nomes.reverse()

console.log ( nomes) */

//EXERCICIO BREAK

let alunos = [
 { nome: "Guilherme", nota: 10 },
    { nome: "Boneco", nota: 6 },
   { nome: "Juliao", nota: 9 },
    { nome: "Pedro", nota: 7 }
];

for (let aluno of alunos) {
 if (aluno.nota < 7) {
        continue;
    }
     console.log(aluno.nome + " - " + aluno.nota);
}