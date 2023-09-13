import User from '../models/user.js';

// create new user
export const newUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        // find existinf user
        const existUser = await User.findOne({ email: email });
        if (!existUser) {
            const newUser = new User({
                username: username,
                email: email,
                password: password
            });
            await newUser.save(); // save new user
            return res.status(201).json({
                success: true,
                message: `successfully register as ${newUser.username}`,
                status_code: 201
            })
        } 
        return res.status(203).json({
            success: false,
            message: 'user alredy exist with this credentials',
            status_code: 203
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'server error',
            status_code: 500
        })
    }
}

//fetch or retrieve user 
export const getSingleUser = async (req, res) => {
    const user_id = req.params.user_id
    try {
        const userExist = await User.findOne({ _id: user_id })
        if (userExist) {
        return res.status(200).json({
            success: true,
            message: `user with ${user_id} ID found`,
            data: userExist,
            status_code: 200
        })
    } else {
        return res.status(404).json({
            sucess: false,
            message: 'no user found',
            status_code: 404
        })
    }
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'server error',
            status_code: 500
        })
    }
}