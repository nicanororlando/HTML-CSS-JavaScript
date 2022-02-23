//*** METODO GET:  ***//
// Por defecto ya esta el .get
axios("https://reqres.in/api/users?page=2")
    .then(res=>console.log(res.data));


    
//*** METODO POST: ***//
axios.post("https://reqres.in/api/users",{
    "nombre" : "Nicanor",
    "apellido" : "Orlando"
}).then(res=>console.log(res.data));

// o tambien podemos hacerlo de esta manera, es lo mismo y no hace falta ni serializarlo:

axios("https://reqres.in/api/users",{
    method: "post",
    data: {
        "nombre" : "Nicanor",
        "apellido" : "Orlando"
    }
}).then(res=>console.log(res.data));