// src/features/api/apiSlice.ts (Example using RTK Query)
import { apiSlice } from '../apiSlice';
import { UserType } from '../../../../common/types/UserType.type';
import { Types } from 'mongoose';
import { UserCreateResponseDTO } from '../../../../common/dtos/response/UserCreateResponseDTO.dto';
import { UserCreateRequestBody } from '../../../../common/dtos/request/UserCreateRequestBody.dto';
import { UserDeleteSingleResponseDTO } from '../../../../common/dtos/response/UserDeleteSingleResponseDTO.dto';
import { UserDeleteAllResponseDTO } from '../../../../common/dtos/response/UserDeleteAllResponseDTO.dto';
import { UserUpdateRequestBody } from '../../../../common/dtos/request/UserUpdateRequestBody.dto';
import { UserUpdateResponseDTO } from '../../../../common/dtos/response/UserUpdateResponseDTO.dto';
import { UserGetSingleResponseDTO } from '../../../../common/dtos/response/UserGetSingleResponseDTO.dto';

type UserTypeData = {
    id?: string
    body?: UserCreateRequestBody | UserUpdateRequestBody
}


export const userApiSlice = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
    getAllUsers: builder.query<UserType[], void>({
        query: () => ({
            url : "/",
            method : "GET",
           // headers: headers
        }),
        
       providesTags: ['User'],

      }),
  
    getSingleUser: builder.query<UserGetSingleResponseDTO, Types.ObjectId>({
        query: (id) => ({
            url: `/${id}`,
            method : "GET",
            //headers: headers
        }),
        providesTags: ['User'],


    }),
 
    createUser: builder.mutation<UserCreateResponseDTO, UserType>({
        query: ({username, email, age} ) => ({
            url: "/",
            method: "POST",
            body: {
                username: username,
                email: email,
                age: age
            },
        }),
              invalidatesTags: ['User'],


    }),
    deleteSingleUser: builder.mutation<UserDeleteSingleResponseDTO, Types.ObjectId>({
        query: (id) => ({
            url: `/${id}`,
            method: "DELETE",
      }),
        invalidatesTags: ['User'],


  }),
    deleteAllUsers: builder.mutation<UserDeleteAllResponseDTO, void>({
        query: () => ({
            url: `/`,
            method: "DELETE",
           // headers: headers
        }),
        invalidatesTags: ['User'],


    }),
  
    updateUser: builder.mutation<UserUpdateResponseDTO , UserTypeData>({
        query: ( {id, body}  ) => ({
            url: `/${id}`,
            method: "PUT",
            body: {
                username: body?.username,
                email: body?.email,
                age: body?.age
          },
          //headers: headers
        }),
      invalidatesTags: ['User'],

    }),  
  }),
});

export const {
  

    useLazyGetAllUsersQuery, 
    useLazyGetSingleUserQuery, 
    useGetAllUsersQuery,
    useGetSingleUserQuery,
    useCreateUserMutation,
    useDeleteAllUsersMutation,
    useDeleteSingleUserMutation,
    useUpdateUserMutation,
    

} = userApiSlice;

