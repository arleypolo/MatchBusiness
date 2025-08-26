const handleLogin = () =>{
    const id_user = document.getElementById("id_user").value;
    const password = document.getElementById("password").value;

    if(!id_user || !password){
        throw 'Ingresa todos los datos'
    }
    if(isNaN(id_user)){
        throw 'El numero de su documento solo debe contener numeros'    
    }
    return {
        id_user,
        password
    }; 
}

export {
    handleLogin
}