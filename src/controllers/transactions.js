import service from '../services/transactions.js';
import { handleValidationError } from '../utils/handleErrors.js';

const get = async (req, res, next) => {
  const { _id } = req.user;
  try {
    const result = await service.getTransactions({ _id });
    res.json({ status: 200, statusText: 'OK', result });
  } catch (err) {
    next(err);
  }
};

const getCategory = async (req, res, next) => {
  const { id } = req.params;
  const userId = req.user._id;
  try {
    const result = await service.getTransactionCategory(userId, id);

    if (result) {
      return res.json({
        status: '200',
        statusText: 'OK',
        result,
      });
    }

    res.status(404).json({
      status: '404',
      statusText: 'Not Found',
      result: `Not found transaction id: ${id}`,
    });
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  const { _id } = req.user;
  const transactionData = req.body;
  try {
    const result = await service.createTransaction({
      ...transactionData,
      owner: _id,
    });

    res.json({
      status: 201,
      statusText: 'Created',
      result,
    });
  } catch (err) {
    handleValidationError(err, res, next);
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
        result,
      });
    }

    res.status(404).json({
      status: 404,
      statusText: 'Not Found',
      result: `Not found transaction id: ${id}`,
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
    const result = await service.updateTransaction(userId, id, {
      ...transactionData,
    });

    if (result) {
      return res.json({
        status: 200,
        statusText: 'OK',
        result,
      });
    }

    res.status(404).json({
      status: 404,
      statusText: 'Not Found',
      result: `Not found transaction id: ${id}`,
    });
  } catch (err) {
    handleValidationError(err, res, next);
  }
};

const transactionsController = {
  get,
  getCategory,
  create,
  remove,
  update,
};

export default transactionsController;
