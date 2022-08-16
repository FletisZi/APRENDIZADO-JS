
        function inicia(){
            
            var botao = document.getElementById("btnteste");
            botao.addEventListener("click",adicionar);

            var btnMudarCor = document.getElementById("mudar-cor");
            btnMudarCor.addEventListener("click",mudarCor);
            
            function adicionar(){
                var lista = document.getElementById("lista");
                var texto = document.getElementById("texto").value;
                var li = document.createElement('li');
                li.textContent = texto;

                lista.appendChild(li);

                document.getElementById("texto").value = "";
                document.getElementById("texto").focus();

              


            }
            

            function mudarCor(){
                var lista = document.getElementById("lista");
                if (lista.style.background == "red"){
                    lista.style.background = "white";
                }else{
                    lista.style.background = "red";
                }
            }

        }
        

        document.addEventListener("DOMContentLoaded",inicia);


        