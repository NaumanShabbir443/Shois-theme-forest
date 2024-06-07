const express = require("express");
const router = express.Router();
const userModel = require("../Model/UserModel");
// const multer = require('multer');

// Multer configuration
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/'); // Save files to the 'uploads' directory
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + '-' + file.originalname); // Rename files with a unique timestamp
//     }
// });
// const upload = multer({ storage: storage });
// upload.single('image')
router.post("/users", async (req, res) => {
    try {
        const body = req.body;
        console.log("body", body);
        // console.log("file sdsd", req.file);

        // if (!req.file) {
        //     return res.status(400).json({ error: "No file uploaded." });
        // }

        const newUser = new userModel({
            title: body.title,
            detail: body.detail,
            price: body.price,
            // image: req.file.path, // Save the file path in the database
            rating: body.rating,
            file: body.file
        });

        const saveData = await newUser.save();
        res.status(201).json(saveData);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "An error occurred while creating the user." });
    }
});


module.exports = router;
