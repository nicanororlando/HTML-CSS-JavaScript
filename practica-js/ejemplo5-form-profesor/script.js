//Creamos array de objetos.
let students = [{
    nombre: "Canorr",
    mail: "nicanororlando@gmail.com",
    materia: "Fisica 3"
},{
    nombre: "Marcelo",
    mail: "marcelo@gmail.com",
    materia: "Fisica 1"
},{
    nombre: "Matusalen",
    mail: "matusalen@gmail.com",
    materia: "Algebra"
},{
    nombre: "Nabucodonosor",
    mail: "nabucodonosor@gmail.com",
    materia: "Fisica 3"
},{
    nombre: "Messi",
    mail: "messientoganador@gmail.com",
    materia: "Analisis matematico"
}]; 
console.log(students);

const container = document.querySelector(".grid-container");
const button = document.querySelector(".confirm-button");
let htmlCode = "";

for(student in students){ 
    let name = students[student]["nombre"];
    let mail = students[student]["mail"];
    let subject = students[student]["materia"];
    htmlCode += `
                <div class="grid-item nombre">${name}</div>
                    <div class="grid-item email">${mail}</div>
                    <div class="grid-item materia">${subject}</div>
                    <div class="grid-item semana">
                        <select class="semana-elegida">
                            <option value="1">Semana 1</option>
                            <option value="2">Semana 2</option>
                        </select>
                </div>`;
}
//En vez de agregar el html al contenedor 1 por uno lo agregamos todo junto, y asi 
//el DOM no tiene que reestablecer su valor constantemente y optimizamos recursos.
container.innerHTML = htmlCode; 

button.addEventListener("click", ()=>{
    let confirmar = confirm("¿Realmente quieres confirmar las mesas?");
    if (confirmar){
        document.body.removeChild(button);
        let elements = document.querySelectorAll(".semana");
        let choosenWeeks = document.querySelectorAll(".semana-elegida");
        for(element in elements){
            let week = elements[element];
            week.innerHTML = choosenWeeks[element].value;
        }
    }
});

