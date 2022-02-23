// https://reqres.in/api/users?page=2
// https://reqres.in/api/users

const getName = ()=>{
    fetch("https://reqres.in/api/users?page=2")
        .then(res=>{
            if(res.ok) Promise.resolve(res);
            else Promise.reject(res);
        })
        .then(res=>console.log(res))
        .catch(e=>console.log(res);
};
getName();