// actionCreators.ts (or within your context file)

import { UserType } from "../../../common/types/UserType.type";
import { CreateUserAction, UpdateUserAction, DeleteAllUsersAction, DeleteSingleUserAction, GetAllUsersAction, GetSingleUserAction } from "../actionTypes/userActionTypes.types";
import { UserActionTypes } from "../actionTypes/userActionTypes.types";


export const createUser = (user: UserType): CreateUserAction => ({
  type: UserActionTypes.CREATE_USER,
  payload: user,
});

export const updateUser = (id: string, body: Partial<UserType>): UpdateUserAction => ({
  type: UserActionTypes.UPDATE_USER,
  payload: { id: id, body: body }
});

export const deleteSingleUser = (id: string): DeleteSingleUserAction => ({
  type: UserActionTypes.DELETE_SINGLE_USER,
  payload: { id },
});

export const getSingleUser = (id: string): GetSingleUserAction => ({
  type: UserActionTypes.GET_SINGLE_USER,
  payload: {id: id}
});

export const getAllUsers = (): GetAllUsersAction => ({
  type: UserActionTypes.GET_ALL_USERS
});

export const deleteAllUsers = (): DeleteAllUsersAction => ({
  type: UserActionTypes.DELETE_SINGLE_USER

});
