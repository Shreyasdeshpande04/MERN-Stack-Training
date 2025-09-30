

export const getLogin=(req,res)=>{
    res.render('login')
}

export const postLogin=(req,res)=>{
     res.cookie("isloggedin",true)
    res.redirect("/list")
}
 