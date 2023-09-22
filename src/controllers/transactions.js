const service = require('../services/transactions');

const get = async (req, res, next) => {
  const { _id } = req.user;
  try {
    const transactions = await service.getTransactions({ _id });
    res.json({ status: 200, statusText: 'OK', data: transactions });
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  const userId = req.user._id;
  try {
    const result = await service.getTransactionById(userId, id);
    if (result) {
      return res.json({
        status: 200,
        statusText: 'OK',
        data: { result },
      });
    }
    res.status(404).json({
      status: 404,
      statusText: 'Not Found',
      data: `Not found transaction id: ${id}`,
    });
  } catch (err) {
    next(err);
  }
};

const getCategory = async (req, res, next) => {
  const { id } = req.params;
  const userId = req.user._id;
  const transaction = await service.getTransactionById(userId, id);
  if (!transaction) {
    return res.status(404).json({
      status: '404',
      statusText: 'Not Found',
      data: `Not found transaction id: ${id}`,
    });
  }
  try {
    const result = await service.getTransactionCategory(userId, id);
    res.json(result);
  } catch (err) {
    console.error(err.message);
    next(err);
  }
};

const create = async (req, res, next) => {
  const { _id } = req.user;
  const transactionData = req.body;
  try {
    await service.createTransaction({ ...transactionData, owner: _id });
    res.json({
      status: 200,
      statusText: 'OK',
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({
        status: 400,
        statusText: 'Bad Request',
        data: err.message,
      });
    }
    next(err);
  }
};

const remove = async (req, res, next) => {
  const { id } = req.params;
  const userId = req.user._id;
  try {
    const result = await service.removeTransaction(userId, id);
    if (result) {
      return res.json({
        status: 200,
        statusText: 'OK',
        data: `Transactions ${result._id} deleted`,
      });
    }
    res.status(404).json({
      status: 404,
      statusText: 'Not Found',
      data: `Not found transaction id: ${id}`,
    });
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  const { id } = req.params;
  const userId = req.user._id;
  const transactionData = req.body;
  try {
    const result = await service.updateTransaction(userId, id, { ...transactionData });
    res.json({
      status: 200,
      statusText: 'OK',
      data: `Transactions ${result._id} updated`,
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({
        status: 400,
        statusText: 'Bad Request',
        data: err.message,
      });
    }
    next(err);
  }
};

module.exports = {
  get,
  getById,
  getCategory,
  create,
  remove,
  update,
};
