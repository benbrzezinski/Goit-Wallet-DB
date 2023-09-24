import { Schema, model } from 'mongoose';

const date = new Schema({
  day: {
    type: String,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
});

const transaction = new Schema(
  {
    type: {
      type: String,
      enum: ['-', '+'],
      required: true,
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
        'Income',
      ],
    },
    date: {
      type: date,
      _id: false,
      required: true,
    },
    comment: {
      type: String,
      required: true,
      trim: true,
    },
    sum: {
      type: String,
      required: true,
      trim: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  { versionKey: false, timestamps: true }
);

const Transaction = model('Transaction', transaction);

export default Transaction;
