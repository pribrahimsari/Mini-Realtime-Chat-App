import styles from "./style.module.css";
import { useChatContext } from "../context/ChatContext";
import ChatItem from "./ChatItem";

const ChatList = () => {
  const { messages } = useChatContext();

  console.debug({ messages });

  return (
    <div className={styles.chatlist}>
      {messages.map((message) => (
        <div key={message.id}>
          <ChatItem message={message} />
        </div>
      ))}
    </div>
  );
};

export default ChatList;
