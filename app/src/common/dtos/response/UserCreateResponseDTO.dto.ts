import mongoose from "mongoose";

export interface UserCreateResponseDTO{
    username: string;
    email: string;
    age: number;
    createdAt?: Date,
    updatedAt?: Date,
    _id: mongoose.Types.ObjectId
}
