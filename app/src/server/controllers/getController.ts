import UserRepository from "../repositories/UserRepository.repository";
import UserModel from "../../database/models/UserModel.model"
import UserService from "../services/UserService.service";
import UserController from "./UserController.controller";



export const getController = ()=>{

    const userRepository = new UserRepository(UserModel);
    const userService = new UserService(userRepository);
    const userController = new UserController(userService);
    return userController;
}

