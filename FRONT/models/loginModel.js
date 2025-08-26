import axios from "axios"


 const apiLogin = async (id_user,password) =>{  
    try {
        const res = await axios.post('http://localhost:3000/auth/login', {id_user,password});
       return res.data;
        
    } catch (error) {
        console.error(error);
    }
}

export default apiLogin;