const express = require('express')
const app = express ()
const port = 3000
app.get('/',(req,res)=>{
    res.send("WELCOME TO SERVER")
})
app.listen(port,()=>{
 console.log('SERVER IS RUNNING IN PORT : '+ port)
})
console.log("HELLO HII")