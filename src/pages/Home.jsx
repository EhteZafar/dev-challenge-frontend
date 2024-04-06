import React, { useEffect } from "react";
import { useGetUsersQuery } from "../redux/users/userAction";
import { useGetMessagesQuery } from "../redux/messages/messageAction";

const Home = () => {
  const { data: userData, error, isLoading } = useGetUsersQuery();
  const {
    data: messagesData,
    error: messagesError,
    isLoading: messagesIsLoading,
  } = useGetMessagesQuery();

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  useEffect(() => {
    console.log(messagesData);
  }, [messagesData]);

  const chatId3Messages = messagesData?.filter(
    (message) => message.chatid === 3
  );
  const chatId8Messages = messagesData?.filter(
    (message) => message.chatid === 8
  );
  const userId100 = userData?.find((user) => user.id === 100);
  const messageId459 = messagesData?.find((message) => message.id === 459);

  return (
    <div>
      <h2>Echo Messages for Chat ID = 3 Here as HTML</h2>
      {chatId3Messages?.map((message) => (
        <p key={message.id}>{message.message}</p>
      ))}

      <h2>Render Messages for Chat ID = 8 Here as JSON</h2>
      <pre>{JSON.stringify(chatId8Messages, null, 2)}</pre>

      <h2>Render User ID = 100 Here as JSON</h2>
      <pre>{JSON.stringify(userId100, null, 2)}</pre>

      <h2>Echo Message ID = 459 Here as HTML</h2>
      <p>{messageId459?.message}</p>
    </div>
  );
};

export default Home;
