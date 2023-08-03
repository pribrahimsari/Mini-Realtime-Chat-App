import React, { useEffect } from "react";
import ChatList from "./ChatList";
import ChatForm from "./ChatForm";
import styles from "./style.module.css";
import {
  init,
  socket,
  subscribeChat,
  subscribeInitialMessages,
} from "../api/socketApi";
import { useChatContext } from "../context/ChatContext";

const Container = () => {
  const { setMessages } = useChatContext();

  useEffect(() => {
    if (socket) return;

    init();

    subscribeInitialMessages((messages) => {
      setMessages(messages.map((msg, i) => ({ id: i, text: msg.message })));
    });

    subscribeChat((message) => {
      setMessages((prevState) => [
        ...prevState,
        { id: (prevState.at(-1)?.id || 0) + 1, text: message },
      ]);
    });
  }, [setMessages]);

  return (
    <div className={styles.container}>
      <ChatList />
      <ChatForm />
    </div>
  );
};

export default React.memo(Container);
