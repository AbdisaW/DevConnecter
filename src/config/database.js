

const mongoose = require("mongoose")

const connectDB = async ()=>{
    await mongoose.connect(
    "mongodb+srv://abdisa:7La51ZdPjO8Loe8u@cluster0.zahz241.mongodb.net/DevConnector"
)};

module.exports ={
    connectDB
}

    


