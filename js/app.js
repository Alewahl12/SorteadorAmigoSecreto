//Funcao para adicionar nome digitado na lista de amigos e mostrar na tela os nomes da lista
function adicionar(){
    let nomePessoa = document.getElementById('nome-amigo').value;
    listaAmigos.push(nomePessoa);

    let listaNomes = document.getElementById('lista-amigos');
    listaNomes.innerHTML += `${nomePessoa} `;

    let limparNomePessoa = document.getElementById('nome-amigo');
    limparNomePessoa.value= '';
}

//Funcao para sortear amigos aleatóriamente e exibir amigos sorteados


//Funcao para reiniciar a lista de amigos secretos


//Funcao para sortear nomes aleatoriamente

let listaAmigos = [];