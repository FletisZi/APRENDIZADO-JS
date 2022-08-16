

function start_app(){

    var DespesaTotal =0.0;
    var ReceitaTotal = 0.0;

    var btndispesa = document.getElementById("btnDespesa");
    btndispesa.addEventListener("click",adicionarDispesa);

    var btndispesa = document.getElementById("btnReceita");
    btndispesa.addEventListener("click",adicionarReceita);

    function adicionarDispesa(){

        let ContainerDespesa = document.getElementById("containerDispesa"); 

        let Descriçao = document.getElementById("txtDescricaoDespesa").value;
        var valor = document.getElementById("txtValorDespesa").value;
        let Lista = document.getElementById("listDespesa");

        let Item = document.createElement("li");
        Item.textContent = Descriçao+" R$"+ valor;

        Lista.appendChild(Item);
        DespesaTotal += parseFloat(valor);
        

        document.getElementById("txtDescricaoDespesa").value = "";
        document.getElementById("txtDescricaoDespesa").focus();
        document.getElementById("txtValorDespesa").value = "";

        var total = document.getElementById("totalDespesa");
        total.textContent = "Total "+DespesaTotal;
        
        OrcamentoTotal(DespesaTotal,ReceitaTotal);

    }

    function adicionarReceita(){
        
        var ContainerReceita = document.getElementById("ContainerReceita");

        let Descriçao = document.getElementById("txtDescricaoReceita").value;
        let valor = document.getElementById("txtValorReceita").value;
        let Lista = document.getElementById("listReceita");
        let Item = document.createElement("li");
        Item.textContent = Descriçao+" R$"+ valor;
        Lista.appendChild(Item);
        ReceitaTotal += parseFloat(valor);

        document.getElementById("txtDescricaoReceita").value = "";
        document.getElementById("txtDescricaoReceita").focus();
        document.getElementById("txtValorReceita").value = "";

        var total = document.getElementById("totalReceita");
        total.textContent = "Total "+ReceitaTotal;

        OrcamentoTotal(DespesaTotal,ReceitaTotal);
      
    }

    function OrcamentoTotal (despesa, receita){
        let total = receita - despesa;

        let lblTotal = document.getElementById('total');
        lblTotal.textContent = "Total "+total;
    }





    }

    document.addEventListener("DOMContentLoaded",start_app);