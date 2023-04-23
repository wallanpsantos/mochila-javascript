const form = document.getElementById('novoItem');
const lista = document.getElementById('lista');


function criaElemento(nome, quantidade) {
    const novoItem = document.createElement('li');
    novoItem.classList.add('item')

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = quantidade;

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += nome;

    lista.appendChild(novoItem);
}

function somaElemento(nome, quantidade) {
    const lista = document.getElementById('lista');
    console.log(lista.children[0].lastChild.data) //Output: Camisas
}

form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value);
    somaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value);
})