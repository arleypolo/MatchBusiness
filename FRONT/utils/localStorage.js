const setupLocalStorage = (key,value) =>{
    /* 
     * if the key already exist it will remove it
     * if the key does not exist it will create it
    */
    localStorage.getItem(key) ? localStorage.removeItem(key) : localStorage.setItem(key,value);
}

export default setupLocalStorage;

