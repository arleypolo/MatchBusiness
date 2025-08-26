import router from "../spa/routes";


const renderHtml = async(hash) =>{
    try {
        const normalHash = hash.slice(1); // delete delete # example: #/home -> /home 
        const html = await router(normalHash); // get html from routes
        commonRender(html); // render the static html;

        switch (normalHash) {
            case '/coders': 
                    // function for render coders
    
                break;
             case '/match': 
                    //function for render matches
                break;
            default:
                break;
        }
    } catch (error) {
        
    }

}



const commonRender = (html) =>{ // for static page
    const app = document.getElementById('app');
    app.innerHTML = html;
}

export default renderHtml;