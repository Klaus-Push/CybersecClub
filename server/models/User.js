const mongoos = require("mongoose");
const Schema = mongoos.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    major: {
        type: String,
    },
    year: {
        type: Number,
    },
});

module.exports = mongoos.model("User", userSchema);