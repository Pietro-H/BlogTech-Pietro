const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    let curtiu = false;
    botao.addEventListiner("click", botaoClicado)
    function botaoClicado(){
        let texto = botao.querySelector("Span");
        if (curtiu === false){
            texto.textContent++;
            curtiu = true;
        } else {
            texto.textContent--;
            curtiu = false;
        }
    }
});