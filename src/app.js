const express = require("express");

const app = express();

const {authAdim, authUser} = require('./middleware/auth')

app.use('/admin', authAdim);

app.get('/user',authUser, (req, res)=>{
    res.send("user data")
})

app.post('/user/login', (req, res)=>{
    res.send('user login')
})
app.get('/admin/getAllData', (req, res) => {
    res.send("send all data ")
})
app.get('/admin/deleteAllData', (req, res) => {
    res.send("delete  all data ")
})

app.listen(3000, (req, res) => {
    console.log("server listen on port 3000...");

});