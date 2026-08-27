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

   // tempo = tempo - 1 rwtira 1 do tempo

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

const numeroSecreto = Math.floor(Math.random()* 10)+1;
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

}while(palpite != numeroSecreto)