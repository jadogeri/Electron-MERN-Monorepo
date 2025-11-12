// import { userReducer } from "../reducers/userReducer.reducer";
//import {getSingleUser, getAllUsers, updateUser, deleteSingleUser, deleteAllUsers} from "../actions/userActions.actions"
import { createDataContext } from "../createDataContext";
import { Dispatch } from "react";

import { UserType } from "../../../common/types/UserType.type";
import { 
  DeleteAllUsersRequestAction, DeleteAllUsersSuccessAction, DeleteAllUsersFailureAction, 
  DeleteSingleUserRequestAction, DeleteSingleUserSuccessAction, DeleteSingleUserFailureAction, 
  GetAllUsersFailureAction, GetAllUsersRequestAction, GetAllUsersSuccessAction, 
  GetSingleUserFailureAction, GetSingleUserRequestAction, GetSingleUserSuccessAction, 
  UserAction, UserActionTypes, 
  CreateUserRequestAction,
  CreateUserSuccessAction,
  CreateUserFailureAction} from "../actionTypes/userActionTypes.types";
import api from "../../configs/axios";

// 1. Define the State Type

export interface UserState {
  users: UserType[];
  isLoading: boolean;
  error: string | null;

}

const initialState: UserState ={
    users:[],
    error:null,
    isLoading:false
    
}





//{username:"NAME", "age":10, "email" : "email"}


// Define action handlers
const createUser = (dispatch: Dispatch<UserAction> ) => async (user: UserType) => {
  dispatch({
    type: UserActionTypes.CREATE_USER_REQUEST,
  } as CreateUserRequestAction);
  // Simulate API call
  try{
    const result = await api.post("/");
    const data = result.data;
    console.log("data ....................", JSON.stringify(data, null,4))

    dispatch({ type: UserActionTypes.CREATE_USER_SUCCESS, payload: data } as CreateUserSuccessAction);

    alert(JSON.stringify(data, null, 4))

  }catch(error: unknown){
    if(error instanceof Error){
    dispatch({ type: UserActionTypes.CREATE_USER_FAILURE, payload: error.message } as CreateUserFailureAction);
    }
  }
};

const updateUser = (dispatch: Dispatch<UserAction> ) => async (id: string, user: UserType) => {
  dispatch({
    type: UserActionTypes.CREATE_USER_REQUEST,
  } as CreateUserRequestAction);
  // Simulate API call
  try{
    const result = await api.put(`/${id}`, user);
    const data = result.data;
    console.log("data ....................", JSON.stringify(data, null,4))

    dispatch({ type: UserActionTypes.CREATE_USER_SUCCESS, payload: data } as CreateUserSuccessAction);

    alert(JSON.stringify(data, null, 4))

  }catch(error: unknown){
    if(error instanceof Error){
    dispatch({ type: UserActionTypes.CREATE_USER_FAILURE, payload: error.message } as CreateUserFailureAction);
    }
  }
};

const getAllUsers = (dispatch: Dispatch<UserAction> ) => async () => {
  dispatch({ type: UserActionTypes.GET_ALL_USERS_REQUEST } as GetAllUsersRequestAction);
  // Simulate API call
  try{
    const result = await api.get("/");
    const data = result.data;
    console.log("data ....................", JSON.stringify(data, null,4))

    dispatch({ type: UserActionTypes.GET_ALL_USERS_SUCCESS, payload: data } as GetAllUsersSuccessAction);

    alert(JSON.stringify(data, null, 4))

  }catch(error: unknown){
    if(error instanceof Error){
    dispatch({ type: UserActionTypes.GET_ALL_USERS_FAILURE, payload: error.message } as GetAllUsersFailureAction);
    }
  }

};

const deleteAllUsers = (dispatch: Dispatch<UserAction> ) => async () => {
  dispatch({ type: UserActionTypes.DELETE_ALL_USERS_REQUEST } as DeleteAllUsersRequestAction);
  // Simulate API call
  try{
    const result = await api.delete("/");
    const data = result.data;
    console.log("data ....................", JSON.stringify(data, null,4))

    // throw new Error("error thowinggggggggggggggg")
    dispatch({ type: UserActionTypes.DELETE_ALL_USERS_SUCCESS, payload: [] } as DeleteAllUsersSuccessAction);

    alert(JSON.stringify(data, null, 4))

  }catch(error: unknown){
    if(error instanceof Error){
        // console.log("error at line 81: ", error.message)
    dispatch({ type: UserActionTypes.DELETE_ALL_USERS_FAILURE, payload: error.message } as DeleteAllUsersFailureAction);
    }
  }

};

const getSingleUser= (dispatch: Dispatch<UserAction> ) => async (id: string) => {
  dispatch({ type: UserActionTypes.GET_SINGLE_USER_REQUEST } as GetSingleUserRequestAction);
  // Simulate API call
  try{
    const result = await api.get(`/${id}`);
    const data : UserType= result.data;
    console.log("data ....................", JSON.stringify(data, null,4))

    // throw new Error("error thowinggggggggggggggg")
    dispatch({ type: UserActionTypes.GET_SINGLE_USER_SUCCESS, payload: data } as GetSingleUserSuccessAction);

    alert(JSON.stringify(data, null, 4))

  }catch(error: unknown){
    if(error instanceof Error){
        // console.log("error at line 81: ", error.message)
    dispatch({ type: UserActionTypes.GET_SINGLE_USER_FAILURE, payload: error.message } as GetSingleUserFailureAction);
    }
  }

};

const deleteSingleUser= (dispatch: Dispatch<UserAction> ) => async (id: string) => {
  dispatch({ type: UserActionTypes.DELETE_SINGLE_USER_REQUEST } as DeleteSingleUserRequestAction);
  // Simulate API call
  try{
    const result = await api.delete(`/${id}`);
    const data : UserType= result.data;
    console.log("data ....................", JSON.stringify(data, null,4))

    // throw new Error("error thowinggggggggggggggg")
    dispatch({ type: UserActionTypes.DELETE_SINGLE_USER_SUCCESS, payload: data } as DeleteSingleUserSuccessAction);

    alert(JSON.stringify(data, null, 4))

  }catch(error: unknown){
    if(error instanceof Error){
        // console.log("error at line 81: ", error.message)
    dispatch({ type: UserActionTypes.DELETE_SINGLE_USER_FAILURE, payload: error.message } as DeleteSingleUserFailureAction);
    }
  }

};



// const signOut = (dispatch: Dispatch<AuthAction>) => () => {
//   dispatch({ type: 'SIGN_OUT' });
// };


// const setLoading = (dispatch: Dispatch<AuthAction>) => (isLoading: boolean) => {
//   dispatch({ type: 'SET_LOADING', payload: isLoading });
// };

// Combine action creators
const actions = { createUser, getAllUsers, deleteAllUsers, getSingleUser, deleteSingleUser, updateUser };

// Define the reducer
const userReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.GET_ALL_USERS_REQUEST:
    case UserActionTypes.GET_SINGLE_USER_REQUEST:
    case UserActionTypes.DELETE_ALL_USERS_REQUEST:
    case UserActionTypes.DELETE_SINGLE_USER_REQUEST:
    case UserActionTypes.CREATE_USER_REQUEST:
    case UserActionTypes.UPDATE_USER_REQUEST:
      return { ...state, isLoading: true, error: null };

    case UserActionTypes.CREATE_USER_SUCCESS:
      return { ...state, isLoading: false, error: null, users: [...state.users, action.payload]  };
    // case UserActionTypes.GET_ALL_USERS:
    //   return { ...state, isLoading: false, error: null};
    case UserActionTypes.GET_ALL_USERS_SUCCESS:
    case UserActionTypes.DELETE_ALL_USERS_SUCCESS:
      return { ...state,users: action.payload, isLoading: false, error: null };
    case UserActionTypes.GET_ALL_USERS_FAILURE:
    case UserActionTypes.GET_SINGLE_USER_FAILURE:
    case UserActionTypes.DELETE_ALL_USERS_FAILURE:
    case UserActionTypes.DELETE_SINGLE_USER_FAILURE:

      return { ...state, isLoading: false, error: action.payload };

    // case 'SET_LOADING':
    //   return { ...state, loading: action.payload };
    default:
      return state;
  }
};


// Create the context, provider, and hook
export const { Provider: UserProvider, useContextHook: useUserContext } = 
  createDataContext(userReducer, actions, initialState);

