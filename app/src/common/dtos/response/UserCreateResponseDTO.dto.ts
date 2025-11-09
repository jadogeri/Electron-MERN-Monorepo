import mongoose from "mongoose";

export type UserCreateResponseDTO ={
    username: string;
    email: string;
    age: number;
    createdAt?: Date,
    updatedAt?: Date,
    _id: mongoose.Types.ObjectId
}
