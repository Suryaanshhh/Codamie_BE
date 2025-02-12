const mongoose = require("mongoose");

const dbConnection = async () => {
    await mongoose.connect("mongodb+srv://Suryansh:sfuG8ABgLUt3K01h@cluster0.jheot.mongodb.net/Codamie")
}

module.exports = dbConnection;