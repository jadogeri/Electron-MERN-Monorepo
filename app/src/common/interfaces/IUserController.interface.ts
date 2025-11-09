

import { Request, Response }  from "express"   
import { UserCreateRequestDTO } from "../dtos/request/UserCreateRequestDTO.dto"; 
import { UserUpdateRequestBody } from "../dtos/request/UserUpdateRequestBody.dto";
import { UserParams } from "../types/UserParams.type";

export interface IUserController {

    createUser(req: Request<{}, {}, UserCreateRequestDTO>, res: Response) : Promise<void>;
    
    getUser(req: Request< UserParams, {}, {}>, res: Response) : Promise<void>;

    getUsers(req: Request<{}, {}, Response>, res: Response) : Promise<void>;

    updateUser(req: Request<UserParams, {}, UserUpdateRequestBody>, res: Response) : Promise<void>;

    deleteUser(req: Request<UserParams, {}, {}>, res: Response) : Promise<void>;

    deleteUsers(req: Request<{}, {}, Request>, res: Response) : Promise<void> ;

}