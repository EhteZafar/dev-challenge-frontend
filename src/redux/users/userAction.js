import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fetchUsers = createApi({
  reducerPath: "fetchUsers",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/users",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/getUsers",
    }),
  }),
});

export const { useGetUsersQuery } = fetchUsers;
