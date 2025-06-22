import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    first_name: {type: String, required: true, maxlength: 32},
    last_name: {type: String, required: true, maxlength: 32},
    email: {type: String, required: true, unique: true, match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/},
    password: {type: String, required: true},
})

const User = mongoose.model("User", userSchema);
export default User;