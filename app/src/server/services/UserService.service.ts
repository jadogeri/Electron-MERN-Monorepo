    // src/services/user.service.ts
import { IUserService } from '../../common/interfaces/IUserService.interface';
import { Request, Response } from 'express';
import { UserCreateRequestDTO } from '../../common/dtos/request/UserCreateRequestDTO.dto';
import { IUserRepository } from '../../common/interfaces/IUserRepository.interface';
import { ErrorResponse } from '../../common/exceptions/ErrorResponse';
import { UserCreateResponseDTO } from '../../common/dtos/response/UserCreateResponseDTO.dto';
import mongoose, { ObjectId, Types } from 'mongoose';
import { UserGetAllResponseDTO } from '../../common/dtos/response/UserGetAllResponseDTO.dto';
import { UserType } from '../../common/types/UserType.type';
import { UserGetSingleResponseDTO } from '../../common/dtos/response/UserGetSingleResponseDTO.dto';
import { UserDeleteSingleResponseDTO } from '../../common/dtos/response/UserDeleteSingleResponseDTO.dto';
import { UserUpdateRequestDTO } from '../../common/dtos/request/UserUpdateRequestDTO.dto';
import { UserUpdateResponseDTO } from '../../common/dtos/response/UserUpdateResponseDTO.dto';
import { UserDeleteAllResponseDTO } from '../../common/dtos/response/UserDeleteAllResponseDTO.dto';


class UserService implements IUserService{

    private userRepository: IUserRepository;
    
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
    async getUser(id: Types.ObjectId): Promise<UserGetSingleResponseDTO | ErrorResponse> {
        
        const user = await this.userRepository.findById(id);
        if (!user)  {
                console.log("calling get users no users");
            return new ErrorResponse(409,`No user found with id ${id}!`);
        }
        return user;
    }
    
    async getUsers(): Promise<UserType[] | ErrorResponse> {
        
            console.log("calling get users in servic")

        const users : UserType[]= await this.userRepository.findAll();;
        if (users instanceof ErrorResponse)  {
                console.log("calling get users no users");
            return new ErrorResponse(409,"Username already taken!");
        }
        return users;

    }
    async updateUser(id: Types.ObjectId, userRequest: UserUpdateRequestDTO): Promise<UserUpdateResponseDTO | ErrorResponse> {

        try{
            const {username, email, age} = userRequest;
            const user = await this.userRepository.findById(id);
            if (!user)  {
                    console.log("calling get users no users");
                return new ErrorResponse(409,`No user found with id ${id}!`);
            }
            const userByEmailAvailable  = await this.userRepository.findByEmail(email as string);
            
            if (userByEmailAvailable) {
                return new ErrorResponse(409, "Email already taken!");
            }

            const userByUsernameAvailable  = await this.userRepository.findByUsername(username as string);
            if (userByUsernameAvailable) {
                return new ErrorResponse(409,"Username already taken!");
            }
            const updatedUser = await this.userRepository.update(id, userRequest);
            return updatedUser


        }catch(error: unknown){
            if(error instanceof Error){
                return new ErrorResponse(409,"error!" + JSON.stringify(error)); 
            }
            else
                return new ErrorResponse(500,"database error!");   
            
        }
            
    }
    
    async deleteUser(id: Types.ObjectId): Promise<UserDeleteSingleResponseDTO | ErrorResponse> {
        try {  
        const deletedUser = await this.userRepository.deleteById(id);
            if (deletedUser) {
            console.log('User deleted successfully:', deletedUser);
            const userResponse : UserDeleteSingleResponseDTO ={
                message : `successfully deleted user with id ${id}`
            }

            return userResponse;
            } else {
            console.log('No user found with the given ID:', id);
                return new ErrorResponse(409,`user with id ${id} not found!`); 
            }
        } catch (error: unknown) {
            console.error('Error deleting user:', error);
            if(error instanceof Error){
                return new ErrorResponse(409,"error!" + JSON.stringify(error)); 
            }
            else
                return new ErrorResponse(500,"database error!");         
            }
    }
    async deleteUsers(): Promise<UserType[] | ErrorResponse> {

        try{
            const users  : UserType[]= await this.userRepository.deleteAll();;

            return users;
        }catch(err: unknown){
            if (err instanceof Error)  {
                console.log("calling get users no users");
                return new ErrorResponse(409,err.name + "\n"+ err.message + "\n" + err.stack);
            }
            return new ErrorResponse(500,"Database Error");

        }
    }


}

    
export default UserService;
