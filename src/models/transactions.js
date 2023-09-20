const { Schema, model } = require('mongoose');

const transaction = new Schema(
  {
    type: {
      enum: ['-', '+'],
    },
    category: {
      type: String,
    },
    comment: {
      type: String,
    },
    sum: {
      type: Number,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  { versionKey: false, timestamps: true }
);

const Transaction = model('Transaction', transaction);

module.exports = Transaction;
