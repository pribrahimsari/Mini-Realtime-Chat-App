import styles from "./style.module.css";
import { useChatContext } from "../context/ChatContext";
import ChatItem from "./ChatItem";
import ScrollableFeed from "react-scrollable-feed";

const ChatList = () => {
  const { messages } = useChatContext();

  return (
    <div className={styles.chatlist}>
      {/* @ts-ignore: ref: https://github.com/dizco/react-scrollable-feed/issues/87*/}
      <ScrollableFeed forceScroll>
        {messages.map((message) => (
          <ChatItem key={message.id} message={message} />
        ))}
      </ScrollableFeed>
    </div>
  );
};

export default ChatList;
