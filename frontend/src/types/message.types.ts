import React from "react";

export type TRedisMessage = {
  message: string;
  when: number;
};

export type Message = {
  id: number;
  text: string;
  fromMe?: boolean;
};

export type TChatContext = {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
};
