const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect('mongodb+srv://uploadfiles:uploadfiles@cluster0.ofg0m0h.mongodb.net/test', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB
