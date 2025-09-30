import express from "express";
const app= express()
const port=3000
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.post('/add',(req,res)=>{
    console.log(req.body)
    res.send('Data Added')
})

app.put("/put",(req,res)=>{
    console.log(req.body)
    res.send('Data updated')
})

app.delete("/delete",(req,
    
    
    res)=>{
    console.log(req.body)
    res.send('Data deleted                                                                                                         ')
})

app.listen(port,()=>    {
    console.log(`running on port number ${port}`)
})