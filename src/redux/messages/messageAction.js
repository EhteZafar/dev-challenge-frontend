import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fetchMessages = createApi({
  reducerPath: "fetchMessages",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/messages",
  }),
  endpoints: (builder) => ({
    getMessages: builder.query({
      query: () => "/getMessages",
    }),
  }),
});

export const { useGetMessagesQuery } = fetchMessages;
