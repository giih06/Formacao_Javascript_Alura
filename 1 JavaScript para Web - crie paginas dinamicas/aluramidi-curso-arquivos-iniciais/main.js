//! função que da play no áudio
function tocaSom (seletorAudio) {
    let elemento = document.querySelector(seletorAudio);    

    if (elemento  && elemento.localName === 'audio' ) {
            elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido');

    }
}

//! constante que armazena a lista de classe tecla
let ListaDeTeclas =  document.querySelectorAll('.tecla');

for(let i=0; i < ListaDeTeclas.length; i++) {

    let tecla = ListaDeTeclas[i];
    let instrumento = tecla.classList[1];
    // template string
    let idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if(evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}  