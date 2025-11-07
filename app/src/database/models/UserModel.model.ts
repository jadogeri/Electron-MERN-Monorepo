import mongoose, { Model } from 'mongoose';

import { UserType } from '../../common/types/UserType.type';
import { UserSchema } from '../schemas/UserSchema.schema';
// import { IUser } from '../../common/interfaces/IUser.interface';

class UserModel{

    private schema: UserSchema;

    constructor(){
        this.schema = new UserSchema();
    }

    public getInstance():  Model<UserType>{

        const userSchema = this.schema.getInstance();   
        
        const User: Model<UserType>  = mongoose.model<UserType>("User", userSchema);

        return User;
    }
}

const User = new UserModel().getInstance();

export default User;