//while(true){
//  console.log("Ao infinito e... Além!");
//}

// WHILE (enquanto)
//permite criar loops que são executados zero ou mais vezes.

//Enquanto a condicao for true, executa o bloco de codigo

//CONTADOR QUE EXIBIR NA TELA DE 1 A 5

//contador inicia com o numero 1
/*let contador = 1 

//enquanto o meu contador por menor ou igual a 5, continue.

while ( contador <= 5){

    console.log("Contagem: " + contador)

            //1+1=2
   // contador = (contador + 1)

   contador++ //contador recebe ele + 1

    //contador = 2

}*/

// CONTAGEM REGRESSIVA

/*let tempo = 10

while(tempo > 0){

    console.log(tempo)

   // tempo = tempo - 1 retira 1 do tempo

   tempo-- //retira 1 do tempo

}
console.log("Codigo acabou. ")*/

// VALIDACAO SENHA

/*const senhaCorreta = "148supersenha"
let tentativa = ""

while(tentativa != senhaCorreta){


    tentativa = prompt("Digite a senha:")

    if(tentativa === senhaCorreta){
        console.log("Senha correta! Acesso liberado.")
    }
else{
    console.log("Senha incorreta. Tente novamente.")
}

}*/

/*let soma = 0;
let numero = 1;

while (soma <= 100) {
    numero = Number(prompt("Informe um numero"))
    soma = soma + numero
}

console.log("A soma passou de 100!");
console.log("Soma final:", soma);*/

//DO - WHILE PERMITE CRIAR LOOPS QUE SAO EXECUTADOS 1 OU MAIS VEZES


/*let repetir = false

//FAÇA
do{
    console.log("Só uma vez.")

}while(repetir) //ENQUANTO a condiçao for TRUE

//WHILE vs Do..WHILE

let num=10;

while (num < 5){
    console.log("isso Não vai aparecer.")
}

do{
    console.log("isso VAI aparecer pelo menos 1x")
}while(num < 5)*/

/*const numeroSecreto = Math.floor(Math.random()* 10)+1;
;

let palpite;
let tentativas = 0;

console.log("Adivinhe o numero entre 1 a 10.")

do{

   // alert( Math.floor(Math.random()* 10)+1)

palpite = Number(prompt("Seu palpite"))
tentativas++


if (Number.isNaN(palpite)){
    alert("Digite um número valido.")
}

else if(palpite == numeroSecreto){
    alert( "ACERTOU!!!!" + "Em" + tentativas + "Tentativas")
}

else if (palpite < numeroSecreto){
   alert("Muito baixo! Tente um número maior.")
}
else if (palpite < numeroSecreto){
     alert("Muito Alto! Tente um número menor.")
}

}while(palpite != numeroSecreto)*/

//FOR -> LOOP

//let conta= 0; variavel de controle.

//conta < 10 - analise de condicao

//conta++ o que acontece com a variavel de controle

/*for (let conta= 0; conta <10; conta++ ){
        console.log(conta)
}

console.log("O loop terminou. ")

//TABUADA

const numero = Number(prompt("Tabuada de qual numero?"))

if(Number.isNaN(numero)){
    console.log("Numero invalido.")
}
else{
//console.log(TABUADA DO " + numero)
    console.log(`\n TABUADA DO ${numero} \n`)

    for(let i = 1; i<=10; i++ )
    {
        const resultado = numero * i

console.log(`${numero} x $ {i} = ${resultado}`)

    }



}*/

//Exiba numeros pares de 1 a 20

/*console.log("Numeros pares de 0 a 20: \n`")

for(let pares= 0; pares <=20; pares += 2 ){
    console.log(pares)

}*/

//CONTAGEM REGRESSIVA

/*console.log("Lancamento em: \n`")

for(let conta = 10; conta >= 1; conta--)
{
    console.log(conta + "...")
}

  console.log("Decolar!")*/

//DESAFIO

/*
crie um programa que mostre os numeros de 1 a 3
Cada numero deve aparecer 3 vezes na mesma linha

saida esperada
1 1 1
2 2 2
3 3 3

DICA
use um for para controlar os numeros
e outro para repetir cada numero
*/

/*for (let i = 1; i <= 3; i++) {
   let linha = "";

   for (let i = 1; i <= 3; i++) {
       linha += i;
   if (i < 3) {
           linha += " ";
       }
   }

   console.log(linha);
}*/

//DESENHAR PIRAMIDE DE ASTERISCOs


/*for( let numero = 1; numero <=1; numero++ ){

        for (let vezes = 1; vezes <=1;vezes++ ) {
            
            let resultado = "";

            for (let vezes = 1; vezes <=5; vezes++) {
                resultado += "* "

                console.log(resultado)
                
            }

        }
    }*/

        //1  ATIVIDADE

      /*  for (let numero = 1; numero <= 10; numero++) {
  console.log(numero);
}*/

//2 ATIVIDADE
/*
let numero = Number(prompt("Digite um número:"));

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}

//3 ATIVIDADE

const n = Number(prompt("Digite um número inteiro positivo:"));

let soma = 0;

for (let i = 1; i <= n; i++) {
    soma += i;
}

console.log(soma);

//4 ATIVIDADE

/*for (let i = 2; i <= 50; i += 2) {
  console.log(i);
}*/

//5 ATIVIDADE

/*
let numero = Math.floor(Math.random() * 100) + 1;
let palpite;
let tentativas = 0;

while (palpite != numero) {
    palpite = Number(prompt("Digite um palpite:"));
    tentativas++;

    if (palpite > numero) {
        alert("Palpite " + tentativas + ": o número é menor!");
    } else if (palpite < numero) {
        alert("Palpite " + tentativas + ": o número é maior!");
    } else {
        alert("Parabéns! Você acertou em " + tentativas + " palpites!");
    }
}*/

//6 ATIVIDADE

/*let numero = Number(prompt("Digite um número inteiro:"));

for (let i = numero; i >= 0; i--) {
    console.log(i);
}*/

// 7 ATIVIDADE

/*let numero = Number(prompt("Digite um número inteiro positivo:"));

let soma = 0;

while (numero > 0) {
    soma += numero % 10;
    numero = Math.floor(numero / 10);
}

console.log(soma);*/

// 8 ATIVIDADE

/*let numero = Number(prompt("Digite um número:"));
let fatorial = 1;
let conta = "";

for (let i = numero; i >= 1; i--) {
    fatorial *= i;
    conta += i;

    if (i > 1) {
        conta += " × ";
    }
}

console.log(conta + " = " + fatorial);*/

//9 ATIVIDADE

/*let numero = prompt("Digite um número inteiro positivo:");

let invertido = "";

for (let i = numero.length - 1; i >= 0; i--) {
    invertido += numero[i];
}

console.log(invertido);*/

//10 ATIVIDADE

/*for (let numero = 1; numero <= 1000; numero++) {
    let soma = 0;

    for (let divisor = 1; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            soma += divisor;
        }
    }

    if (soma === numero) {
        console.log(numero);
    }
}*/
