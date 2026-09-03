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

/*let alunos = [
 { nome: "Guilherme", nota: 10 },
    { nome: "Boneco", nota: 6 },
   { nome: "Juliao", nota: 9 },
    { nome: "Ferreira", nota: 7 }
];

for (let aluno of alunos) {
 if (aluno.nota < 7) {
        continue;
    }
     console.log(aluno.nome + " - " + aluno.nota);
}*/

//Faça um programa que apresente o menu de opções a seguir, 
// que permita ao usuário escolher a opção desejada, 
// receba os dados necessários para executar a operação e mostre o resultado. 
// Verificar a possibilidade de opção inválida e não se preocupar com as restrições, 
// como salário inválido.

// Menu de opções:

// - Novo salário
// - Férias
// - Décimo terceiro
// - Sair


/*let opcao = 0

while(opcao != 4){


opcao =  Number(prompt("MENU DE OPCOES \n" +
             "1. Novo salário. \n" +
             "2. Férias \n" +
             "3. Décimo terceiro \n" +
             "4. Sair \n" 
            ))


if(opcao === 1 ){

       let salario = Number(prompt("Digite o salário do funcionario"))
       let aumento;
       let novoSalario;
 
       if (salario <= 350)
            aumento = salario * 0.15
       else if  (salario <= 600)
            aumento = salario * 0.10
        else 
            aumento  = salario * 0.05

      novoSalario = salario + aumento

      console.log("Novo salário: " + novoSalario.toFixed(2))
}


else if (opcao == 2 ){
        
    let salario = Number(prompt("Digite o salário do funcionario"))
    let ferias;

    ferias = salario + (salario/2)
    console.log("Valor das férias: " + ferias.toFixed(2))
}

else if (opcao == 3){

        let salario = Number(prompt("Digite o salário do funcionario"))
        let meses = Number(prompt("Digite o numero de meses trabalhado"))
        let decimoTerceiro;

         decimoTerceiro = (salario * meses) / 12


        console.log("Valor das férias: " + ferias.toFixed(2))
}
else if (opcao == 4){
      
             alert("Programa encerrado!")     
}

else{

        alert("Opcao inválida! Digite uma opca de 1 a 4")
}  


}*/




   


