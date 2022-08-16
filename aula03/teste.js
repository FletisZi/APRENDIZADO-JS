import start_app from "./aula03.js";

function start(){

    document.body.appendChild(start_app());

    var botao = document.getElementById("botao");
    botao.addEventListener('click',aumentar)
    
}

    function aumentar(){
        var valor = window.document.querySelector('.title');
        valor.style.backgroundColor = "red";
        valor.style.width += 20;

    }
    
document.addEventListener("DOMContentLoaded",start)


