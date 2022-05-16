// Por defecto ya esta el metodo GET incluido. 

// // text: Devuelve en formato texto (serializado):
// fetch("https://reqres.in/api/users?page=2")
//     .then(res=>res.text())
//     .then(res=>console.log(res));

// json: Devuelve en formato json (deserializado):
fetch("https://reqres.in/api/users?page=2")
    .then(res=>res.json())
    .then(res=>console.log(res));

    // // blob: Devuelve la una imagen o archivo: 
    // const imagen = document.querySelector(".imagen"); 
    // fetch("imagen.png")
    //         .then(res=>res.blob())
    //         .then((img)=>{
    //             imagen.src = URL.createObjectURL(img);
    //             console.log(img);
    //         });