import React, { useEffect, useState } from 'react';
import '../../App.css';
import {  Link } from 'react-router-dom';
import { UserType } from '../../common/types/UserType.type';
import UserTable from '../components/tables/UserTable/UserTable';
import InfoTable from '../components/tables/InfoTable/InfoTable';
import mongoose, { Types } from 'mongoose';
import { useUserContext } from '../contexts/dataContexts/UserContext';


  const user : UserType ={username:"NEg", "age":10, "email" : "email"}

const Context = () => {
    const [appUsers, setAppUsers] = useState<UserType[]>([])
    const [count, setCount] = useState<number>(0);

    //input fields
    const [inputPostUsernameValue, setPostUsernameInputValue] = useState<string>('');
    const [inputPostEmailValue, setPostEmailInputValue] = useState<string>('');
    const [inputPostAgeValue, setPostAgeInputValue] = useState<number>(0);
    const [inputPutUsernameValue, setPutUsernameInputValue] = useState<string>('');
    const [inputPutEmailValue, setPutEmailInputValue] = useState<string>('');
    const [inputPutAgeValue, setPutAgeInputValue] = useState<number>(0);
//redux

  const {state: userState,createUser, getAllUsers, deleteAllUsers, getSingleUser, deleteSingleUser, updateUser } = useUserContext();



    //ids
    const [selectedDeleteUserID, setSelectedDeletedUserID] = useState<mongoose.Types.ObjectId>(new mongoose.Types.ObjectId());
    const [selectedUpdateUserID, setSelectedUpdateUserID] = useState<mongoose.Types.ObjectId>(new mongoose.Types.ObjectId());
    const [selectedGetUserID, setSelectedGetUserID] = useState<mongoose.Types.ObjectId>(new mongoose.Types.ObjectId());


    useEffect( ()=>{
      getAllUsers()
      setAppUsers(userState.users)

    }, [appUsers])
  // if (error) return <div>Error: {error.message}</div>;

  const handlecounter = ()=>{
    setCount(count+1);
  }
    const handleCreateUser = async ()=>{
      alert("calling create user...........................")

      try {
         await createUser({
          username: inputPostUsernameValue,
          age: inputPostAgeValue,
          email: inputPostEmailValue
        });

      } catch (err) {
        // This catch block would primarily handle unexpected errors during dispatch or other sync issues
        console.error('Unexpected error during mutation dispatch:', err);
      }   

    }
  const handleGetAllUsers = async ()=>{
    try{
      await getAllUsers();

   
    }catch(e: unknown){
      if(e instanceof Error){
        console.log(JSON.stringify(e));
      }
    }

  }

      const handleGetSingleUser = async ()=>{
    try{
      //console.log("id passed to function :", id)
     await getSingleUser(selectedGetUserID.toString());
   
    }catch(e: unknown){
      if(e instanceof Error){
        console.log(JSON.stringify(e));
      }
    }

  }
      const handleDeleteSingleUser = async ()=>{
    try{
     await deleteSingleUser(selectedDeleteUserID.toString());
   
    }catch(e: unknown){
      if(e instanceof Error){
        console.log(JSON.stringify(e));
      }
    }

  }
      const handleDeleteAllUsers = async ()=>{
    try{
      console.log("calling deleting all users function:")
     await deleteAllUsers();
   
    }catch(e: unknown){
      if(e instanceof Error){
        console.log(JSON.stringify(e));
      }
    }

  }
      const handleUpdateUser = async () => {
       
         await updateUser(selectedUpdateUserID.toString(),{
            username:inputPutUsernameValue,
            age:inputPutAgeValue,
            email:inputPutEmailValue
          } as UserType);

      //   // Check for error in the result if not using .unwrap()
      //   if ('error' in result) {
      //     console.error('Mutation failed:', result.error);
      //     // Handle error, e.g., show a toast notification
      //   } else {
      //     console.log('Mutation successful:', result.data);
      //     // Handle success, e.g., show a success message
      //   }
      // } catch (err) {
      //   // This catch block would primarily handle unexpected errors during dispatch or other sync issues
      //   console.error('Unexpected error during mutation dispatch:', err);
      // }   
      };
    

  return (
    <div //className="App"
    >
      <header className="App-header"
      >
     {/* <InfoTable users={appUsers} setUsers={setAppUsers as React.Dispatch<React.SetStateAction<never[]>>}      
      />  */}
      <InfoTable  
        users={userState.users as UserType[]} setUsers={setAppUsers as React.Dispatch<React.SetStateAction<never[]>>}
        handleCreateUser={handleCreateUser} handleGetUser={handleGetSingleUser} handleGetUsers={handleGetAllUsers}
        handleUpdateUser={handleUpdateUser} handleDeleteUser={handleDeleteSingleUser} handleDeleteUsers={handleDeleteAllUsers}
        handleSetPostAgeInputValue={setPostAgeInputValue} handleSetPostEmailInputValue={setPostEmailInputValue}
        handleSetPostUsernameInputValue={setPostUsernameInputValue} postAgeInputValue={inputPostAgeValue}
        postEmailInputValue={inputPostEmailValue}   postUsernameInputValue={inputPostUsernameValue}
        handleSetPutAgeInputValue={setPutAgeInputValue} handleSetPutEmailInputValue={setPutEmailInputValue}
        handleSetPutUsernameInputValue={setPutUsernameInputValue} putAgeInputValue={inputPutAgeValue}
        putEmailInputValue={inputPutEmailValue}   putUsernameInputValue={inputPutUsernameValue}
        selectedDeleteUserID={selectedDeleteUserID} setSelectedDeletedUserID={setSelectedDeletedUserID} 
        selectedUpdateUserID={selectedUpdateUserID} setSelectedUpdateUserID={setSelectedUpdateUserID}
        selectedGetUserID={selectedGetUserID} setSelectedGetUserID={setSelectedGetUserID}       

      />

      
      {/* <ParentComponent /> */}
      {inputPostAgeValue}
      {inputPostEmailValue}

      <CounterView clicker={handlecounter} />
{count}
    <UserTable users={userState.users as UserType[]} />

        <Link to={"/"}>Home</Link>
        <Link to={"/redux"}>Test CRUD Template Using Redux</Link>
      </header>
    </div>
  )
}


export default Context

type ClickProp={
  clicker: React.MouseEventHandler<HTMLDivElement>
}


const CounterView : React.FC<ClickProp>= ({clicker  }) => {
  return (
    <div onClick={clicker}>increase count</div>
  )
}

