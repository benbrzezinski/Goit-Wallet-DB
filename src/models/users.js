const { Schema, model } = require("mongoose");

const user = new Schema({}, { versionKey: false, timestamps: true });

const User = model("User", user);

module.exports = User;
