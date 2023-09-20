const service = require("../services/users");

// Aby odpowiedzi były spójne daje przykładowy res:

//   res.json({
//       status: 200,
//       statusText: "OK",
//       data: {
//         ...
//       },
//     });

const register = async (req, res, next) => {
  try {
  } catch (err) {
    console.error(err.message);
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
  } catch (err) {
    console.error(err.message);
    next(err);
  }
};

const logout = async (req, res, next) => {
  try {
  } catch (err) {
    console.error(err.message);
    next(err);
  }
};

const getCurrent = async (req, res, next) => {
  try {
  } catch (err) {
    console.error(err.message);
    next(err);
  }
};

const verifyEmail = async (req, res, next) => {
  try {
  } catch (err) {
    console.error(err.message);
    next(err);
  }
};

const reverifyEmail = async (req, res, next) => {
  try {
  } catch (err) {
    console.error(err.message);
    next(err);
  }
};

module.exports = {
  register,
  login,
  logout,
  getCurrent,
  verifyEmail,
  reverifyEmail,
};
