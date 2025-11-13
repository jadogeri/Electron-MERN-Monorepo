import React, { useEffect, useState } from 'react';
import logo from '../../electron.webp';
import '../../App.css';
import { data, Link } from 'react-router-dom';
import { useGetAllUsersQuery } from '../redux/api/user/user.api';
import { UserType } from '../../common/types/UserType.type';

const Home = () => {
    const { data: users, error, isLoading } = useGetAllUsersQuery();
    const [appUsers, setAppUsers] = useState([])

    useEffect(()=>{
      setAppUsers(users as any)

    }, [users])
  if (isLoading) return <div>Loading posts...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.electronjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Electron
        </a>
                <Link to={"/test"}>test app</Link>

        <Link to={"/redux"}>Test CRUD Template Using Redux</Link>
        <Link to={"/context"}>Test CRUD Template Using Context API</Link>
      </header>
    </div>
  )
}

export default Home

