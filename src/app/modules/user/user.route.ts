import express from "express";
import {
  createUser,
  getAdminUsers,
  getUserById,
  getUsers,
} from "./user.controller";
const router = express.Router();

router.get("/", getUsers);
// Finding one or more setting specific & need to set it up ***params
router.get("/admins", getAdminUsers);
router.get("/:id", getUserById);
router.post("/create-user", createUser);

export default router;
