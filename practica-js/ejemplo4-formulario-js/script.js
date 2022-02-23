const nombre = document.getElementById("nombre");
const mail = document.getElementById("mail");
const materia = document.getElementById("materia");
const boton = document.getElementById("btn-enviar");
const resultado = document.querySelector(".resultado");

boton.addEventListener("click", (e)=>{
    e.preventDefault(); //Para que la pagina no se actualize cuando se apriete el boton.
    let error = validarCampos();
    if(error[0]){
        resultado.innerHTML = error[1];
        resultado.classList.add("red");
    } else {
        resultado.innerHTML = "Solicitud enviada correctamente";
        resultado.classList.add("green");
        resultado.classList.remove("red");
    }
});

const validarCampos = ()=>{
    let error = [];
    if(nombre.value.length < 5){
        error[0] = true;
        error[1] = "El nombre no puede contener menos de 5 letras";
        return error;
    } else if(nombre.value.length > 40){
        error[0] = true;
        error[1] = "El nombre no puede contener mas de 40 letras";
        return error;
    } else if(  mail.value.length < 5 ||
                mail.value.length > 40 ||
                mail.value.indexOf("@") == -1||
                mail.value.indexOf(".") == -1){
        error[0] = true;
        error[1] = "El Mail es invalido";
        return error;
    } else if(materia.value.length < 4 || materia.value.length > 40){
        error[0] = true;
        error[1] = "La materia es invalida";
        return error;
    }
    error[0] = false;
    return error;
};