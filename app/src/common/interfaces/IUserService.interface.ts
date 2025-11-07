import { Request, Response }  from "express"   
import { UserCreateRequestDTO } from "../dtos/request/UserCreateRequestDTO.dto"; 
import { UserCreateResponseDTO } from "../dtos/response/UserCreateResponseDTO.dto";
import { ErrorResponse } from "../exceptions/ErrorResponse";

export interface IUserService {

    createUser(req: UserCreateRequestDTO) : Promise<UserCreateResponseDTO | ErrorResponse>;
    
    getUser(req: Request<{}, {}, Request>, res: Response) : Promise<void>;

    getUsers(req: Request<{}, {}, Response>, res: Response) : Promise<void>;

    updateUser(req: Request<{}, {}, Request>, res: Response) : Promise<void>;

    deleteUser(req: Request<{}, {}, Request>, res: Response) : Promise<void>;

    deleteUsers(req: Request<{}, {}, Request>, res: Response) : Promise<void> ;

}