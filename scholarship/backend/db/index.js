const mongoose = require('mongoose')


async function connectDB(){
    try {

        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}`)

        console.log(`Mongodb connected to ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("ERROR: ", "Mongodb connection error");
        throw error;
    }
}

module.exports = connectDB