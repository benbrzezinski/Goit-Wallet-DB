const Transaction = require("../models/transactions");

const getTransactions = async userId => {
  try {
    return await Transaction.find({ owner: userId }).lean();
  } catch (err) {
    console.error(err.message);
  }
};

const getTransactionById = async (userId, id) => {
  try {
    return await Transaction.findOne({ owner: userId, _id: id }).lean();
  } catch (err) {
    console.error(err.message);
  }
};

const getTransactionCategory = async (userId, id) => {
  try {
    const transaction = await Transaction.findOne(
      {
        owner: userId,
        _id: id,
      },
      { category: 1 }
    ).lean();

    return transaction.category;
  } catch (err) {
    console.error(err.message);
  }
};

const createTransaction = async body => {
  try {
    return await Transaction.create(body);
  } catch (err) {
    console.error(err.message);
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
  try {
    return await Transaction.findOneAndUpdate(
      { owner: userId, _id: id },
      body,
      {
        new: true,
      }
    ).lean();
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  getTransactions,
  getTransactionById,
  getTransactionCategory,
  createTransaction,
  removeTransaction,
  updateTransaction,
};
