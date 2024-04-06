import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { fetchUsers } from "./users/userAction";
import { fetchMessages } from "./messages/messageAction";

export const store = configureStore({
  reducer: {

    [fetchUsers.reducerPath]: fetchUsers.reducer,
    [fetchMessages.reducerPath]: fetchMessages.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(fetchUsers.middleware)
      .concat(fetchMessages.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
