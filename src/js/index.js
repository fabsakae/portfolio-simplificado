/*objetivo 1 - quando o usuario clicar no botao 
 // objetivo 2 - esconder o botao mostrar mais
    // passo 1 -  pegar o botao e esconde lo
*/
// passo 1 -  pegar o botao mostrar mais no js para poder verificar quando o ususario clicar em cima dele
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo');

botaoMostrarProjetos.addEventListener('click', () => {
    // passo 3 - adicionaer a classe ativo nos projetos escondidos
    mostrarMaisProjetos();
    esconderBotao();
})

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');

    });
}
