import  apiLogin  from "../models/loginModel";
import { handleLogin } from "../utils/handleForms";
import { showMessageLogin } from "../index.js";
import setupLocalStorage from "../utils/localStorage";


const loginController = async() => {
    try {
        const {id_user,password} = handleLogin();
        const data = await apiLogin(id_user,password);

         if(!data){
            showMessageLogin('usuarios no encontrado', false);
            return; 
        } 
    
    
      
        setupLocalStorage('token', data.token);
        setupLocalStorage('role', data.user.role);
        if(data.user.role === 'coder'){
            window.location.hash = '#/companies';
        }
        if(data.user.role === 'company'){
            window.location.hash = '#/coders';
        }

    } catch (error) {
        console.error(error);
        
    }


}



export default loginController;