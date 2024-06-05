const express = require("express");
const dotenv = require("dotenv")

const app = express()

const PORT = 7000

app.listen(PORT, () => {
    console.log(`Server is Running on Port ${PORT}`)
})
