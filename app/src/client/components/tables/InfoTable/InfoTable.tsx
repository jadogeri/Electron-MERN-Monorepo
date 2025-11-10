import React, { useState } from 'react'
import "./InfoTable.css"


const InfoTable = () => {

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
              {/* <td onClick={()=>{handleCreateUser()}}>Call API</td> */}
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
              {/* <td onClick={()=>{handleGetAllUsers()}}>Call API</td> */}

              <td>GET</td>
              <td>Returns All Users</td>
              <td></td>
            </tr>
            <tr>
              {/* <td onClick={()=>{handleGetSingleUser(selectedSingleValue?._id as Types.ObjectId)}}>Call API</td> */}

              <td>GET</td>
              <td>Returns Single User</td>
              {/* <td ><Dropdown appUsers={users}  selectedValue={selectedGetUser?._id as mongoose.Types.ObjectId} setSelectedValue={setSelectedGetUser} onSelectChange={handleSelectedChange}/></td> */}
            </tr>
            <tr>
                              {/* <td onClick={()=>{handleUpdateUserChange()}}>Call API</td> */}

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
              {/* <td ><Dropdown appUsers={users}  selectedValue={selectedUpdateUser?._id as mongoose.Types.ObjectId} setSelectedValue={setSelectedUpdateUser} onSelectChange={handleSelectedChange}/></td> */}
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

              </td>

            </tr>
                        <tr>
                  {/* <td onClick={()=>{ handleDeleteAllUsers()}}>Call API</td> */}

              <td>DELETE</td>
              <td>Remove All Users</td>
              <td></td>
            </tr>
            <tr>
                  {/* <td onClick={()=>{ handleDeleteSingleUser(selectedDeleteUser?._id as Types.ObjectId)}}>Call API</td> */}

              <td>DELETE</td>
              <td>Remove Single User</td>
              {/* <td ><Dropdown appUsers={users}  selectedValue={selectedDeleteUser} setSelectedValue={setSelectedDeletedUser} onSelectChange={handleSelectedChange}/></td> */}
            </tr>


          </tbody>
          
        </table>
  )
}

export default InfoTable