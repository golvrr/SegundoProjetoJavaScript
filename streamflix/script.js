//Document --> Página inteira do meu HTML
// getElementByDD -> Procura pelo atributo id=""

// titulo-filme -> ID que queremos

const elemento = document.getElementById('filme-principal')

console.log(elemento)
console.log(elemento.tagName)


function selecionarPorId() {

    const tituloFilme = document.getElementById('titulo-filme')

    console.log(tituloFilme)
    console.log(tituloFilme.tagName) //H3
    console.log(tituloFilme.textContent) // O conteúdo do H3
    console.log(tituloFilme.id) // titulo-filme


//Adicionei uma classe no elemento.
tituloFilme.classList.add('elemento-selecionado')


}