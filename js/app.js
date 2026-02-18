//Funcao para adicionar nome digitado na lista de amigos e mostrar na tela os nomes da lista
function adicionar(){
    let nomePessoa = document.getElementById('nome-amigo').value;

    if (nomePessoa === ''){
        alert('Você precisa informar um nome!!!');
        return;
    }

    listaAmigos.push(nomePessoa);

    let listaNomes = document.getElementById('lista-amigos');
    listaNomes.innerHTML += `${nomePessoa} `;

    let limparNomePessoa = document.getElementById('nome-amigo');
    limparNomePessoa.value= '';
}

//Funcao para sortear amigos aleatóriamente e exibir amigos sorteados
function sortear(){
    if (listaAmigos.length < 2){
        alert('Precisa de pelo menos 2 pessoas para realizar o sorteio!!!');
        return;
    }
    let exibirSorteio = document.getElementById('lista-sorteio');
    exibirSorteio.innerHTML = '';
    let listaEmbaralhada = shuffle(listaAmigos);
    for(let i = 0; i< listaAmigos.length; i++){
        exibirSorteio.innerHTML += i==(listaAmigos.length-1) ? `${listaEmbaralhada[i]} -> ${listaEmbaralhada[0]}<br>`:`${listaEmbaralhada[i]} -> ${listaEmbaralhada[i+1]}<br>`;
    }
}

//Funcao para reiniciar a lista de amigos secretos
function reiniciar(){
    let limparNomePessoa = document.getElementById('nome-amigo');
    let limparListaNomes = document.getElementById('lista-amigos');
    let limparExibirSorteio = document.getElementById('lista-sorteio');
    
    limparNomePessoa.value = '';
    limparListaNomes.innerHTML = '';
    limparExibirSorteio.innerHTML = '';

    listaAmigos = [];

}

//Algoritimo de Fisher-Yates para embaralhar um array (faz um swap entre a posicao i do array e a posicao j do array sendo j gerado aleatoriamente)
function shuffle(array){
    for (let i = (array.length-1); i > 0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let listaAmigos = [];