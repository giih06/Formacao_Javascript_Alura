import { conectaApi } from "./conectaApi.js";
const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento) {
    evento.preventDefault(); // previne que a formação padrão par ao envio de formulário aconteça ( recarrega a pagina)

    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random * 10).toString(); // .random pega um numero entre 0 e 1. .floor arredonda o número com base no valor menor
    try {
        await conectaApi.criaVideo(titulo, descricao, url, imagem);

        window.location.href = "../pages/envio-concluido.html";
    } catch (e) {
        alert(e);
    }
}

formulario.addEventListener("submit", evento => criarVideo(evento));