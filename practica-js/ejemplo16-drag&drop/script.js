"use-strict";

const zona = document.querySelector(".zona");
const texturas = document.querySelector(".texturas");

const transferirTextura = (e,n)=>{
    e.dataTransfer.setData("textura",n);
};
for(let i=1 ; i < texturas.children.length + 1 ; i++){
    document.querySelector(`.textura${i}`).addEventListener("dragstart", e=> 
    transferirTextura(e,i));    
}
zona.addEventListener("dragover", (e)=>{
    e.preventDefault();
});
zona.addEventListener("drop",(e)=>{
    let n = e.dataTransfer.getData("textura");
    zona.style.background = `url("img/t${n}.jpg")`
});
