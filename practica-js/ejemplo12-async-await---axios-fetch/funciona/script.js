// https://reqres.in/api/users?page=2
// https://reqres.in/api/users

const divResultado = document.querySelector(".resultado");
const fragmento = document.createDocumentFragment();

const getName = async()=>{
    try {
    // solicitod tendra una promesa encapsulada
    let solicitud = await fetch("https://reres.in/api/users?page=2");

    // para desencapsular la promesa:
    let resultado = await solicitud.json();
    console.log(resultado.data);

    divResultado.removeAttribute("hidden");
    
    for(i=0;i<(resultado.data).length;i++){
        const p = document.createElement("P");
        p.innerHTML = `
            Id: ${resultado.data[i].id}</br>
            Email: ${resultado.data[i].email}<br>
            Nombre: ${resultado.data[i].first_name}<br>
            Apellido: ${resultado.data[i].last_name}<br>
            Avatar: ${resultado.data[i].avatar}<br><br>
            `;
        fragmento.appendChild(p);
    }
    divResultado.appendChild(fragmento);
    } catch (error) {
        divResultado.classList.add("red");
        divResultado.removeAttribute("hidden");
        divResultado.textContent = error;
    }
    
};

document.getElementById('nombre').addEventListener("click",getName);