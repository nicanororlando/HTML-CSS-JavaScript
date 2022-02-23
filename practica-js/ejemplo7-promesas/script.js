class Persona {
    constructor(nombre,instagram,descripcion){
        this.nombre = nombre;
        this.instagram = instagram;
        this.descripcion = descripcion;
    }
};
const data = [
    ["","@nicanororlando","me gusta el arte"],
    ["roberto","@roberto"],
    ["matu"],
    ["nabucodonosor","@nabucodonosor","soy un crack"]
];
const personas = [];

for(i=0;i<data.length;i++){
    personas[i] = new Persona(data[i][0],data[i][1],data[i][2]);
}

const obtenerPersona = (id)=>{
    return new Promise((resolve,reject)=>{
        if(personas[id].nombre == undefined || personas[id].nombre == ''){
            reject("No se ha encontrado la persona");
        }
        else resolve(`Nombre: ` + personas[id].nombre);
    });
};
const obtenerInstagram = (id)=>{
    return new Promise((resolve,reject)=>{
        if(personas[id].instagram == undefined || personas[id].instagram == ''){
            reject("No se ha encontrado el instagram");
        }
        else resolve(`Instagram: ` + personas[id].instagram)
    });
};
const obtenerDescripcion = (id)=>{
    return new Promise((resolve,reject)=>{
        if(personas[id].descripcion == undefined || personas[id].descripcion == ''){
            reject("Sin descripcion");
        }
        else resolve(personas[id].descripcion)
    });
};

let id = 2;
//  De esta manera resumimos codigo ya que vamos a controlar el error mucho
//mas facil por el hecho de que el catch nos va a retornar el error donde se
//ejecute el reject, por lo que no va a ser necesario tantas sentencias 
//if - else ya que cualquier error que haya, con el catch(e) lo vamos a poder controlar.
obtenerPersona(id).then((persona)=>{
    console.log(persona);
    return obtenerInstagram(id);
    }).then((instagram)=>{
        console.log(instagram);
        return obtenerDescripcion(id);
    }).then((descripcion)=>{
        console.log(descripcion);
    }).catch((e)=>{
        console.log(e);
    });
//  Como se puede ver, si agregamos varios items al array, solo es necesario agregar
//la cantidad de then por columna necesarios. Y el catch se utiliza solo una vez.
//  Si salta un error en el primer elemento, automaticamente va al catch y salta lo otro.
