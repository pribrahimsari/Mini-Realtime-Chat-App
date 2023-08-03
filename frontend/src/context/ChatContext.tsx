import React, { createContext, useContext, useState } from "react";

type TChatContext = {
  messages: null;
  setMessages: React.Dispatch<React.SetStateAction<null>>;
};

const ChatContext = createContext<TChatContext | null>(null);

export const ChatProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [messages, setMessages] = useState(null);

  const values = {
    messages,
    setMessages,
  };

  return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
};

export const useChatContext = () => useContext(ChatContext);
