const express = require("express");
const { connectDB } = require('./config/database')

const User = require('./models/user');
const app = express();

app.use(express.json())
// Regester the user 
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

// get user by email
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
// get all user
app.get('/feed', async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (err) {
        res.status(400).send("Somthing Want wrong !")
    }
})
// get user by id
app.get('/user/:id', async (req, res) => {
    const id = req.params.id
    try {
        const user = await User.findById(id)
        if (!user) {
            res.status(404).send("no user found")
        }
        else {
            res.send(user)
        }

    } catch (err) {
        res.status(400).send("Somthing Want wrong !")
    }
})
// delete a user from databases
app.delete('/user', async (req, res) => {
    const userId = req.body.userId
    try {
        const user = await User.findByIdAndDelete(userId);
        if (!user) {
            res.status(404).send("user not found")
        }
        else {
            res.send("User deleted successfuly! ")
        }

    } catch (err) {
        res.status(400).send("Somthing Want wrong !")
    }
})


// update data of the user

app.patch('/user', async (req, res)=>{
    const userId = req.body.userId;
    const data = req.body;
    try {
       await User.findByIdAndUpdate({_id: userId}, data, {runValidators: true});
       res.send("user updated successfuly")

        
    } catch (err) {
        res.status(400).send("user is not updated" + err.message)
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
