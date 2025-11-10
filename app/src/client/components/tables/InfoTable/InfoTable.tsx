import React from 'react'
import "./InfoTable.css"
import Dropdown from '../../Dropdown/Dropdown'

const InfoTable = () => {
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
              <td onClick={()=>{alert("post")}}>Call API</td>
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
                              <td onClick={()=>{alert("get all")}}>Call API</td>

              <td>GET</td>
              <td>Returns All Users</td>
              <td></td>
            </tr>
            <tr>
                              <td onClick={()=>{alert("get single")}}>Call API</td>

              <td>GET</td>
              <td>Returns Single User</td>
              <td ><Dropdown /></td>
            </tr>
            <tr>
                              <td onClick={()=>{alert("put")}}>Call API</td>

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
              <td ><Dropdown /></td>
            </tr>
          </tbody>
        </table>
  )
}

export default InfoTable