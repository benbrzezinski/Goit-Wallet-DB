const express = require("express");
const transactionsController = require("../controllers/transactions");
const auth = require("../middlewares/auth");

const router = express.Router();

router.get("/", auth, transactionsController.get);

router.get("/:id", auth, transactionsController.getById);

router.get("/categories/:id", auth, transactionsController.getCategory);

router.post("/", auth, transactionsController.create);

router.delete("/:id", auth, transactionsController.remove);

router.put("/:id", auth, transactionsController.update);

module.exports = router;
