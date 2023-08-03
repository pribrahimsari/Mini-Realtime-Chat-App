import React, { useEffect } from "react";
import ChatList from "./ChatList";
import ChatForm from "./ChatForm";
import styles from "./style.module.css";
import { init, subscribeChat } from "../api/socketApi";
import { useChatContext } from "../context/ChatContext";

const Container = () => {
  const { setMessages } = useChatContext();

  useEffect(() => {
    init();
    subscribeChat((message) => {
      setMessages((prevState) => [
        ...prevState,
        { id: (prevState.at(-1)?.id || 0) + 1, text: message },
      ]);
    });
  }, [setMessages]);

  // todo: double render
  console.debug("rendered");

  return (
    <div className={styles.container}>
      <ChatList />
      <ChatForm />
    </div>
  );
};

export default Container;
