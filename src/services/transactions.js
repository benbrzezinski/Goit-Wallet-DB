import Transaction from '../models/transactions.js';

const getTransactions = async userId => {
  try {
    return await Transaction.find({
      owner: userId,
    })
      .sort({ 'date.year': -1, 'date.month': -1, 'date.day': -1, category: 1 })
      .lean();
  } catch (err) {
    console.error(err.message);
  }
};

const getTransactionCategory = async (userId, id) => {
  try {
    const { category } = await Transaction.findOne(
      {
        owner: userId,
        _id: id,
      },
      { category: 1 }
    ).lean();

    return category;
  } catch (err) {
    console.error(err.message);
  }
};

const createTransaction = async body => {
  try {
    return await Transaction.create(body);
  } catch (err) {
    console.error(err.message);
    throw err;
  }
};

const removeTransaction = async (userId, id) => {
  try {
    return await Transaction.findOneAndRemove({
      owner: userId,
      _id: id,
    }).lean();
  } catch (err) {
    console.error(err.message);
  }
};

const updateTransaction = async (userId, id, body) => {
  const opts = {
    new: true,
    runValidators: true,
  };
  try {
    return await Transaction.findOneAndUpdate(
      { owner: userId, _id: id },
      body,
      opts
    ).lean();
  } catch (err) {
    console.error(err.message);
    throw err;
  }
};

const service = {
  getTransactions,
  getTransactionCategory,
  createTransaction,
  removeTransaction,
  updateTransaction,
};

export default service;
