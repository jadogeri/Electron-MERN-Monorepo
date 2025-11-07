
import { Schema } from 'mongoose';
import { UserType } from '../../common/types/UserType.type';
// import { IUser } from '../../common/interfaces/IUser.interface';


export class UserSchema {

    private userSchema : Schema ;

    constructor(){
        this.userSchema  = new Schema<UserType>({
            username: {
                type: String,
                required: [true, "Please add the user name"],
                unique: [true, "username already taken"],
                trim: true,
            },
            email: {
                type: String,
                required: [true, "Please add the user email address"],
                unique: [true, "Email address already taken"],
                //lowercase: true,
                trim: true,
            },
            age: {
                type: Number,
                required: [true, "Please add the user age"],
                min: [0, " age cannot be less than 0"]
            }
        },
            {
                timestamps: true,
            });

    }

    public getInstance(): Schema<UserType> {
        return this.userSchema;
    }
    
}



