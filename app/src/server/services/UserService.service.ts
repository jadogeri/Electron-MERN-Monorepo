    // src/services/user.service.ts
import { IUserService } from '../../common/interfaces/IUserService.interface';
import { Request, Response } from 'express';
import { UserCreateRequestDTO } from '../../common/dtos/request/UserCreateRequestDTO.dto';
import { IUserRepository } from '../../common/interfaces/IUserRepository.interface';
import { ErrorResponse } from '../../common/exceptions/ErrorResponse';
import { UserCreateResponseDTO } from '../../common/dtos/response/UserCreateResponseDTO.dto';
import mongoose from 'mongoose';


class UserService implements IUserService{

    private userRepository: IUserRepository;
    emailService: any;
    
    constructor(userRepository: IUserRepository){

        this.userRepository = userRepository;

    }        
    async  createUser(req: UserCreateRequestDTO): Promise<UserCreateResponseDTO | ErrorResponse> {

        try{

        const {username, email } = req;

        
        const userByEmailAvailable  = await this.userRepository.findByEmail(email as string);

        if (userByEmailAvailable) {
            return new ErrorResponse(409, "Email already taken!");
        }

        const userByUsernameAvailable  = await this.userRepository.findByUsername(username as string);
        if (userByUsernameAvailable) {
            return new ErrorResponse(409,"Username already taken!");
        }

        const createdUser = await this.userRepository.create(req)   
            
            const userResponse : UserCreateResponseDTO ={
                username: createdUser.username,
                email: createdUser.email,
                age: createdUser.age,
                _id: createdUser._id as mongoose.Types.ObjectId,  
                createdAt: createdUser.createdAt,
                updatedAt: createdUser.updatedAt              
            }
            // SEND RESPONSE
            return userResponse;
        }catch(e: unknown){
            console.log("error in service layer ", e)
            return new ErrorResponse(500,"mongo error!");

        }

    }
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

    
export default UserService;
