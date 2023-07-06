"use-strict";

const modal = document.querySelector(".modal-overlay");

const definirIdioma = ()=>{
    document.querySelector(".en").addEventListener("click", ()=>{
        localStorage.setItem("idioma","en");
        cerrarModal();
    });
    document.querySelector(".es").addEventListener("click", ()=>{
        localStorage.setItem("idioma","es");
        cerrarModal();
    });
};

const cerrarModal = ()=>{
    modal.style.animation = "desaparecer 1s forwards";
    setTimeout(() => {
        modal.style.display = "none";
    }, 1000);
};

const idioma = localStorage.getItem("idioma");
if (idioma === null) definirIdioma();
else {
    console.log(`El idioma es "${idioma}"`);
    modal.style.display = "none";
}
