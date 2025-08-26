import axios from "axios";

const routes = {
    '/login': '../views/login.html',
    '/home': '../views/LandingPage.html',
    '/' : '../views/LandingPage.html',
    '/coders': '',
    '/match': '',
    '/companies': ''

}   

 const router = async (hash) => {
    const path = routes[hash] ?? routes['/home'];
    try {
        const html = await axios.get(path); // get html 
        return await html.data; 
    } catch (error) {
        console.error('Error getting page: ', error);
    }
}

export default router;

