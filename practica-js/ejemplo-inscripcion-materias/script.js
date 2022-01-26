// 1.Crear funcion para preguntarle en que materia se quiere inscribir
// 2.Si ya hay 20 alumnos anotados en la materia negarle la inscripcion
// 3.Si hay menos de 20 alumnos inscribir al usuario y añadirlo a la lista de inscriptos

// Cambio de const a let ya que en la funcion inscripcion modificamos este objeto por lo que no puede ser const.
let materias = {
    fisica: ["profesorFisica","matusalen","alberto","roberto","nabucodonosor"],
    programacion: ["profesorProgramacion","matusalen","roberto"],
    algebra: ["profesorAlgebra","alberto","roberto","mateo"],
    analisis: ["profesorAnalisis","mateo","matusalen","nabucodonosor"]
};

const inscripcion = (alumno)=>{
    let materia = prompt("¿En que materia se quiere inscribir?");
    let alumnos = materias[materia];

    if(alumnos.length >= 4){
        document.write(materias[materia] + "<br>");
        alumnos.push(alumno);
        if(materia == "fisica"){
            materias = {
		        fisica: alumnos,
		        programacion: materias['programacion'],
		        algebra: materias['algebra'],
		        analisis: materias['analisis']
	        }
            document.write(materias[materia] + "<br>");
        }
        else if(materia == "programacion"){
            materias = {
		        fisica: materias['fisica'],
		        programacion: alumnos,
		        algebra: materias['algebra'],
		        analisis: materias['analisis']
	        }
            document.write(materias[materia] + "<br>");
        }
        else if(materia == "algebra"){
            materias = {
		        fisica: materias['fisica'],
		        programacion: materias['programacion'],
		        algebra: alumnos,
		        analisis: materias['analisis']
	        }
            document.write(materias[materia] + "<br>");
        }
        else if(materia == "analisis"){
            materias = {
		        fisica: materias['fisica'],
		        programacion: materias['programacion'],
		        logica: materias['algebra'],
		        analisis: alumnos
	        }
            document.write(materias[materia] + "<br>");
        }
    }
    else{
        document.write(`Lo siento ${alumno} alias <b>maquinola</b>, no hay chance de meterte a ${materia} pa, una lastima. <br><br>`);
    }
}

inscripcion("orlando");
inscripcion("marley");
// inscripcion("mateo");
// inscripcion("messi");
// inscripcion("maradona");