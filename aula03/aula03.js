
export default function start_app(){

   

        let skill = document.createElement('div');
        skill.className = " red";
        let icon = document.createElement('img'); 
        icon.className = "icon";
        icon.setAttribute('src', './teste.jpg');
        let title = document.createElement('div');
        title.className = "title";
        title.textContent = "HTML";  
     
        let barra = document.createElement('div');
        barra.className = "barra";
        let valor = document.createElement('div');
        valor.className = "valor";
        let Sobra = document.createElement('div');
        Sobra.className = "Sobra";


        barra.appendChild(valor);
        barra.appendChild(Sobra);
        
        
        skill.appendChild(icon);
        skill.appendChild(title);
        skill.appendChild(barra);

        


        return skill;
}



//document.addEventListener("DOMContentLoaded",start_app);