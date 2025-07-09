// import express from "express";
// import {
//   createbookingsController,
//   getbookingsController,
//   getbookingsByIdController,
//   updatebookingsController,
//   deletebookingsController
// } from "../bookings/bookings.controller";

// const router = express.Router();
// router.post("/hotels", (req, res, next) => {
//   Promise.resolve(createbookingsController(req, res,)).catch(next);
// });

// // router.get("/", getAllBookingsController);

// router.route("/hotels").get((req, res, next) => {
//   Promise.resolve(getbookingsController(req, res)).catch(next);
// });

// router.get("/hotels/:id", (req, res, next) => {
//   Promise.resolve(getbookingsByIdController(req, res)).catch(next);
// });

// router.put("/hotels:id", (req, res, next) => {
//   Promise.resolve(updatebookingsController(req, res)).catch(next);
// });

// router.delete("/hotels/:id", (req, res, next) => {
//   Promise.resolve(deletebookingsController(req, res)).catch(next);
// });

// export default router;
import express from "express";
import {
  createbookingController,
  getAllBookingsController,
 getBookingByIdController,
  updateBookingController,
  deleteBookingController
} from "../bookings/bookings.controller";

const router = express.Router();
router.post("/", createbookingController);

 router.get("/", getAllBookingsController);

//router.get("/").get(getAllBookingsController);

router.get("/:id", getBookingByIdController);

router.put("/:id", updateBookingController);

router.delete("/:id", deleteBookingController);

export default router;