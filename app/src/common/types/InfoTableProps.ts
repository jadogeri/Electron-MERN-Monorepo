import mongoose from "mongoose";
import { UserType } from "./UserType.type"

export type InfoTableProps = {
    users : UserType[];
    setUsers : React.Dispatch<React.SetStateAction<never[]>>
    handleGetUser: React.MouseEventHandler<HTMLDivElement>;
    handleGetUsers: React.MouseEventHandler<HTMLDivElement>;
    handleCreateUser: React.MouseEventHandler<HTMLDivElement>;
    handleUpdateUser: React.MouseEventHandler<HTMLDivElement>;
    handleDeleteUser: React.MouseEventHandler<HTMLDivElement>;
    handleDeleteUsers: React.MouseEventHandler<HTMLDivElement>;

    handleSetPostAgeInputValue: React.Dispatch<React.SetStateAction<number>>
    handleSetPostEmailInputValue: React.Dispatch<React.SetStateAction<string>>
    handleSetPostUsernameInputValue: React.Dispatch<React.SetStateAction<string>>
    postAgeInputValue:number;
    postEmailInputValue:string;
    postUsernameInputValue:string;

    
    handleSetPutAgeInputValue: React.Dispatch<React.SetStateAction<number>>
    handleSetPutEmailInputValue: React.Dispatch<React.SetStateAction<string>>
    handleSetPutUsernameInputValue: React.Dispatch<React.SetStateAction<string>>
    putAgeInputValue:number;
    putEmailInputValue:string;
    putUsernameInputValue:string;


    selectedDeleteUserID: mongoose.Types.ObjectId;
    setSelectedDeletedUserID:React.Dispatch<React.SetStateAction<mongoose.Types.ObjectId>>;
    selectedUpdateUserID: mongoose.Types.ObjectId;
    setSelectedUpdateUserID:React.Dispatch<React.SetStateAction<mongoose.Types.ObjectId>>;
    selectedGetUserID: mongoose.Types.ObjectId;
    setSelectedGetUserID:React.Dispatch<React.SetStateAction<mongoose.Types.ObjectId>>;

}



