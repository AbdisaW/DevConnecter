const express = require("express");
const { connectDB } = require('./config/database')

const User = require('./models/user')
const app = express();

app.post('/signup', async (req, res) => {

    const user = new User({
        firstName: "abel",
        lastName: "assefa",
        email: "abel@gmail.com",
        password: "abel123"
    });

    try {
        await user.save()
        res.send("User added successfuly !")
    }
    catch(err){
        res.status(400).send("Error saving the user:"+ err.message)
    }

})

connectDB().then(() => {
    console.log("Database connection is established")
    app.listen(3000, (req, res) => {
        console.log("server listen on port 3000...");
    });
}).catch((err) => {
    console.error("Database cannot be connected!")
})
