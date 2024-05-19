// esse arquivo irá realizar as requisições para a api

let livros = [];

// faz a requisição da api
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'; 
getBuscarLivrosDaAPI() // chama a função

// busca os livros da api
async function getBuscarLivrosDaAPI() {
    const resposta = await fetch(endpointDaAPI); // realiza a requisição 

    // a resposta da requisição é atribuida a livros e transformada em json
    livros = await resposta.json()
    livros = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livrosComDesconto)
}


