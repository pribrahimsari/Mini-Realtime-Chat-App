import { io, Socket } from "socket.io-client";
import { TRedisMessage } from "../types/message.types";

export let socket: Socket;

export const init = () => {
  if (socket) return;

  console.debug("Connecting...");

  socket = io("http://localhost:3000", {
    transports: ["websocket"],
  });

  socket.on("connect", () => console.debug("Connected!"));
  socket.on("disconnect", () => console.debug("Disconnected!"));
};

export const sendMessage = (message: string) => {
  if (!socket) return;

  // backend waiting new message on the channel named "new-message"
  socket.emit("new-message", message);
};

export const subscribeChat = (callback: (message: string) => void) => {
  if (!socket) return;

  socket.on("receive-message", (message: string) => {
    // console.debug({ message });
    callback(message);
  });
};

export const subscribeInitialMessages = (
  callback: (messages: TRedisMessage[]) => void,
) => {
  if (!socket) return;

  socket.on("message-list", (messages: TRedisMessage[]) => {
    // console.debug({ messages });
    callback(messages);
  });
};
