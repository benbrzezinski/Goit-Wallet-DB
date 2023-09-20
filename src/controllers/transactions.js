const service = require('../services/transactions');

// Aby odpowiedzi były spójne daje przykładowy res:

//   res.json({
//       status: 200,
//       statusText: "OK",
//       data: {
//         ...
//       },
//     });

const get = async (req, res, next) => {
  const { _id } = req.user;
  try {
    const transactions = await service.getTransactions({ _id });
    res.json({ status: 200, statusText: 'OK', data: transactions });
  } catch (err) {
    res.status(500).json({status: 500, statusText: "Internal serwer error", error:err})
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
  } catch (err) {
    console.error(err.message);
    next(err);
  }
};

const getCategory = async (req, res, next) => {
  try {
  } catch (err) {
    console.error(err.message);
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
  } catch (err) {
    console.error(err.message);
    next(err);
  }
};

const remove = async (req, res, next) => {
  try {
  } catch (err) {
    console.error(err.message);
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
  } catch (err) {
    console.error(err.message);
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
