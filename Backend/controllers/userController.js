const userModel = require("../models/user.model");
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")



// route for login user
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.json({ success: false, message: "User dosn't exists" })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (isMatch) {
            const token = jwt.sign(
                { id: user._id },
                process.env.JWT_TOKEN);

            res.status(201).json({
                success:true,
                message: "Login Successful",
                token
            })
        } else {
            res.status(400).json({
                success: false,
                message: "Invalid Password"
            })
        }
    }


    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

// route for register user
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const exits = await userModel.findOne({ email })
        // cheack uses is exists
        if (exits) {
            return res.status(409).json({
                success:false,
                message: "User already exists"
            })
        }
        // This email is valid and password length
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" })
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please Enter the Strong Password" })
        }
        // Hashing use the password
        const slat = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password, slat)
        // User data insert
        const newUser = new userModel({
            name,
            email,
            password: hashedpassword
        })
        const user = await newUser.save();
        // token create
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_TOKEN);

        res.status(201).json({
            success:true,
            message: "Signup Successful",
            token
        });
    } catch (error) {
        res.json({ success: false, message:"User already exits."})
    }


}
// route for admin user
const adminUser = async (req, res) => {
    try {
        const { email, password } = req.body

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email + password, process.env.JWT_TOKEN)
            res.json({ success: true, token })
        } else {
            res.json({ success: false, message: "Invilid" })
        }
    } catch (error) {

    }
}

module.exports = { loginUser, registerUser, adminUser }
