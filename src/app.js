const express = require("express");
const app = express();

const dbConnection = require("./configs/dataBase");

dbConnection().then(() => {
    console.log("Db Connected");
    app.listen(3000, () => {
        console.log("Server Running")
    })
}).catch((err) => {
    console.error(err)
})


