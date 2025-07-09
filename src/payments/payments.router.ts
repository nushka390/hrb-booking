import express from "express";
import {
  createpaymentsController,

  getpaymentsController,
  getpaymentsByIdController,
  updatepaymentsController,
  deletepaymentsController
} from "../payments/payments.controller";

const router = express.Router();
router.post("/", (req, res, next) => {
  Promise.resolve(createpaymentsController(req, res,)).catch(next);
});

// router.get("/", getAllBookingsController);

router.route("/").get((req, res, next) => {
  Promise.resolve(getpaymentsController(req, res)).catch(next);
});

router.get("/:id", (req, res, next) => {
  Promise.resolve(getpaymentsByIdController(req, res)).catch(next);
});

router.put("/:id", (req, res, next) => {
  Promise.resolve(updatepaymentsController(req, res)).catch(next);
});

router.delete("/:id", (req, res, next) => {
  Promise.resolve(deletepaymentsController(req, res)).catch(next);
});

export default router;