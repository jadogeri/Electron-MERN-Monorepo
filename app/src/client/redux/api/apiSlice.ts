// src/features/api/apiSlice.ts (Example using RTK Query)
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/users' }), // Example API
  endpoints: () => ({}),
  tagTypes: ['User'],
  invalidationBehavior:"immediately",



});

