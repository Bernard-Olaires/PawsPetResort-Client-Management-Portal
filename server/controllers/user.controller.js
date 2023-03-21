const User = require('../models/user.model')
const secret = process.env.SECRET_KEY;
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');



module.exports = {
    registerUser: async(req,res) => {
        try{
            // check if the email that was entered in the reg form is already in DB
            const duplicateUser = await User.findOne({email:req.body.email});
            if(duplicateUser){
                res.status(400).json({message:'That email already exits'})
            }else{
                // Create the user
                const newUser = await User.create(req.body);

                // jwt.sign creates the token the first thing we pass is what we want to serialize (payload)
                // the secon param is a secret key to serialize
                const userToken = jwt.sign({_id:newUser._id, email:newUser.email, admin:newUser.admin}, secret, {expiresIn:'2h'})
                console.log(userToken)

                res.cookie('userToken', userToken,{httpOnly:true, maxAge:2 * 60 * 60 * 1000 }).status(201).json({message:'User logged in', user:newUser})
            }
        }
        catch(err){
            console.log(err);
            res.status(400).json({error: err});
        }
    },
    login: async (req, res) => {
        try {
            const user = await User.findOne({ email: req.body.email });
            if (user) {
                // if the user exists we want to check the password with what is stored in the db under that email 
                const passwordsMatch = await bcrypt.compare(req.body.password, user.password)
                console.log(passwordsMatch);
                if (passwordsMatch) {
                    console.log('HERE');
                    const userToken = jwt.sign({ _id: user._id, email: user.email, admin: user.admin }, secret, { expiresIn: '2h' })
                    console.log(userToken);
                    // Sending back the logged in user 
                    res.cookie('userToken', userToken, { httpOnly: true, maxAge: 2 * 60 * 60 * 1000 }).status(201).json({ message: 'User logged in', user: user })
                } else {
                    res.status(400).json({ message: 'Invalid Email/Password' })
                }
            }
            else {
                res.status(400).json({ message: 'Invalid Email/Password' })
            }
        }
        catch (err) {
            res.status(400).json({ error: err })
        }
    },
    logout: (req, res) => {
        res.clearCookie('userToken').json({message:'User is logged out'})
        // res.sendStatus(200).json({message:'User is logged out'});
    },
    getOneUser: (req, res) => {
        const {params} = req;
        User.findOne({_id: params.id})
            .then((user) => {
                res.json(user)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    updateUser: (req, res) => {
        User.findByIdAndUpdate({ _id: req.params.id } ,req.body, {new: true, runValidators: true})
            .then((updatedUser) => {
                res.json(updatedUser)
            })
            .catch((err) => {
                console.log(err)
                res.status(500).json(err)
            })
    }
}