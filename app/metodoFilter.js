// const btnFiltrarLivrosDeFront = document.getElementById('btnFiltrarLivrosFront')
// btnFiltrarLivrosDeFront.addEventListener('click', filtrarLivrosDeFront)

// function filtrarLivrosDeFront() {
//     let livrosFiltrados = livros.filter(livro => livro.categoria == 'front-end')
//     console.table(livrosFiltrados)
// }

const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : FiltrarPorCategoria(categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
    if (categoria == 'disponivel') {
        exibirValorTotalDosLivrosDisponiveisNaTela()
    }
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function FiltrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function exibirValorTotalDosLivrosDisponiveisNaTela() {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">199,00</span></p>
    </div> 
    `
}