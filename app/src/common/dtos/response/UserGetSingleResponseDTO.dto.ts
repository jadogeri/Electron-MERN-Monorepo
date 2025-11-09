import mongoose from "mongoose";

export type UserGetSingleResponseDTO={
    username: string;
    email: string;
    age: number;
    createdAt?: Date,
    updatedAt?: Date,
    _id: mongoose.Types.ObjectId
}

