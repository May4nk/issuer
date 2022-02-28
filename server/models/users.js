//models/users
import mongoose from 'mongoose';

//issues table Schema
const usersSchema = mongoose.Schema({
    email : { type: String },
    password : { type: String },
    created : { type: Date, default: new Date() }
});

const usersModel = mongoose.model('users', usersSchema);

export default usersModel;

