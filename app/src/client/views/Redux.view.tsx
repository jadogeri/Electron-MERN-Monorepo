import React, { useEffect, useState } from 'react';
import logo from '../../electron.webp';
import '../../App.css';
import { data, Link } from 'react-router-dom';
import { useGetAllUsersQuery } from '../redux/api/user/user.api';
import { UserType } from '../../common/types/UserType.type';
import InfoTable from '../components/tables/InfoTable/InfoTable';
import UserTable from '../components/tables/UserTable/UserTable';
import ParentComponent from '../components/ParentComponent';

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
    {/* <InfoTable users={appUsers} setUsers={setAppUsers as React.Dispatch<React.SetStateAction<never[]>>}

    

      
      /> */}

      
      <ParentComponent />

    <UserTable users={appUsers} />

        <Link to={"/"}>Home</Link>
        <Link to={"/context"}>Test Crud Template Using Context API</Link>
      </header>
    </div>
  )
}

export default Redux

