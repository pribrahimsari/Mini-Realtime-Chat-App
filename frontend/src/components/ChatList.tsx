import styles from "./style.module.css";
import { useChatContext } from "../context/ChatContext";

const ChatList = () => {
  const { messages } = useChatContext();

  return <div className={styles.chatlist}>TODO: Chat List</div>;
};

export default ChatList;
