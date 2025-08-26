import router from "../spa/routes";


const renderHtml = async () =>{
    try {
        
        const normalHash = window.location.hash.slice(1) // delete delete # example: #/home -> /home 
        const html = await router(normalHash); // get html from routes
        commonRender(html); // render the static html;

        switch (normalHash) {
            case '/coders': 
                    // function for render coders
    
                break;
             case '/match': 
                    //function for render matches
                break;
            
            case '/companies': 
                    // function for render companies 
                break;
            default:
                break;
        }
    } catch (error) {
            console.error(error);
    }

}



const commonRender = (html) =>{ // for static page
    const app = document.getElementById('app');

    app.innerHTML = html;
}

export default renderHtml;