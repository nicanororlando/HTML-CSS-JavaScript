class Persona {
    constructor(nombre,instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
};
const data = [
    ["","@nicanororlando"],
    ["roberto","@roberto"],
    ["matu",""],
    ["nabucodonosor","@nabucodonosor"]
];
const personas = [];

for(i=0;i<data.length;i++){
    personas[i] = new Persona(data[i][0],data[i][1]);
}

const obtenerPersona = (id,callback)=>{
    if (personas[id] == undefined) {
        //Llamo a la funcion y le paso el primer parametro que seria el msg de error.
        callback("No se ha encontrado a la persona");
    }
    else {
        //Llamo a la funcion y le paso estos dos parametros.
        callback(null,personas[id]); 
    }
};

//  LLAMO a la funcion y le paso el id como primer parametro
//y el segundo parametro es la funcion callback.
//  Esta funcion callback al ser funcion flecha no va a tener nombre en si,
//pero al llamar a obtenerPersona y pasarle la funcion, voy a poder llamar
//al callback desde esa funcion y pasarle estos 3 parametros que necesita.
obtenerPersona(3, (err,persona)=>{
    if(err) console.log(err);
    else {
        if (persona.nombre) console.log(persona.nombre);
        else console.log("Nombre inexistente");
            
        if (persona.instagram) console.log(persona.instagram);    
        else console.log("Esta persona no tiene ig");
    }  
});
//  Esta funcion es lo mismo que si hago esto:
// // function cualquiera(err,persona){
// //     if(err) console.log(err);
// //     else    console.log(persona);
// // };
// // obtenerPersonas(1, cualquiera);

