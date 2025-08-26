/* DOM */

import loginController from "./controllers/loginController";
import renderHtml from "./controllers/renderViewsController";

/* show message */
export const showMessageLogin = (message,  ) =>{
    const container = document.getElementById('message-login');
    const p = document.createElement('p');
    p.className = 'bg-red-400 p-2';
    p.id = 'message'
    p.textContent = message;
    container.appendChild(p);
    setTimeout(() =>{
            container.removeChild(p);
    }, 5000);
}








/* handle forms */

document.addEventListener('submit', (event) =>{
    event.preventDefault();
   
    if(event.target.id == 'login-form'){
       loginController();     
    }

});



window.addEventListener('hashchange', renderHtml);
window.addEventListener('load', renderHtml);