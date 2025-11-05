
import { Schema } from 'mongoose';
import { UserType } from '../../common/types/User.type';


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
                type: String,
                required: [true, "Please add the user password"],
                trim: true,
            },
  
            },
            {
                timestamps: true,
            }
        );

    }

    public getInstance(): Schema<UserType> {
        return this.userSchema;
    }
    
}


