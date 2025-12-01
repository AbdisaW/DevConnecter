const express = require("express");

const app = express();


app.use('/',(req, res)=>{
    res.send("Hello from Dashbord...")
})
app.use('/test',(req, res)=>{
    res.send("hello from server...")
})

app.listen(3000,(req, res) =>{
    console.log("server listen on port 3000...");
    
});