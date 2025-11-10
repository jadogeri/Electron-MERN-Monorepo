import React, { useEffect, useState } from 'react';
import logo from '../../electron.webp';
import '../../App.css';
import { data, Link } from 'react-router-dom';
import { useGetAllUsersQuery } from '../redux/api/user/user.api';
import { UserType } from '../../common/types/UserType.type';
import InfoTable from '../components/tables/InfoTable/InfoTable';

const Redux = () => {
    const { data: users, error, isLoading } = useGetAllUsersQuery();
    const [appUsers, setAppUsers] = useState([])

    useEffect(()=>{
      setAppUsers(users as any)

    }, [users])
  if (isLoading) return <div>Loading posts...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  return (
    <div //className="App"
    >
      <header className="App-header"
      >
    <InfoTable />

      <div>
      <h1>Users</h1>
      <ul>
        {users?.map((user) => (
          <li key={user.username}>{user.email} {user.age}</li>
        ))}
      </ul>
    </div>

        <Link to={"/"}>Home</Link>
        <Link to={"/context"}>Test Crud Template Using Context API</Link>
        <>{JSON.stringify(appUsers, null, 4)}</>
      </header>
    </div>
  )
}

export default Redux

