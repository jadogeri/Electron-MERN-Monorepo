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
import { IUser } from '../../common/interfaces/IUser.interface';
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
  createUser = asyncHandler(async (req: Request, res: Response) : Promise<void> => {

    const { username, email, age } : UserCreateRequestDTO= req.body;
    if(!username || !email || !age){

      errorBroadcaster(res, 400,"All fields are required")
    }   

   const userRequest : UserCreateRequestDTO = { username, email, age };
    
     //calling user service
    const userResponse : ErrorResponse | UserCreateResponseDTO = await this.userService.createUser(userRequest);   

    if(userResponse instanceof ErrorResponse){
      errorBroadcaster(res, userResponse.getCode(), userResponse.getMessage())
    }else{
      // SEND RESPONSE  
      res.status(201).send(userResponse);
    }

  });
  getUser(req: Request<{}, {}, Request>, res: Response): Promise<void> {
    throw new Error('Method not implemented.');
  }
  getUsers(req: Request<{}, {}, Response>, res: Response): Promise<void> {
    throw new Error('Method not implemented.');
  }
  updateUser(req: Request<{}, {}, Request>, res: Response): Promise<void> {
    throw new Error('Method not implemented.');
  }
  deleteUser(req: Request<{}, {}, Request>, res: Response): Promise<void> {
    throw new Error('Method not implemented.');
  }
  deleteUsers(req: Request<{}, {}, Request>, res: Response): Promise<void> {
    throw new Error('Method not implemented.');
  }

 
}

export default UserController;
