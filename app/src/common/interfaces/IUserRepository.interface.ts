import mongoose from "mongoose";
import { UserType } from "../types/UserType.type";
import { UserCreateRequestDTO } from "../dtos/request/UserCreateRequestDTO.dto";
import { IUser } from "./IUser.interface";

export interface IUserRepository {

    findByEmail(email : string): Promise<any | null>

    findByUsername(username : string): Promise<any | null>;

    create(user : UserCreateRequestDTO): Promise<any | null>;

    delete(_id :  mongoose.Types.ObjectId): Promise<any | null>;

    update(_id :  mongoose.Types.ObjectId, user : IUser) : Promise<any | null>;

    remove(_id :  mongoose.Types.ObjectId): Promise<any | null>;

}