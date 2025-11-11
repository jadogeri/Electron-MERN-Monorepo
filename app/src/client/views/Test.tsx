import React, { useEffect } from 'react';
import { useAuthContext } from '../contexts/dataContexts/AuthContext';
import { useAppContext } from '../contexts/dataContexts/AppContext';
import { useUserContext } from '../contexts/dataContexts/UserContext';
import { UserType } from '../../common/types/UserType.type';


const Test = () => {
  const { state: authState, signIn, signOut } = useAuthContext();
  const { state: appState, toggleTheme } = useAppContext();
  const {state: userState,createUser, getAllUsers, deleteAllUsers } = useUserContext();
  const user : UserType ={username:"NEg", "age":10, "email" : "email"}

  useEffect(()=>{
    getAllUsers();
  }, [])
  const handleClick=()=>{
    createUser(user)
    
  }

    const handlegetUsers=()=>{
    getAllUsers()
    
  }


    const handleDeleteAllUsers=()=>{
    deleteAllUsers()
    
  }


  return (
    <div>
      <p>User Authenticated: {authState.isAuthenticated ? 'Yes' : 'No'}</p>
      <p>App Theme: {appState.theme}</p>
      <button onClick={() => signIn('my-token-123')}>Sign In</button>
      <button onClick={signOut}>Sign Out</button>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={handleClick}>create new user</button>
      <div>
        new user is : {JSON.stringify(userState, null,4)}
      </div>
      {/* <button onClick={handlegetUsers}>get all users</button>
        all users list : {JSON.stringify(userState, null,4)} */}

      <button onClick={handleDeleteAllUsers}>handle delete all users</button>
        delete all users list : {JSON.stringify(userState, null,4)}

    </div>
  );
};

export default Test;
