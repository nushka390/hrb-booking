import express from "express";
import {
  createroomsController,

  getroomsController,
  getroomsByIdController,
  updateroomsController,
  deleteroomsController
} from "../rooms/rooms.controller";

const router = express.Router();
router.post("/rooms", (req, res, next) => {
  Promise.resolve(createroomsController(req, res,)).catch(next);
});



router.get("/rooms", (req, res, next) => {
  Promise.resolve(getroomsController(req, res)).catch(next);
});

router.get("/:id", (req, res, next) => {
  Promise.resolve(getroomsByIdController(req, res)).catch(next);
});

router.put("/:id", (req, res, next) => {
  Promise.resolve(updateroomsController(req, res)).catch(next);
});

router.delete("/:id", (req, res, next) => {
  Promise.resolve(deleteroomsController(req, res)).catch(next);
});

export default router;