// 1.La idea es crear codigo HTML dinamico que reciba informacion y la retorne como html. 
// 2.Crear funcion que reciba 4 parametros y retorne la informacion completa en formato HTML.
// 3.Para hacer mas facil podemos hacer un for iterativo con varios elementos y pasarle los parametros
//  a la funcion informacionLlave() con parametros repetitivos.
// 4.Recopilar y crear todo el codigo HTML dentro del for.
// 5.Añadir codigo HTML al container. 
// 6.Editar algunas propiedades para que sea agradable y dinamico.
// 7.Configurar estilos CSS.

alert("puto el q lea")

const container = document.querySelector(".flex-container");
const documentFragment = document.createDocumentFragment();

//  Para retornar la informacion de cada llave en codigo HTML. 
function informacionLlave(name,model,price){
    img = "<img class='llave.png' src='llave.png'>";
    name = `<h2>${name}</h2>`;
    model = `<h3>${model}</h3>`;
    price = `<p>Precio: <b>$${price}</b></p>`;
    return [img,name,model,price];
}

for(let i=0;i<20;i++){
    let randomModel = Math.round(Math.random()*100000);
    let randomPrice = Math.round(Math.random()*10+30); //Para que sea entre $30 y $40 y redondear.   
    let key = informacionLlave(`Key: ${i+1}`,`Model: ${randomModel}`,randomPrice);
    let div = document.createElement("DIV");
    div.addEventListener("click",()=>{
        document.querySelector(".key-data").value = randomModel;
    });
    div.classList.add(`item-${i}`,`flex-item`);
    div.innerHTML = key[0] + key[1] + key[2] + key[3];
    documentFragment.appendChild(div); 
}

function window_mouseout( obj, evt, fn ) {

    if ( obj.addEventListener ) {

        obj.addEventListener( evt, fn, false );
    }
    else if ( obj.attachEvent ) {

        obj.attachEvent( 'on' + evt, fn );
    }
}

container.appendChild(documentFragment);