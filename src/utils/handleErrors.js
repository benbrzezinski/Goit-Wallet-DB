export const handleValidationError = (err, res, next) => {
  if (err.name !== "ValidationError") {
    return next(err);
  }

  res.status(400).json({
    status: 400,
    statusText: "Bad Request",
    result: { message: err.message },
  });
};
