import React, { useState } from 'react'
import "./InfoTable.css"
import Dropdown from '../../Dropdown/Dropdown'
import { useLazyGetAllUsersQuery, useLazyGetSingleUserQuery, useUpdateUserMutation } from '../../../redux/api/user/user.api'
import mongoose, { Types } from 'mongoose'
import { InfoTableProps } from '../../../../common/types/InfoTableProps'

const InfoTable : React.FC<InfoTableProps> = ({users, setUsers }) => {

    const [getAllUserstrigger, { data: getAllUsers, error, isLoading }] = useLazyGetAllUsersQuery();
    const [getSingleUsertrigger, { data: getSingleUsers, }] = useLazyGetSingleUserQuery();
    const [updateUserTrigger] = useUpdateUserMutation();

    const [selectedSingleValue, setSelectedSingleValue] = useState(users[0]);
    
        
    const handleSelectedSingleChange = (value: any) => {
        setSelectedSingleValue(value);
      };

      const handleUpdateUserChange = async () => {
 
        alert(JSON.stringify(users[0], null, 4))
        const u = await updateUserTrigger({
          id: users[0]._id,
          body:{
            username:"jogn snow" as string,
            age:1000 as number,
            email:"josn@email.com" as string
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
  return (
        <table className="my-table">
          <thead>
            <tr>
              <th>Press</th>              
              <th>Method</th>
              <th>Description</th>
              <th>Inputs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td onClick={()=>{handleGetAllUsers()}}>Call API</td>
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
              <td onClick={()=>{handleGetSingleUser(selectedSingleValue._id as Types.ObjectId)}}>Call API</td>

              <td>GET</td>
              <td>Returns Single User</td>
              <td ><Dropdown appUsers={users}  selectedValue={selectedSingleValue} onSelectChange={handleSelectedSingleChange}/></td>
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
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

              </td>

            </tr>
                        <tr>
                                          <td onClick={()=>{alert("delete all")}}>Call API</td>

              <td>DELETE</td>
              <td>Remove All Users</td>
              <td></td>
            </tr>
            <tr>
                  <td onClick={()=>{alert("delete single")}}>Call API</td>

              <td>DELETE</td>
              <td>Remove Single User</td>
              <td ><Dropdown appUsers={users}  selectedValue={selectedSingleValue} onSelectChange={handleSelectedSingleChange}/></td>
            </tr>
          </tbody>
        </table>
  )
}

export default InfoTable