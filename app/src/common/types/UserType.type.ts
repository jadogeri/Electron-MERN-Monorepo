import mongoose, { Date, Types } from "mongoose";

export type UserType =  {
    username: string;
    email: string;
    age: number;
    _id?: Types.ObjectId

}
