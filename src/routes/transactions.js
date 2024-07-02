import express from "express";
import transactionsController from "../controllers/transactions.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", auth, transactionsController.get);

router.get("/categories/:id", auth, transactionsController.getCategory);

router.post("/", auth, transactionsController.create);

router.delete("/:id", auth, transactionsController.remove);

router.put("/:id", auth, transactionsController.update);

export default router;
