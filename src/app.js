const express = require("express");
const { connectDB } = require('./config/database')

const User = require('./models/user')
const app = express();

app.use(express.json())

app.post('/signup', async (req, res) => {

    const user = new User(req.body);
    try {
        await user.save()
        res.send("User added successfuly !")
    }
    catch (err) {
        res.status(400).send("Error saving the user:" + err.message)
    }

})

app.get('/user', async (req, res) => {
    const userEmail = req.body.email;

    try {

        const user = await User.findOne({ email: userEmail })
        if (!user) {
            res.status(404).send("user is not found")
        }
        else res.send(user)


    } catch (err) {
        res.status(400).send("somthing want wrong!")
    }
})

app.get('/feed', async (req, res)=>{
    try {
        const users = await User.find({});
        res.send(users);
    } catch (err) {
        res.status(400).send("Somthing Want wrong !")
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
