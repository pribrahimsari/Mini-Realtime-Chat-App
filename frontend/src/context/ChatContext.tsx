import React, { createContext, useContext, useState } from "react";
import { Message, TChatContext } from "../types/message.types";

const defaultContextValue: TChatContext = {
  messages: [],
  setMessages: () => {},
};

const ChatContext = createContext<TChatContext>(defaultContextValue);

export const ChatProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const values = {
    messages,
    setMessages,
  };

  return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
};

export const useChatContext = () => useContext(ChatContext);
