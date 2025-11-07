import { Request, Response }  from "express"   
import { UserCreateRequestDTO } from "../dtos/request/UserCreateRequestDTO.dto"; 
import { UserCreateResponseDTO } from "../dtos/response/UserCreateResponseDTO.dto";
import { ErrorResponse } from "../exceptions/ErrorResponse";
import { UserGetAllResponseDTO } from "../dtos/response/UserGetAllResponseDTO.dto";
import { UserType } from "../types/UserType.type";
import { ObjectId, Types } from "mongoose";
import { UserGetSingleResponseDTO } from "../dtos/response/UserGetSingleResponseDTO.dto";
import { UserDeleteSingleResponseDTO } from "../dtos/response/UserDeleteSingleResponseDTO.dto";
import { UserUpdateRequestDTO } from "../dtos/request/UserUpdateRequestDTO.dto";
import { UserUpdateResponseDTO } from "../dtos/response/UserUpdateResponseDTO.dto";

export interface IUserService {

    createUser(req: UserCreateRequestDTO) : Promise<UserCreateResponseDTO | ErrorResponse>;
    
    getUser(id: Types.ObjectId) : Promise<UserGetSingleResponseDTO | ErrorResponse>;

    getUsers() : Promise<UserType[] | ErrorResponse>;

    updateUser(id: Types.ObjectId, userRequest: UserUpdateRequestDTO) : Promise<UserUpdateResponseDTO | ErrorResponse>;

    deleteUser(id: Types.ObjectId) : Promise<UserDeleteSingleResponseDTO | ErrorResponse >;

    deleteUsers(req: Request<{}, {}, Request>, res: Response) : Promise<void> ;

}