import mongoose, { Types } from "mongoose";
import { UserType } from "../types/UserType.type";
import { UserCreateRequestDTO } from "../dtos/request/UserCreateRequestDTO.dto";
import { UserUpdateRequestDTO } from "../dtos/request/UserUpdateRequestDTO.dto";
// import { IUser } from "./IUser.interface";

export interface IUserRepository {

    findByEmail(email : string): Promise<any | null>

    findByUsername(username : string): Promise<any | null>;

    findAll(): Promise<any | null>

    findById(id: Types.ObjectId): Promise<any | null>

    create(user : UserCreateRequestDTO): Promise<any | null>;

    deleteAll(): Promise<any | null>;

    deleteById(id :  mongoose.Types.ObjectId): Promise<any | null>;

    update(id :  mongoose.Types.ObjectId, user : UserUpdateRequestDTO) : Promise<any | null>;

    remove(_id :  mongoose.Types.ObjectId): Promise<any | null>;

}