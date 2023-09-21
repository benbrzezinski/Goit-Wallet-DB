const { Schema, model } = require('mongoose');

const transaction = new Schema(
  {
    type: {
      type: String,
      enum: ['-', '+'],
    },
    category: {
      type: String,
      enum: [
        'Main expenses',
        'Products',
        'Car',
        'Self care',
        'Child care',
        'Household products',
        'Education',
        'Leisure',
        'Other expenses',
        'Entertainment',
      ],
    },
    date: {
      type: String,
    },
    comment: {
      type: String,
    },
    sum: {
      type: String,
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
