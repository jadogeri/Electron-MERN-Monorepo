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
  CreateUserFailureAction,
  UpdateUserRequestAction,
  UpdateUserSuccessAction,
  UpdateUserFailureAction} from "../actionTypes/userActionTypes.types";
import api from "../../configs/axios";
import { UserUpdateRequestBody } from "../../../common/dtos/request/UserUpdateRequestBody.dto";
import { Types } from "mongoose";

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

// Define action handlers
const createUser = (dispatch: Dispatch<UserAction> ) => async (user: UserType) => {
  dispatch({
    type: UserActionTypes.CREATE_USER_REQUEST,
  } as CreateUserRequestAction);
  // Simulate API call
  try{
    const result = await api.post("/", user);
    const data = result.data;
    dispatch({ type: UserActionTypes.CREATE_USER_SUCCESS, payload: data } as CreateUserSuccessAction);

    alert(JSON.stringify(data, null, 4))

  }catch(error: unknown){
    if(error instanceof Error){
    dispatch({ type: UserActionTypes.CREATE_USER_FAILURE, payload: error.message } as CreateUserFailureAction);
    }
  }
};

const updateUser = (dispatch: Dispatch<UserAction> ) => async (id: Types.ObjectId, user: UserUpdateRequestBody) => {
  dispatch({ type: UserActionTypes.UPDATE_USER_REQUEST } as UpdateUserRequestAction);
  // Simulate API call
  try{
    const result = await api.put(`/${id}`, user);
    const data = result.data;
    dispatch({ type: UserActionTypes.UPDATE_USER_SUCCESS, payload: data } as UpdateUserSuccessAction);


  }catch(error: unknown){
    if(error instanceof Error){
    dispatch({ type: UserActionTypes.UPDATE_USER_FAILURE, payload: error.message } as UpdateUserFailureAction);
    }
  }
};

const getAllUsers = (dispatch: Dispatch<UserAction> ) => async () => {
  dispatch({ type: UserActionTypes.GET_ALL_USERS_REQUEST } as GetAllUsersRequestAction);
  // Simulate API call
  try{
    const result = await api.get("/");
    const data = result.data;

    dispatch({ type: UserActionTypes.GET_ALL_USERS_SUCCESS, payload: data } as GetAllUsersSuccessAction);

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
    dispatch({ type: UserActionTypes.DELETE_ALL_USERS_SUCCESS, payload: [] } as DeleteAllUsersSuccessAction);

  }catch(error: unknown){
    if(error instanceof Error){
      dispatch({ type: UserActionTypes.DELETE_ALL_USERS_FAILURE, payload: error.message } as DeleteAllUsersFailureAction);
    }
  }

};

const getSingleUser= (dispatch: Dispatch<UserAction> ) => async (id: Types.ObjectId) => {
  dispatch({ type: UserActionTypes.GET_SINGLE_USER_REQUEST } as GetSingleUserRequestAction);
  // Simulate API call
  try{
    const result = await api.get(`/${id}`);
    const data : UserType= result.data;

    dispatch({ type: UserActionTypes.GET_SINGLE_USER_SUCCESS, payload: data } as GetSingleUserSuccessAction);

    alert(JSON.stringify(data, null, 4))

  }catch(error: unknown){
    if(error instanceof Error){
    dispatch({ type: UserActionTypes.GET_SINGLE_USER_FAILURE, payload: error.message } as GetSingleUserFailureAction);
    }
  }

};

const deleteSingleUser= (dispatch: Dispatch<UserAction> ) => async (id: Types.ObjectId) => {
  dispatch({ type: UserActionTypes.DELETE_SINGLE_USER_REQUEST } as DeleteSingleUserRequestAction);
  // Simulate API call
  try{
    const result = await api.delete(`/${id}`);
    const data : UserType= result.data;
    console.log("data ....................", JSON.stringify(data, null,4))

    // throw new Error("error thowinggggggggggggggg")
    dispatch({ type: UserActionTypes.DELETE_SINGLE_USER_SUCCESS, payload: id.toString() } as DeleteSingleUserSuccessAction);
    alert(JSON.stringify(data, null, 4))

  }catch(error: unknown){
    if(error instanceof Error){
        // console.log("error at line 81: ", error.message)
    dispatch({ type: UserActionTypes.DELETE_SINGLE_USER_FAILURE, payload: error.message } as DeleteSingleUserFailureAction);
    }
  }

};


// Combine action creators
const actions = { createUser, getAllUsers, deleteAllUsers, getSingleUser, deleteSingleUser, updateUser };

// Define the reducer
const userReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    // ALL REQUESTS ARE HANDLED THE SAME
    case UserActionTypes.GET_ALL_USERS_REQUEST:
    case UserActionTypes.GET_SINGLE_USER_REQUEST:
    case UserActionTypes.DELETE_ALL_USERS_REQUEST:
    case UserActionTypes.DELETE_SINGLE_USER_REQUEST:
    case UserActionTypes.CREATE_USER_REQUEST:
    case UserActionTypes.UPDATE_USER_REQUEST:
      return { ...state, isLoading: true, error: null };

    // ALL FAILURES ARE HANDLED THE SAME
    case UserActionTypes.GET_ALL_USERS_FAILURE:
    case UserActionTypes.GET_SINGLE_USER_FAILURE:
    case UserActionTypes.DELETE_ALL_USERS_FAILURE:
    case UserActionTypes.DELETE_SINGLE_USER_FAILURE:
    case UserActionTypes.CREATE_USER_FAILURE:
    case UserActionTypes.UPDATE_USER_FAILURE:
      return { ...state, isLoading: false, error: action.payload };


    case UserActionTypes.CREATE_USER_SUCCESS:
      return { ...state, isLoading: false, error: null, users: [...state.users, action.payload]  };

    case UserActionTypes.GET_ALL_USERS_SUCCESS:
    case UserActionTypes.DELETE_ALL_USERS_SUCCESS:
      return { ...state,users: action.payload, isLoading: false, error: null };
    case UserActionTypes.DELETE_SINGLE_USER_SUCCESS:
      return { ...state, users: [...state.users.filter((user)=>{
        return user._id?.toString() != action.payload
      }) ] , isLoading: false, error: null };
    case UserActionTypes.UPDATE_USER_SUCCESS:
      return { ...state, users: [...state.users.map((user)=>{
        if(user._id?.toString() === action.payload._id?.toString()){
          return action.payload
        }
        return user
      }) ] , isLoading: false, error: null };

    default:
      return state;
  }
};


// Create the context, provider, and hook
export const { Provider: UserProvider, useContextHook: useUserContext } = 
  createDataContext(userReducer, actions, initialState);

