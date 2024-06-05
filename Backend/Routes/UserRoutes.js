const express = require("express")
const router = express.Router()
const userModel = require("../Model/UserModel")


router.post("/users", async (req, res) => {
    try {
        const body = req.body

        const newUser = new userModel({
            title: body.title,
            detail: body.detail,
            price: body.price,
            image: body.image,
            rating: body.rating

        })

        const saveData = await newUser.save()
        res.status(201).json(saveData)

    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: "An error occurred while creating the user." });
    }
})

module.exports = router