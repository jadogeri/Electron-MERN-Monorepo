import React from 'react'
import "./UserTable.css"
import { UserType } from '../../../../common/types/UserType.type'
import { UserTableProps } from '../../../../common/types/UserTableProps'

const UserTable : React.FC<UserTableProps> = ({users }) => {
  return (
  <div className="table-container">
    <table className="table-div" >
      <thead>
        <tr>
          <th>id</th>              
          <th>username</th>
          <th>email</th>
          <th>age</th>
        </tr>
      </thead>
      <tbody>
        {
            users?.map((user: UserType)=>{
                return (
                    <tr key={user._id as any}>
                        <td>{user?._id as any}</td>
                        <td>{user?.username}</td>
                        <td>{user?.email}</td>
                        <td>{user?.age}</td>
                    </tr>
                )

            })
        }       

      </tbody>
    </table>
  </div>
  )
}

export default UserTable