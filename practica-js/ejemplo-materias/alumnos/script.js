// /* SHIFT+ALT+A PARA COMENTAR TODO
// CTRL+K+C PARA COMENTAR LINEAS */

// Que tengo que hacer?
// 1. crear un objeto que tenga arrays de materias con alumnos y profesores
// 2. crear una funcion que nos devuelva los alumnos dentro de una materia y suprimir el primer elemento
// 3. guardar el primer elemento que es el profesor
// 4. crear una funcion para mostrar la mostrarInformacion
// 5. crear otra funcion que reciba como parametro el nombre de un alumno para revisar en cuantas clases esta

//1.Creo un objeto materias luego acceder por el nombre y poder obtener los alumnos.
const materias = {
    fisica: ["profesorFisica","matusalen","alberto","roberto","nabucodonosor"],
    programacion: ["profesorProgramacion","matusalen","roberto"],
    algebra: ["profesorAlgebra","alberto","roberto","mateo"],
    analisis: ["profesorAnalisis","mateo","matusalen","nabucodonosor"]
};
const obtenerInformacion = (materia)=>{
    if(materias[materia] !== undefined){
        return materias[materia];
    }
    else{
        return materias;
    }
};

const obtenerClases = (alumno)=>{
    // let informacion = obtenerInformacion();
    let cantidad = 0;
    let nombreDeClases = [];
    for(materia in materias){
        if(materias[materia].includes(alumno)){
            //Como materia nos dice la posicion en el objeto materias, tambien nos dice el nombre de la materia.
            //Entonces al recorrer cada materia si pasa el if, añadimos ese nombre al nuevo array.
            nombreDeClases.push(" " + materia);
            cantidad++;
        }   
    }
    if(cantidad == 0){
        return `El alumno no se encuentra anotado a ninguna materia`;
    }
    else{ 
        return `<b style='color: blue'>${alumno}</b> esta en <b>${cantidad}</b> clases: 
        <b style='color: red'>${nombreDeClases}.</b>`;
    }
}

//Funcion para validar y mostrar bien la informacion.
const mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);
    let profesor = informacion.shift();
    let alumno = informacion;

    document.write(profesor + "<br>");
    document.write(alumno + "<br><br>");
}

mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("algebra");

document.write("<br><br>" + obtenerClases("matusalen") + "<br><br>");
document.write(obtenerClases("nabucodonosor") + "<br><br>");
document.write(obtenerClases("falso") + "<br><br>");