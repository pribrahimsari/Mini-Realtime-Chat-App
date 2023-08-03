import styles from "./style.module.css";
import { Message } from "../types/message.types";

const ChatItem = ({ message }: { message: Message }) => {
  return <div className={`${styles.chatItem}`}>{message.text}</div>;
};

export default ChatItem;
