import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../contexts/dataContexts/AuthContext';
import { useAppContext } from '../contexts/dataContexts/AppContext';
import { useUserContext } from '../contexts/dataContexts/UserContext';
import { UserType } from '../../common/types/UserType.type';


const Test = () => {
  const { state: authState, signIn, signOut } = useAuthContext();
  const { state: appState, toggleTheme } = useAppContext();
  const {state: userState,createUser, getAllUsers, deleteAllUsers, getSingleUser, deleteSingleUser } = useUserContext();
  const user : UserType ={username:"NEg", "age":10, "email" : "email"}

  const [appUsers, setAppUsers]= useState<UserType[]>([]);


  useEffect(()=>{
    getAllUsers();
    setAppUsers(userState.users)
  }, [appUsers])
  const handleClick=()=>{
    createUser(user)
    
  }

    const handlegetUsers=()=>{
    getAllUsers()
    
  }

      const handleGetSingleUser=(id: string)=>{
    getSingleUser(id)
    
  }

        const handleDeleteSingleUser=(id: string)=>{
      deleteSingleUser(id)
    
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

      {/* <button onClick={handleDeleteAllUsers}>handle delete all users</button>
        delete all users list : {JSON.stringify(userState, null,4)} */}
        
      {/* <button onClick={()=>{handleGetSingleUser("6912bee927efae54dabc72f8")}}>handle get single user</button>
        get Single User : {JSON.stringify(userState, null,4)}
                get Single User : {JSON.stringify(appUsers, null,4)} */}

                      <button onClick={()=>{handleDeleteSingleUser("6912bee927efae54dabc72f8")}}>handle delete singleuser</button>
        delete Single User : {JSON.stringify(userState, null,4)}
                delete Single User : {JSON.stringify(appUsers, null,4)}


    </div>
  );
};

export default Test;
