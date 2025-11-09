import mongoose, { Model, Types } from "mongoose";
import { IUserRepository } from "../../common/interfaces/IUserRepository.interface";
import { UserCreateRequestDTO } from "../../common/dtos/request/UserCreateRequestDTO.dto";
import { IUser } from "../../common/interfaces/IUser.interface";
import { UserType } from "../../common/types/UserType.type";
import { UserUpdateRequestDTO } from "../../common/dtos/request/UserUpdateRequestDTO.dto";

class UserRepository implements IUserRepository{

    private userModel:  Model<UserType>

    constructor(userModel : Model<UserType>){

        this.userModel = userModel;        
    }
    /**
     * Retrieves a user from the database by their email address.
     * @param email - The email address of the user to find.
     * @returns A promise that resolves to the user object or null if not found.
     * @throws Throws an error if the database query fails.
     */
    async findByEmail(email : string) {

        return this.userModel.findOne({ email : email });
    }

    /**
     * Retrieves a user from the database by their username.
     * @param username - The username of the user to be retrieved.
     * @returns A promise that resolves to the user object or null if not found.
     * @throws Throws an error if the database query fails.
     */
    async findByUsername(username : string) {
        return this.userModel.findOne({ username : username });
    }

        /**
     * Retrieves a user from the database by their username.
     * @param username - The username of the user to be retrieved.
     * @returns A promise that resolves to the user object or null if not found.
     * @throws Throws an error if the database query fails.
     */
    async findAll() {

        const users = this.userModel.find();

        return users;
    }
      /**
     * Retrieves a user from the database by their username.
     * @param username - The username of the user to be retrieved.
     * @returns A promise that resolves to the user object or null if not found.
     * @throws Throws an error if the database query fails.
     */
    async findById(id: Types.ObjectId) {

        const user = this.userModel.findOne(id);

        return user;
    }
    /**
     * Creates a new user in the database.
     * @param user - An object implementing the IUser interface representing the user to be created.
     * @returns A promise that resolves to the created user object.
     * @throws Throws an error if the user creation fails due to validation or database issues.
     */
    async create(user : UserCreateRequestDTO) {

        return  this.userModel.create(user as IUser);
    }

    /**
     * Deletes a user from the database by their unique identifier.
     * @param _id - The ObjectId of the user to be deleted.
     * @returns A promise that resolves to the deleted user document or null if not found.
     * @throws MongooseError if there is an issue with the database operation.
     */
    async deleteAll() {
        const emptyUsers: UserType[] = [];
        const response = this.userModel.deleteMany({});

        if((await response).acknowledged === true){
            return emptyUsers;
        }
        throw new Error("error occured")

    }

    /**
     * Deletes a user from the database by their unique identifier.
     * @param _id - The ObjectId of the user to be deleted.
     * @returns A promise that resolves to the deleted user document or null if not found.
     * @throws MongooseError if there is an issue with the database operation.
     */
    async deleteById(id :  mongoose.Types.ObjectId) {
        return this.userModel.findByIdAndDelete(id);
    }

    /**
     * Updates a user document in the database by its ID. 
     * If the user does not exist, a new document will be created. 
     * @param _id - The ID of the user to update. 
     * @param user - The user data to update or insert. 
     * @returns A promise that resolves to the updated or created user document. 
     * @throws MongooseError if the update operation fails.
     */
    async update(id :  mongoose.Types.ObjectId, user : UserUpdateRequestDTO) {
        return this.userModel.findOneAndUpdate({ _id: id }, {$set: user},{upsert: true, returnDocument: 'after' });
    }

        /**
     * Deletes a user from the database by their unique identifier.
     * @param _id - The ObjectId of the user to be deleted.
     * @returns A promise that resolves to the deleted user document or null if not found.
     * @throws MongooseError if there is an issue with the database operation.
     */
    async remove(_id :  mongoose.Types.ObjectId) {
    return this.userModel.findByIdAndDelete(_id);
    }

}

export default UserRepository;
