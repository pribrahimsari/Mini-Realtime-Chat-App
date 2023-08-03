import React from "react";

export type Message = {
  id: number;
  message: string;
};

export type TChatContext = {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
};
