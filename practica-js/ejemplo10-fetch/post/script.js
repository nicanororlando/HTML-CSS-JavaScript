fetch("https://reqres.in/api/users",{
    method : "POST",
    body : JSON.stringify({
        "nombre" : "Canor",
        "apellido" : "Orlando"
    }),
    headers: {"Content-type" : "application/json"}
})
.then(res=>res.json())    
.then(res=>console.log(res))
