const User = require("../model/User");

exports.registerService = async (userInfo) => {
    const user = await User.create(userInfo);
    return user;
}

exports.findUserByEmail = async (email) => {
    const user = await User.findOne({ email })
    return user;
}
exports.findUserById = async (id) => {
    const user = await User.findOne({ _id: id })
    return user;
}