import React, { useEffect, useState } from 'react';
import '../../App.css';
import { data, Link } from 'react-router-dom';
import { useCreateUserMutation, useDeleteAllUsersMutation, useDeleteSingleUserMutation, useGetAllUsersQuery, useLazyGetAllUsersQuery, useLazyGetSingleUserQuery, useUpdateUserMutation } from '../redux/api/user/user.api';
import { UserType } from '../../common/types/UserType.type';
import UserTable from '../components/tables/UserTable/UserTable';
import ParentComponent from '../components/ParentComponent';
import InfoTable from '../components/tables/InfoTable/InfoTable';
import mongoose, { Types } from 'mongoose';

const Redux = () => {
    const { data: users, error, isLoading } = useGetAllUsersQuery();
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
    const [createUser, {isLoading: isCreatingAllusers}] = useCreateUserMutation();
    const [getAllUserstrigger, { data: getAllUsers, isLoading: isGetAllUsers }] = useLazyGetAllUsersQuery();
    const [getSingleUserTrigger, { isLoading: isGetSingleUsers }] = useLazyGetSingleUserQuery();
    const [deleteSingleUserTrigger] = useDeleteSingleUserMutation();
    const [deleteAllUsersTrigger, {isLoading: isDeletingAllUsers}] = useDeleteAllUsersMutation();
    const [updateUserTrigger] = useUpdateUserMutation();



    //ids
    const [selectedDeleteUserID, setSelectedDeletedUserID] = useState<mongoose.Types.ObjectId>(new mongoose.Types.ObjectId());
    const [selectedUpdateUserID, setSelectedUpdateUserID] = useState<mongoose.Types.ObjectId>(new mongoose.Types.ObjectId());
    const [selectedGetUserID, setSelectedGetUserID] = useState<mongoose.Types.ObjectId>(new mongoose.Types.ObjectId());


    useEffect(()=>{
      setAppUsers(users as any)

    }, [appUsers])
  if (isLoading) return <div>Loading posts...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  const handlecounter = ()=>{
    setCount(count+1);
  }
    const handleCreateUser = async ()=>{

      try {
        const result = await createUser({
          username: inputPostUsernameValue,
          age: inputPostAgeValue,
          email: inputPostEmailValue
        });
        // Check for error in the result if not using .unwrap()
        if ('error' in result) {
          console.error('Mutation failed:', result.error);
          // Handle error, e.g., show a toast notification
        } else {
          console.log('Mutation successful:', result.data);
          // Handle success, e.g., show a success message
        }
      } catch (err) {
        // This catch block would primarily handle unexpected errors during dispatch or other sync issues
        console.error('Unexpected error during mutation dispatch:', err);
      }   

    }
  const handleGetAllUsers = async ()=>{
    try{
    const u = await getAllUserstrigger();
    console.log(u.data)
    alert(JSON.stringify(u.data, null, 4))

   
    }catch(e: unknown){
      if(e instanceof Error){
        console.log(JSON.stringify(e));
      }
    }

  }

      const handleGetSingleUser = async ()=>{
    try{
      //console.log("id passed to function :", id)
    const u = await getSingleUserTrigger(selectedGetUserID);
    console.log(u.data)
    alert(JSON.stringify(u.data, null, 4))

   
    }catch(e: unknown){
      if(e instanceof Error){
        console.log(JSON.stringify(e));
      }
    }

  }
      const handleDeleteSingleUser = async ()=>{
    try{
    const u = await deleteSingleUserTrigger(selectedDeleteUserID);
    console.log(u.data)
    alert(JSON.stringify(u.data, null, 4))

   
    }catch(e: unknown){
      if(e instanceof Error){
        console.log(JSON.stringify(e));
      }
    }

  }
      const handleDeleteAllUsers = async ()=>{
    try{
      console.log("calling deleting all users function:")
    const u = await deleteAllUsersTrigger();
    console.log(u.data)
    alert(JSON.stringify(u.data, null, 4))

   
    }catch(e: unknown){
      if(e instanceof Error){
        console.log(JSON.stringify(e));
      }
    }

  }
      const handleUpdateUser = async () => {
        try{
        const result = await updateUserTrigger({
          id: (selectedUpdateUserID.toString()),
          body:{
            username:inputPutUsernameValue,
            age:inputPutAgeValue,
            email:inputPutEmailValue
          }
        });

        // Check for error in the result if not using .unwrap()
        if ('error' in result) {
          console.error('Mutation failed:', result.error);
          // Handle error, e.g., show a toast notification
        } else {
          console.log('Mutation successful:', result.data);
          // Handle success, e.g., show a success message
        }
      } catch (err) {
        // This catch block would primarily handle unexpected errors during dispatch or other sync issues
        console.error('Unexpected error during mutation dispatch:', err);
      }   
      };
    

  return (
    <div //className="App"
    >
      <header className="App-header"
      >
     {/* <InfoTable users={appUsers} setUsers={setAppUsers as React.Dispatch<React.SetStateAction<never[]>>}      
      />  */}
      <InfoTable  
        users={users as UserType[]} setUsers={setAppUsers as React.Dispatch<React.SetStateAction<never[]>>}
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
      selected value: ** {selectedGetUserID?.toString()} **
      {inputPostAgeValue}
      {inputPostEmailValue}

      <CounterView clicker={handlecounter} />
{count}
    <UserTable users={users as UserType[]} />

        <Link to={"/"}>Home</Link>
        <Link to={"/context"}>Test Crud Template Using Context API</Link>
      </header>
    </div>
  )
}


export default Redux

type ClickProp={
  clicker: React.MouseEventHandler<HTMLDivElement>
}


const CounterView : React.FC<ClickProp>= ({clicker  }) => {
  return (
    <div onClick={clicker}>increase count</div>
  )
}

