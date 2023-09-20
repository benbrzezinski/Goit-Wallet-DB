const express = require("express");
const transactionsController = require("../controllers/transactions");

const router = express.Router();

router.get("/", transactionsController.get);

router.get("/:id", transactionsController.getById);

router.get("/categories/:id", transactionsController.getCategory);

router.post("/", transactionsController.create);

router.delete("/:id", transactionsController.remove);

router.put("/:id", transactionsController.update);

module.exports = router;
