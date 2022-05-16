"use strict";

const addZeros = n => {
    if (n.toString().lenght < 2) return "0".concat(n);
    return n;
}

const actualizarHora = ()=>{
    const time = new Date();
    let hora = addZeros(time.getHours());
    let min = addZeros(time.getMinutes());
    let seg = addZeros(time.getSeconds());

    document.querySelector(".hora").textContent = hora;
    document.querySelector(".min").textContent = min;
    document.querySelector(".seg").textContent = seg;
}
actualizarHora();   //Para que se actualize apenas carga la pag y no se vea 00 00 00.
setInterval(actualizarHora,1000);   //Para actualizar la hora cada 1 segundo. No es recomendable xq usa muchos recursos.

