import User from '../models/user.js';

// create new user
export const newUser = async (req, res) => {
  const { name } = req.body;
  try {
    // find existinf user
    const existUser = await User.findOne({ name: name });
    if (!existUser) {
      const newUser = new User({
        name: name
      });
      await newUser.save(); // save new user
      return res.status(201).json({
        success: true,
        message: `successfully register as ${newUser.name}`,
        data: newUser,
        status_code: 201
      });
    }
    return res.status(203).json({
      success: false,
      message: 'user alredy exist with this credentials',
      status_code: 203
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'server error',
      status_code: 500
    });
  }
};

// fetch or retrieve user
export const getSingleUser = async (req, res) => {
  const user_id = req.params.user_id;
  try {
    const userExist = await User.findOne({ _id: user_id });
    if (userExist) {
      return res.status(200).json({
        success: true,
        message: `user with ${user_id} ID found`,
        data: userExist,
        status_code: 200
      });
    } else {
      return res.status(404).json({
        sucess: false,
        message: 'no user found',
        status_code: 404
      });
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'server error',
      status_code: 500
    });
  }
};

// update user
export const updateUser = async (req, res) => {
  const user_id = req.params.user_id;
  try {
    const findUser = await User.findById(user_id);
    if (!findUser) {
      return res.status(404).json({
        sucess: false,
        message: 'no user found',
        status_code: 404
      });
    }
    const updateUserData = await User.findByIdAndUpdate(findUser._id,
      { $set: req.body },
      { new: true });
    await updateUserData.save();
    return res.status(201).json({
      success: true,
      message: 'updated user successfully',
      data: updateUserData,
      status_code: 201
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'server error',
      status_code: 500
    });
  }
};

export const deleteUser = async (req, res) => {
  const user_id = req.params.user_id;
  try {
    const findUser = await User.findById(user_id);
    if (!findUser) {
      return res.status(404).json({
        sucess: false,
        message: 'no user found',
        status_code: 404
      });
    }
    await User.findByIdAndDelete(findUser._id);
    return res.status(200).json({
      success: true,
      message: 'delete user successfully',
      status_code: 200
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'server error',
      status_code: 500
    });
  }
};
