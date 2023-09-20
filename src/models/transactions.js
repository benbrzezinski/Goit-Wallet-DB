const { Schema, model } = require("mongoose");

const transaction = new Schema({}, { versionKey: false, timestamps: true });

const Transaction = model("Transaction", transaction);

module.exports = Transaction;
