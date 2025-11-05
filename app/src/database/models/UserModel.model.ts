import mongoose, { Model } from 'mongoose';

import { UserType } from '../../common/types/User.type';
import { UserSchema } from '../schemas/UserSchema.schema';

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