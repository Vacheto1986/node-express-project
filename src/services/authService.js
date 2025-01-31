import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from 'bcrypt';

const SECRET = 'nklnkn6nnefi989234knnfklaf03rjknkfad0'

export default {
    register(userData) {
        return User.create(userData);
    },
    async login(email, password) {
        const user = await User.findOne({ email });

        //Check user exists
        if (!user) {
            throw new Error('Invalid email or password')
        }

        //Check for correct password
        //.compare gets the current password from the query and checks the pass in db
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            throw new Error("Invalid email or password");
        }

        //Generate token
        const payload = {
            id: user._id,
            email: user.email
        }
        const token = jwt.sign(payload, SECRET, { expiresIn: '2h' })

        //return token
        return token;
    }
};