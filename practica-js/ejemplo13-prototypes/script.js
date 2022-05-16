class Objeto {
    constructor(){};
    hablar(){
        console.log("hola");
    }
};
const objeto = new Objeto();
objeto.__proto__hablar = ()=>{
    console.log("modificado afuera");
}

console.log(objeto.__proto__);