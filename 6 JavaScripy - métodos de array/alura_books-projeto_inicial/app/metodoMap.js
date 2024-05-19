function aplicarDesconto(livros) {
    const desconto = 0.3;
    livrosComDesconto = livros.map(livro => {

        // faz uma copia de tudo de "livro" mas alterando o preço
        return {...livro, preco: livro.preco - (livro.preco * desconto)} 
    })
    return livrosComDesconto;
}