//Linguagem Interpretada
//Node.js
//Tipagem Fraca

//console.log(Number("123"));
//console.log(parseInt("10.9"));
//console.log(parseFloat("10.9"));
//console.log(String(12));
//console.log(Boolean(0));
//console.log(Boolean(1));
//console.log(Booleanlean(""));
//console.log(Boolean("Oi"));

//Condicionais (if, else, operadores lógicos)
//const nome = "Ferreira";
//var 
//let nome2 = 
//const chovendo = true;
//const solApareceu = false;

//console.log(typeof chovendo)

//const idade = 20;
//if (idade >=20 ){
//    console.log("Maior de Idade")
//}

//const idade = 12;

//if(idade >=18){
//    console.log("Você é Maior de Idade")
//}else{
//    console.log("Você é Menor de Idade")
//}

//const idade = Number(prompt("Digite a sua idade:"))
// if (idade >= 18){
//    console.log("Você é pode dirigir")
// } else{
//    console.log("Você não pode dirigir")
// }

//const idade = 20;
//const temDocumento = true;
//const estaLista = true;

//if (idade >= 18 && temDocumento && estaLista) {
//    console.log("Pode Entrar!!!")
//} else {
//   console.log("Acesso Negado!!!")
//}

//const temDinheiro = false;
//const temCartao = true;
//const temPix = false;

//if (temDinheiro || temCartao || temPix) {
//    console.log("Pode comprar um lanche")
//} else {
//    console.log("Não pode comprar nada")
//}

//const usuario = "admin";
//const senha = "1234";

//const senhaCorreta = (senha === "1234");
//const ehAdmin = (usuario === "admin");
//const ehGerente = (usuario === "gerente");

//if ((ehAdmin && senhaCorreta) || (ehGerente && senhaCorreta)) {
//    console.log("Acesso Liberado")
//} else {
//    console.log ("Acesso Negado!")
//}

//if ((ehAdmin || ehGerente) && senhaCorreta){

//} else {

//}

//const usuario = prompt("Usuário:");
//const senha = prompt("Senha:");

//const acessoAdmin = (usuario === "Ferreira" && senha === "12");
//const acessoUser = (usuario === "user" && senha === "senha1234");

//if (acessoAdmin || acessoUser) {
//    console.log("Acesso Liberado!")
//} else {
//    console.log("Acesso Negado!")
//}

//const nota = 75;

//if (nota >= 80) {
//    console.log("Aprovado!");
//} else if (nota >= 60) {
//    console.log("Recuperação");
//} else {
//    console.log("Reprovado!");
//}

//const temp = prompt("Qual a temperatura?")

//if (temp < 0) {
//    console.log("Muito Frio");
//} else (temp > 0 || temp < 15); {
//    console.log("Frio");
//} else if (temp > 16 || temp < 25) {
//    console.log("Agradável");
//} else if (temp > 26 || temp < 35) {
//    console.log("Quente");
//} else {
//    console.log("Muito Quente");
//}

const temp = Number(prompt("Temperatura atual (°C):"));

if(Number.isNaN(temp)){
    console.log("Temperatura inválida!!")
}