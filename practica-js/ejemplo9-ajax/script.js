let request;
if(window.XMLHttpRequest){
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.addEventListener("load",()=>{
    let respuesta;
        if(request.status == 200 || request.status == 201) 
            respuesta = request.response;
        else respuesta = "No se ha encontrado el recurso";
    console.log((respuesta));
});
request.open("POST","https://reqres.in/api/users");

request.setRequestHeader("Content-type","application/json;charset=UTF8");
request.send(JSON.stringify({
    "nombre":  "Canor" ,
    "trabajo":  "Programador" 
}));
