"use-strict";

const archivo = document.getElementById("archivo");

archivo.addEventListener("change", (e)=>{
    leerArchivos(archivo.files)
})
const leerArchivos = (ar) => {
    for(var i=0 ; i<ar.length ; i++){
        const reader = new FileReader();
        reader.readasda(ar[i]);
        reader.addEventListener("load", (e)=>{
            console.log(JSON.parse(e.currentTarget.result))
        })
    }
}

const img = document.getElementById("img");
const resultado = document.querySelector(".resultado");

img.addEventListener("change", ()=>{
    leerImg(img.files)
})
const leerImg = (img) => {
    for(var i=0 ; i < img.length ; i++){
        const reader = new FileReader();
        reader.readAsDataURL(img[i]);
        reader.addEventListener("load", (e)=>{
            resultado.innerHTML += `<img src='${e.currentTarget.result}'>`
        })
    }
}