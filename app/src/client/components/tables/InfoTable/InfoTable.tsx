import React from 'react'
import "./InfoTable.css"
import { InfoTableProps } from '../../../../common/types/InfoTableProps'
import InputField from '../../InputField/InputField'
import { UserType } from '../../../../common/types/UserType.type'
import Dropdown from '../../Dropdown/Dropdown'
import mongoose from 'mongoose'

const InfoTable : React.FC<InfoTableProps> = ({
   users, 
  handleGetUser, handleGetUsers, handleCreateUser,  handleUpdateUser,  handleDeleteUser,  handleDeleteUsers,

  handleSetPostAgeInputValue,
  handleSetPostEmailInputValue,
  handleSetPostUsernameInputValue,
  postAgeInputValue,
  postEmailInputValue,
  postUsernameInputValue,
  handleSetPutAgeInputValue,
  handleSetPutEmailInputValue,
  handleSetPutUsernameInputValue,
  putAgeInputValue,
  putEmailInputValue,
  putUsernameInputValue,
  selectedDeleteUserID,
  setSelectedDeletedUserID,
  selectedUpdateUserID,
  setSelectedUpdateUserID,
  selectedGetUserID,
  setSelectedGetUserID

}) => {


  const handleSelectedChange = (value: any, callback:  React.Dispatch<React.SetStateAction<UserType>> ) => {
    callback(value);
  };

  

  return(
  <table className="my-table" >
    
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
        <td onClick={handleCreateUser}>Call API</td>
        <td>POST</td>
        <td>Create User</td>
        <td>
          <div className="container">
             <InputField 
              type='text' label='Username' id='PostUsername' value={postUsernameInputValue}    onChange={handleSetPostUsernameInputValue}
               />
             <InputField 
              type='text' label='Email' id='PostEmail' value={postEmailInputValue}    onChange={handleSetPostEmailInputValue}
               />
             <InputField 
              type='number' label='Age' id='PostAge' value={postAgeInputValue}    onChange={handleSetPostAgeInputValue}
               />
          </div>
        </td>
      </tr>
      <tr>
        <td onClick={handleGetUsers}>Call API</td>

        <td>GET</td>
        <td>Returns All Users</td>
        <td></td>
      </tr>
      <tr>
        <td onClick={handleGetUser}>Call API</td>

        <td>GET</td>
        <td>Returns Single User</td>
        <td ><Dropdown appUsers={users}  selectedValue={selectedGetUserID as mongoose.Types.ObjectId} setSelectedValue={setSelectedGetUserID} onSelectChange={handleSelectedChange}/></td>
      </tr>
      <tr>
        <td onClick={handleDeleteUser}>Call API</td>

        <td>DELETE</td>
        <td>Remove Single User</td>
        <td ><Dropdown appUsers={users}  selectedValue={selectedDeleteUserID} setSelectedValue={setSelectedDeletedUserID} onSelectChange={handleSelectedChange}/></td>
      </tr>
      <tr>
        <td onClick={handleUpdateUser}>Call API</td>
        <td>PUT</td>
        <td>Update User</td>
        <td>
          <div className="container">
            <td ><Dropdown appUsers={users}  selectedValue={selectedUpdateUserID} setSelectedValue={setSelectedUpdateUserID} onSelectChange={handleSelectedChange}/></td>

             <InputField 
              type='text' label='Username' id='PutUsername' value={putUsernameInputValue}    onChange={handleSetPutUsernameInputValue}
               />
             <InputField 
              type='text' label='Email' id='PutEmail' value={putEmailInputValue}    onChange={handleSetPutEmailInputValue}
               />
             <InputField 
              type='number' label='Age' id='PutAge' value={putAgeInputValue}    onChange={handleSetPutAgeInputValue}
               />
          </div>
        </td>
      </tr>
      <tr>
            <td onClick={handleDeleteUsers}>Call API</td>

        <td>DELETE</td>
        <td>Remove All Users</td>
        <td></td>
      </tr>

      </tbody>
      
    </table>
  )
}

export default InfoTable