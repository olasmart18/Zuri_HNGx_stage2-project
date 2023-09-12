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
            message: 'server error'
        })
    }
}