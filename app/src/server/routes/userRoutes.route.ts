import express from "express";
import { getController } from "../controllers/getController";
import UserController from "../controllers/UserController.controller";

const userController : UserController = getController();

export const router = express.Router();

router.post("/", userController.createUser);

router.get("/", userController.getUsers);

router.get("/:id", userController.getUsers);

router.put("/:id", userController.updateUser);

router.delete("/:id", userController.deleteUser);

router.delete("/",userController.deleteUsers);

