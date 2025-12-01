const express = require("express");

const app = express();



app.get('/user', (req, res) =>{
    res.send({firstName: "Abd", lastName: "wak"})
});

app.post('/user', (req, res)=>{
    res.send("data saved in database successfuly")

});

app.delete('/user',(req, res)=>{
    res.send("data delete from databases successfuly ")
})
app.use('/test/3',(req, res)=>{
    res.send("hello from ...")
})


app.listen(3000,(req, res) =>{
    console.log("server listen on port 3000...");
    
});