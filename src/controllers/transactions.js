import service from '../services/transactions.js';
import { handleValidationError } from '../utils/handleErrors.js';

const get = async (req, res, next) => {
  const { _id } = req.user;
  const { query } = req;
  try {
    const result = await service.getTransactions({ _id }, query);
    res.json({ status: 200, statusText: 'OK', data: result });
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
        data: result,
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
  try {
    const result = await service.getTransactionCategory(userId, id);

    if (result) {
      return res.json({
        status: '200',
        statusText: 'OK',
        data: result,
      });
    }

    res.status(404).json({
      status: '404',
      statusText: 'Not Found',
      data: `Not found transaction id: ${id}`,
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
      data: result,
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
    const result = await service.updateTransaction(userId, id, {
      ...transactionData,
    });

    res.json({
      status: 200,
      statusText: 'OK',
      data: result,
    });
  } catch (err) {
    handleValidationError(err, res, next);
  }
};

const transactionsController = {
  get,
  getById,
  getCategory,
  create,
  remove,
  update,
};

export default transactionsController;
