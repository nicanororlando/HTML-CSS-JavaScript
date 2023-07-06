//  Ejercicio: Crear un sistema que ALMACENE toda la informacion de las materias 
// y las MUESTRE en pantalla de forma ordenada.

// Vamos a simular que estos datos vienen de un servidor.
const materias = [
    {
        materia: "Fisica 1",
        nota: 6
    },{
        materia: "Algebra",
        nota: 8
    },{
        materia: "Analisis de señales y sistemas",
        nota: 7
    },{
        materia: "Informatica",
        nota: 8
    },{
        materia: "Relatividad",
        nota: 4
    },
];

let contenedor = document.querySelector(".materias");

const devolverMateria = (id)=>{
    return new Promise((resolve,reject)=>{
        if(materias[id] == undefined) reject("La materia no existe");
        else {
            //Para simular la consulta al servidor:
            setTimeout(()=>{
                resolve(materias[id])
            },Math.random()*1000);
        }
    });
};
let codigoHTML = "";
const mostrarMaterias = async()=>{
    let timer = console.time();
    for(let i=0;i<materias.length;i++){
        let materia = await devolverMateria(i);
        codigoHTML += `
        <div class="materia">
		    <div class="nombre">${materia.materia}</div>
		    <div class="nota">${materia.nota}</div>
	    </div>`;

        if(i != (materias.length -1)){
            console.info("Tiempo de respuesta acumulado: "); 
            console.timeLog();
        }
    }
    contenedor.innerHTML = codigoHTML;
    console.info("Tiempo de respuesta TOTAL: "); 
    console.timeLog();
};
mostrarMaterias();