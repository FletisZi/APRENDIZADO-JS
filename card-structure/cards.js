var Cards = [
    car1 = {
        nome:"Camiseta",
        valor:"299.99",
        imagem:"camiseta.jpg"
    },
    car2 = {
        nome:"ola",
        valor:"299.99",
        imagem:"card1img.jpg"
    },
];


for( var cont=0; cont < Cards.length; cont++){
    let image = document.createElement('img');
    image.setAttribute('src',`${Cards[cont].imagem}`);
    let title = document.createElement('h2');
    let valor = document.createElement('h2');
    valor.textContent = Cards[cont].valor;
    title.textContent = Cards[cont].nome;
    document.body.appendChild(image);
    document.body.appendChild(title);
    document.body.appendChild(valor);
}


console.log(Cards);


