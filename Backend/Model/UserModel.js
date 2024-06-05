const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    detail: {
        type: String,

    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }


})

const userModel = mongoose.model("shoieUser", userSchema)

module.export = userModel