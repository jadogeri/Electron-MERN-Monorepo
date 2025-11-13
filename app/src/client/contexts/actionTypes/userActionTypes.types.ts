import { UserType } from "../../../common/types/UserType.type";

export enum UserActionTypes {

  GET_ALL_USERS_REQUEST = 'GET_ALL_USERS_REQUEST' ,
  GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS' ,
  GET_ALL_USERS_FAILURE = 'GET_ALL_USERS_FAILURE' ,

  GET_SINGLE_USER_REQUEST = 'GET_SINGLE_USER_REQUEST' ,
  GET_SINGLE_USER_SUCCESS = 'GET_SINGLE_USER_SUCCESS' ,
  GET_SINGLE_USER_FAILURE = 'GET_SINGLE_USER_FAILURE' ,

  UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST' ,
  UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS' ,
  UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE' ,

  CREATE_USER_REQUEST = 'CREATE_USER_REQUEST' ,
  CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS' ,
  CREATE_USER_FAILURE = 'CREATE_USER_FAILURE' ,

  DELETE_ALL_USERS_REQUEST = 'DELETE_ALL_USERS_REQUEST' ,
  DELETE_ALL_USERS_SUCCESS = 'DELETE_ALL_USERS_SUCCESS' ,
  DELETE_ALL_USERS_FAILURE = 'DELETE_ALL_USERS_FAILURE' ,

  DELETE_SINGLE_USER_REQUEST = 'DELETE_SINGLE_USER_REQUEST' ,
  DELETE_SINGLE_USER_SUCCESS = 'DELETE_SINGLE_USER_SUCCESS' ,
  DELETE_SINGLE_USER_FAILURE = 'DELETE_SINGLE_USER_FAILURE'

}

// 4. Action Interfaces (Discriminated Union)

/** GET SINGLE USER ACTIONS */

export interface GetSingleUserRequestAction {
  type: UserActionTypes.GET_SINGLE_USER_REQUEST;
  payload: {id: string}
}

export interface GetSingleUserSuccessAction {
  type: UserActionTypes.GET_SINGLE_USER_SUCCESS;
  payload: UserType[] | UserType
}

export interface GetSingleUserFailureAction {
  type: UserActionTypes.GET_SINGLE_USER_FAILURE;
  payload: any
}

/** DELETE SINGLE USER ACTIONS */

export interface DeleteSingleUserRequestAction {
  type: UserActionTypes.DELETE_SINGLE_USER_REQUEST;
  payload: {id: string}
}

export interface DeleteSingleUserSuccessAction {
  type: UserActionTypes.DELETE_SINGLE_USER_SUCCESS;
  payload: string
}

export interface DeleteSingleUserFailureAction {
  type: UserActionTypes.DELETE_SINGLE_USER_FAILURE;
  payload: any
}



/** GET ALL USER ACTIONS */

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

/** DELETE ALL USERS ACTIONS */

export interface DeleteAllUsersRequestAction {
  type: UserActionTypes.DELETE_ALL_USERS_REQUEST;
}

export interface DeleteAllUsersSuccessAction {
  type: UserActionTypes.DELETE_ALL_USERS_SUCCESS;
  payload: UserType[]
}

export interface DeleteAllUsersFailureAction {
  type: UserActionTypes.DELETE_ALL_USERS_FAILURE;
  payload: any
}

/** UPDATE USER ACTIONS */
export interface UpdateUserRequestAction {
  type: UserActionTypes.UPDATE_USER_REQUEST;
}

export interface UpdateUserSuccessAction {
  type: UserActionTypes.UPDATE_USER_SUCCESS;
  payload: UserType
}

export interface UpdateUserFailureAction {
  type: UserActionTypes.UPDATE_USER_FAILURE;
  payload: any
}

/** UPDATE USER ACTIONS */
export interface CreateUserRequestAction {
  type: UserActionTypes.CREATE_USER_REQUEST,
}

export interface CreateUserSuccessAction {
  type: UserActionTypes.CREATE_USER_SUCCESS;
  payload: UserType
}

export interface CreateUserFailureAction {
  type: UserActionTypes.CREATE_USER_FAILURE;
  payload: any
}


// Union Type for all possible actions
export type UserAction =
GetAllUsersRequestAction | GetAllUsersSuccessAction | GetAllUsersFailureAction |
GetSingleUserRequestAction | GetSingleUserSuccessAction | GetSingleUserFailureAction |
DeleteSingleUserRequestAction | DeleteSingleUserSuccessAction | DeleteSingleUserFailureAction |

DeleteAllUsersRequestAction | DeleteAllUsersSuccessAction | DeleteAllUsersFailureAction |
CreateUserRequestAction | CreateUserSuccessAction | CreateUserFailureAction |

UpdateUserRequestAction | UpdateUserSuccessAction | UpdateUserFailureAction;


