import express from "express";
const app=express()
const port=3000

app.get('/',(req,res)=>{
    res.send(`<h1>hello expressjs</h1>`)
})

app.get('/',(req,res)=>{
console.log(`<h1>hello expressjs0000</h1>`)
next()
})

app.use((req,res,next)=>{

    console.log(`welcome to first middelware`);
    next()
})

app.use((req,res,next)=>{

    console.log(`welcome to second middelware`);
    next()
})

app.get('/',(req,res)=>{
    res.send('welcome to home page')
})

app.get('/about',(req,res)=>{
    res.send('welcome to about page')
})

app.listen(port,()=>{
    console.log(`running on port number ${port}`)
})