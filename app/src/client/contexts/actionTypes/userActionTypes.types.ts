import { UserType } from "../../../common/types/UserType.type";

// 3. Action Types Enum (Optional, but good practice)
export enum UserActionTypes {
  CREATE_USER  = 'CREATE_USER',
  UPDATE_USER = 'UPDATE_USER',
  DELETE_SINGLE_USER = 'DELETE_SINGLE_USER',
  GET_SINGLE_USER = 'GET_SINGLE_USER' ,
  GET_ALL_USERS = 'GET_ALL_USERS' ,
  DELETE_ALL_USERS ='DELETE_ALL_USERS',

  GET_ALL_USERS_REQUEST = 'GET_ALL_USERS_REQUEST' ,
  GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS' ,
  GET_ALL_USERS_FAILURE = 'GET_ALL_USERS_FAILURE' ,




}

// 4. Action Interfaces (Discriminated Union)
export interface CreateUserAction {
  type: UserActionTypes.CREATE_USER;
  payload: UserType;
}

export interface UpdateUserAction {
  type: UserActionTypes.UPDATE_USER;
  payload: { id: string; body: Partial<UserType> };
}

export interface DeleteSingleUserAction {
  type: UserActionTypes.DELETE_SINGLE_USER;
  payload: {id: string}
}

export interface DeleteAllUsersAction {
  type: UserActionTypes.DELETE_SINGLE_USER;
}

export interface GetSingleUserAction {
  type: UserActionTypes.GET_SINGLE_USER;
  payload: {id: string}
}

export interface GetAllUsersAction {
  type: UserActionTypes.GET_ALL_USERS;
}

export interface GetAllUsersRequestAction {
  type: UserActionTypes.GET_ALL_USERS_REQUEST;
}

export interface GetAllUsersSuccessAction {
  type: UserActionTypes.GET_ALL_USERS_SUCCESS;
  payload: UserType[]
}

export interface GetAllUsersFailureAction {
  type: UserActionTypes.GET_ALL_USERS_FAILURE;
  payload: any
}

// Union Type for all possible actions
export type UserAction = CreateUserAction | UpdateUserAction | 
GetAllUsersAction | GetAllUsersRequestAction | GetAllUsersSuccessAction | GetAllUsersFailureAction | GetSingleUserAction | DeleteAllUsersAction | DeleteSingleUserAction;
