/**
 * @author Joseph Adogeri
 * @version 1.0
 * @since 09-FEB-2025
 *
 */
import { Response, Request } from 'express';
import { IUserController } from '../../common/interfaces/IUserController.interface';
import { UserCreateRequestDTO } from '../../common/dtos/request/UserCreateRequestDTO.dto';
import { IUserService } from '../../common/interfaces/IUserService.interface';
import { ErrorResponse } from '../../common/exceptions/ErrorResponse';
import { errorBroadcaster } from '../utils/errorBroadcaster';
import { UserCreateResponseDTO } from '../../common/dtos/response/UserCreateResponseDTO.dto';
import { UserGetAllResponseDTO } from '../../common/dtos/response/UserGetAllResponseDTO.dto';
import mongoose from 'mongoose';
import { UserGetSingleResponseDTO } from '../../common/dtos/response/UserGetSingleResponseDTO.dto';
import { UserDeleteSingleResponseDTO } from '../../common/dtos/response/UserDeleteSingleResponseDTO.dto';
import { UserParams } from '../../common/types/UserParams.type';
import { UserUpdateRequestBody } from '../../common/dtos/request/UserUpdateRequestBody.dto';
import { UserUpdateRequestDTO } from '../../common/dtos/request/UserUpdateRequestDTO.dto';
import { UserUpdateResponseDTO } from '../../common/dtos/response/UserUpdateResponseDTO.dto';
import { UserDeleteAllResponseDTO } from '../../common/dtos/response/UserDeleteAllResponseDTO.dto';
import { UserCreateRequestBody } from '../../common/dtos/request/UserCreateRequestBody.dto';
const asyncHandler = require ("express-async-handler");



/**
*@desc Current user info
*@route POST /api/users/
*@access private
*/

class UserController implements IUserController{

  private userService : IUserService;

  constructor(userService: IUserService){

    this.userService = userService;
  }
  createUser = asyncHandler(async (req: Request<{}, {}, UserCreateRequestBody>, res: Response) : Promise<void> => {

    const { username, email, age } : UserCreateRequestBody = req.body;
    
    if(!username || !email || !age){
      errorBroadcaster(res, 400,"All fields are required")
    }   

    const userRequest : UserCreateRequestDTO = { ... req.body};
    
     //calling user service
    const userResponse : ErrorResponse | UserCreateResponseDTO = await this.userService.createUser(userRequest);   

    if(userResponse instanceof ErrorResponse){
      errorBroadcaster(res, userResponse.getCode(), userResponse.getMessage())
    }else{
      // SEND RESPONSE  
      res.status(201).send(userResponse);
    }

  });
  getUser= asyncHandler(async (req: Request<UserParams,{},{} >, res: Response): Promise<void>  => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
      errorBroadcaster(res, 400,"Not a valid id")
    }
    const objectID = new mongoose.Types.ObjectId(id);
     //calling user service
    const userResponse : ErrorResponse | UserGetSingleResponseDTO = await this.userService.getUser(objectID);   

    if(userResponse instanceof ErrorResponse){
      errorBroadcaster(res, userResponse.getCode(), userResponse.getMessage())
    }else{
      // SEND RESPONSE  
      res.status(201).send(userResponse);
    }    
  })
  getUsers= asyncHandler(async (req: Request<{}, {}, Response>, res: Response): Promise<void>  => {

    console.log("calling get users in controller")
     //calling user service
    const userResponse : ErrorResponse | UserGetAllResponseDTO = await this.userService.getUsers();   

    if(userResponse instanceof ErrorResponse){
           errorBroadcaster(res, userResponse.getCode(), userResponse.getMessage())
    }else{
      // SEND RESPONSE  
      res.status(200).send(userResponse);
    }

  })
  updateUser= asyncHandler(async (req: Request<UserParams, {}, UserUpdateRequestBody>, res: Response): Promise<void> => {
  const id = req.params.id; // Access the ID from the URL
  const { username, email, age } : UserUpdateRequestBody = req.body; // Destructure properties from the body

      if(!mongoose.Types.ObjectId.isValid(id)){
      errorBroadcaster(res, 400,"Not a valid id")
    }
    const objectID = new mongoose.Types.ObjectId(id);

    if(!username && !email && !age){
      errorBroadcaster(res, 400,"body cannot be empty")
    }
    console.log("calling get users in controller")
     //calling user service
    const userRequest : UserUpdateRequestDTO = {... req.body}
    const userResponse : ErrorResponse | UserUpdateResponseDTO = await this.userService.updateUser(objectID, userRequest);   

    if(userResponse instanceof ErrorResponse){
           errorBroadcaster(res, userResponse.getCode(), userResponse.getMessage())
    }else{
      // SEND RESPONSE  
      res.status(200).send(userResponse);
    }




  })
  deleteUser= asyncHandler(async (req: Request<UserParams, {}, {}>, res: Response): Promise<void>  => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
      errorBroadcaster(res, 400,"Not a valid id")
    }
    const objectID = new mongoose.Types.ObjectId(id);
     //calling user service
    const userResponse : ErrorResponse | UserDeleteSingleResponseDTO = await this.userService.deleteUser(objectID);   

    if(userResponse instanceof ErrorResponse){
      errorBroadcaster(res, userResponse.getCode(), userResponse.getMessage())
    }else{
      // SEND RESPONSE  
      res.status(200).send(userResponse);
    }
  })
  deleteUsers= asyncHandler(async (req: Request<{}, {}, {}>, res: Response): Promise<void> => {

    console.log("calling get users in controller")
     //calling user service
    const userResponse : ErrorResponse | UserDeleteAllResponseDTO = await this.userService.deleteUsers();   

    if(userResponse instanceof ErrorResponse){
           errorBroadcaster(res, userResponse.getCode(), userResponse.getMessage())
    }else{
      // SEND RESPONSE  
      res.status(200).send(userResponse);
    }
  })

 
}

export default UserController;
