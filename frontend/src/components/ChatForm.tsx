import React, { useState } from "react";
import styles from "./style.module.css";

const ChatForm = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // todo
    // console.debug({ message });
    setMessage("");
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
