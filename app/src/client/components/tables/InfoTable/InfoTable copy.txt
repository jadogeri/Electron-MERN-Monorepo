import React, { useState } from 'react'
import "./InfoTable.css"
import Dropdown from '../../Dropdown/Dropdown'
import { useCreateUserMutation, useDeleteAllUsersMutation, useDeleteSingleUserMutation, useLazyGetAllUsersQuery, useLazyGetSingleUserQuery, useUpdateUserMutation } from '../../../redux/api/user/user.api'
import mongoose, { Types } from 'mongoose'
import { InfoTableProps } from '../../../../common/types/InfoTableProps'
import { UserType } from '../../../../common/types/UserType.type'

const InfoTable : React.FC<InfoTableProps> = ({users, setUsers }) => {

    const [getAllUserstrigger, { data: getAllUsers, error, isLoading }] = useLazyGetAllUsersQuery();
    const [getSingleUsertrigger, { data: getSingleUsers, }] = useLazyGetSingleUserQuery();
    const [updateUserTrigger] = useUpdateUserMutation();
    const [deleteSingleUserTrigger] = useDeleteSingleUserMutation();
    const [deleteAllUsers, {isLoading: isDeletingAllUsers}] = useDeleteAllUsersMutation();
    const [createUser, {isLoading: isCreatingAllusers}] = useCreateUserMutation();

    const [selectedSingleValue, setSelectedSingleValue] = useState(users[0]);
     const [selectedDeleteUser, setSelectedDeletedUser] = useState(users[0]);
     const [selectedUpdateUser, setSelectedUpdateUser] = useState(users[0]);
     const [selectedGetUser, setSelectedGetUser] = useState(users[0]);

    
      const handleSelectedChange = (value: any, callback:  React.Dispatch<React.SetStateAction<UserType>> ) => {
        callback(value);
      };
    const handleSelectedSingleChange = (value: any) => {
        setSelectedSingleValue(value);
      };

      const handleUpdateUserChange = async () => {
 
        alert(JSON.stringify(users[0], null, 4))
        const u = await updateUserTrigger({
          id: users[0]._id,
          body:{
            username:"jognfgsfsff snow" as string,
            age:100 as number,
            email:"josnsfg fs@email.com" as string
          }
        });

        if(u instanceof Error){
          alert(JSON.stringify(u, null, 4))
        }
      };
    


  const handleGetAllUsers = async ()=>{
    try{
    const u = await getAllUserstrigger();
    console.log(u.data)
    alert(JSON.stringify(u.data, null, 4))

   
    }catch(e: unknown){
      if(e instanceof Error){
        console.log(JSON.stringify(e));
      }
    }

  }
    const handleGetSingleUser = async (id: Types.ObjectId)=>{
    try{
      console.log("id passed to function :", id)
    const u = await getSingleUsertrigger(id);
    console.log(u.data)
    alert(JSON.stringify(u.data, null, 4))

   
    }catch(e: unknown){
      if(e instanceof Error){
        console.log(JSON.stringify(e));
      }
    }

  }

      const handleDeleteSingleUser = async (id: Types.ObjectId)=>{
    try{
      console.log("id passed to function :", id)
    const u = await deleteSingleUserTrigger(id);
    console.log(u.data)
    alert(JSON.stringify(u.data, null, 4))

   
    }catch(e: unknown){
      if(e instanceof Error){
        console.log(JSON.stringify(e));
      }
    }

  }

      const handleDeleteAllUsers = async ()=>{
    try{
      console.log("calling deleting all users function:")
    const u = await deleteAllUsers();
    console.log(u.data)
    alert(JSON.stringify(u.data, null, 4))

   
    }catch(e: unknown){
      if(e instanceof Error){
        console.log(JSON.stringify(e));
      }
    }

  }

      const handleCreateUser = async ()=>{

      console.log("calling deleting all users function:")
    const u = await createUser({
      username:"jake fdd doknt",
      age:40,
      email:"jake fromew ddstatefarm@gmail.com"
    });
    // console.log(u.data)
    // alert(JSON.stringify(u.data, null, 4))

    
    if(u?.error){
        alert(JSON.stringify(u));
      }
    

  }
  return (
        <table className="my-table">
          
          <thead>
                     {/* <> {JSON.stringify(selectedGetUser)}</> */}
   
            <tr>
              <th>Press</th>              
              <th>Method</th>
              <th>Description</th>
              <th>Inputs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td onClick={()=>{handleCreateUser()}}>Call API</td>
              <td>POST</td>
              <td>Create User</td>
              <td //colSpan={2}
              >
                <tr>
                    <td>username</td>
                    <td>email</td>
                    <td>age</td>
                </tr>                
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
              </td>
            </tr>
            <tr>
              <td onClick={()=>{handleGetAllUsers()}}>Call API</td>

              <td>GET</td>
              <td>Returns All Users</td>
              <td></td>
            </tr>
            <tr>
              <td onClick={()=>{handleGetSingleUser(selectedSingleValue?._id as Types.ObjectId)}}>Call API</td>

              <td>GET</td>
              <td>Returns Single User</td>
              <td ><Dropdown appUsers={users}  selectedValue={selectedGetUser?._id as mongoose.Types.ObjectId} setSelectedValue={setSelectedGetUser} onSelectChange={handleSelectedChange}/></td>
            </tr>
            <tr>
                              <td onClick={()=>{handleUpdateUserChange()}}>Call API</td>

              <td>PUT</td>
              <td>Update a User</td>
              <td //colSpan={2}
              >
                <tr>
                    <td>id</td>
                    <td>username</td>
                    <td>email</td>
                    <td>age</td>
                </tr>                
                <tr>
              <td ><Dropdown appUsers={users}  selectedValue={selectedUpdateUser?._id as mongoose.Types.ObjectId} setSelectedValue={setSelectedUpdateUser} onSelectChange={handleSelectedChange}/></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

              </td>

            </tr>
                        <tr>
                  <td onClick={()=>{ handleDeleteAllUsers()}}>Call API</td>

              <td>DELETE</td>
              <td>Remove All Users</td>
              <td></td>
            </tr>
            <tr>
                  <td onClick={()=>{ handleDeleteSingleUser(selectedDeleteUser?._id as Types.ObjectId)}}>Call API</td>

              <td>DELETE</td>
              <td>Remove Single User</td>
              <td ><Dropdown appUsers={users}  selectedValue={selectedDeleteUser} setSelectedValue={setSelectedDeletedUser} onSelectChange={handleSelectedChange}/></td>
            </tr>
                                                   <>{selectedUpdateUser}</>                                          <>{selectedDeleteUser}</>

                                                                                    <>{selectedGetUser}</>

          </tbody>
          
        </table>
  )
}

export default InfoTable