/* //ARRAY
// UM ARRAY E UM TIPO DE DADOS QUE SERVE PARA ARMAZENAR MAIS DE UM VALOR EM UMA UNICA VARIAVEL. 
// ELES SAO REPRESENTADOS POR COLCHETES [] E SEUS ELEMENTOS SAO SEPARADOS POR VIRGULA.

//ITENS COMECAM DO NUMERO ZERO.

const numeros = [1, 2, 3, 4, 5]
const nomes = ["Lucas", "Joao", "Maria", "Jose"]

//na minha lista de numeros
//eu quero a posicao zero

console.log(numeros[0])

console.log(nomes[0])

//LEGTH
//É uma propriedade para obter o comprimento de uma array

console.log(nomes.length)

//Vamos percorrer toda esta linha e colocar no console cada item.
for (let i = 0; i < nomes.length; i++){
    console.log(nomes[i])
}

//FOR OF

const frutas = ["maçã", "Laranja", "Uva", "Morango"]

for (const fruta of frutas){
    console.log(frutas)
    }

    const listaNumeros = [10,25,8,42,15,7]

    let soma = 0;

    for ( const numero of listaNumeros ){
        soma += numero

    }

    console.log("Numeros  ", listaNumeros)
    console.log("Soma ", soma)


    const notas = [7.5, 9.0, 6.5, 8.8, 10,0, 5.5]

    let maiorNota = listaNota[0]

    for (const nota of listaNota){
        if(nota > maiorNota)
            maiorNota = nota
    }

    console.log("Maior nota:" + maiorNota)
 */

    /*const pessoa = {
        nome: "Guilherme",
        idade: "16",
        email: "email@teste.com",
        genero:"M",
        cpf:"100.016.620-15"
    }

    console.log(pessoa)
    console.log(pessoa.nome)
    console.log(pessoa["idade"])

    for(const chave in pessoa) {

        console.log(pessoa[chave])
    }*/

    /*const aluno = {

        nome: "Gordo",
        matricula: "2026",
        curso: "JavaScript",
        nota: 10
    }
    console.log ("Dados do aluno:\n")

    for ( const chave in aluno){
        const valor = aluno [chave]
        console.log("Chave: " + chave + "valor " + valor)
    }*/

        // CLASSROOM LANCHONETE

    let pedidos = [
    {nome: "X-Burguer", preco: 27, quantidade: 2},
        {nome: "Batata", preco: 12, quantidade: 3},
  {nome: "Refri", preco: 9, quantidade: 2},
    {nome: "Pizza", preco: 47, quantidade: 1}
];

let total = 0;
let maior = 0;

for (let item of pedidos) {
  let valor = item.preco * item.quantidade;

  console.log(item.nome, valor);

  total += valor;

  if (valor > maior) {
    maior = valor;
  }
}

console.log("Total:", total);
console.log("Maior valor:", maior);
