const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("../lib/jsonwebtoken");

const SECRET = 'mysecretkeyishere';

exports.findByUsername = (username) => {
    User.findOne({username})
};
exports.findByEmail = (email) => User.findOne({email: email})
;

exports.register = async (email, firstName, lastName, password, repeatPassword) => {
    if (password !== repeatPassword) {
        throw new Error("Password mismatch!");
    }
    // TODO: Check if users exists;

    const existingUser = await User.findOne({
        $or: [{email}],
    });

    if (existingUser) {
        throw new Error("User already exists!");
    }

    //TODO: Validate password:

    const hashedPassword = await bcrypt.hash(password, 10);


    await User.create({email, firstName, lastName, password: hashedPassword});

    return this.login(email, password);

};


exports.login = async (email, password) => {

    // User exist
    const user = await User.findOne({email: email});


    if (!user) {
        throw new Error("Invalid email or password!");
    }

    // Password is valid

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error("Invalid email or password!");
    }

    // Generate token
    const payload = {
        _id: user._id,
        email,
        username: user.username,
    };

    const token = await jwt.sign(payload, SECRET);


    const data = {
        token: token,
        _id: user._id,
        userEmail: email
    };

    return data
};