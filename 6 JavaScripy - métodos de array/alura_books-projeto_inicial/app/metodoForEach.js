// section html
const elementoParaInserirLivros = document.getElementById('livros');

const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis');

function exibirOsLivrosNaTela(listaDeLivros) {
    // limpa
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = '';
    elementoParaInserirLivros.innerHTML = '';
    
    // para cada livro dentro da lista de livros
    listaDeLivros.forEach((livro) => {
        // verifica se o livro está disponível 
        //let disponibilidade = verificarDisponibilidadeDoLivro(livro);
        // operador ternário
        let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' :  'livro__imagens indisponivel';

        // inserir cada livro na section "Livros"
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}"
            alt="${livro.alt}" />
        <h2 class="livro__titulo">
            ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
        <div class="tags">
            <span class="tag">${livro.categoria}</span>
        </div>
        </div>`
    })
}