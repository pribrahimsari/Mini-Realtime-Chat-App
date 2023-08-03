import React, { useState } from "react";
import styles from "./style.module.css";
import { sendMessage } from "../api/socketApi";
import { useChatContext } from "../context/ChatContext";

const ChatForm = () => {
  const [message, setMessage] = useState("");

  const { setMessages } = useChatContext();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (message) {
      setMessages((prevState) => [
        ...prevState,
        {
          id: (prevState.at(-1)?.id || 0) + 1,
          text: message,
          fromMe: true,
        },
      ]);
      sendMessage(message);
      setMessage("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.textInput}
          type="text"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </form>
    </div>
  );
};

export default ChatForm;
