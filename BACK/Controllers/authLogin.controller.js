const authLogin = (req,res) =>{
    const {user,password} = req.body; // keep data sended
    try{ 

        /* test */
       /*  res.json({
            user: user,
            password: password
        }); */
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
    }

}

export{
    authLogin
}