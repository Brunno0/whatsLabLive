import { useState } from "react";
import MessageForm from "./MessageForm";
import { AppContainer, MessagesContainer } from "./StyledChat";
import Message from "./Message";

function Chat() {
  const [messages, setMessages] = useState([]);

  const addMessage = (msg) => {
    const updateMessage = [...messages, msg];
    setMessages(updateMessage);
  };

  const deleteMessage = (msg) => {
    const updateMessage = messages.filter((message) => msg !== message);
    setMessages(updateMessage);
  };

  const messageMap = messages.map((msg, index) => {
    return <Message key={index} msg={msg} deleteMessage={deleteMessage} />;
  });

  return (
    <AppContainer>
      <MessagesContainer>{messageMap}</MessagesContainer>

      <MessageForm addMessage={addMessage} />
    </AppContainer>
  );
}

export default Chat;
