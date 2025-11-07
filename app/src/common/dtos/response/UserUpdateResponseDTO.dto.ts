import mongoose from "mongoose";

export type UserUpdateResponseDTO = {
    username: string;
    email: string;
    age: number;
    createdAt?: Date,
    updatedAt?: Date,
    _id: mongoose.Types.ObjectId
}
