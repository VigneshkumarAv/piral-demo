// chatService.ts
import type { PiletApi } from "my-app";

type Message = { sender: string; text: string };
type MessageHandler = (message: Message) => void;

let appInstance: PiletApi | null = null;
const listeners = new Set<MessageHandler>();

export function initChatReceiver(app: PiletApi) {
  if (appInstance) return; // Prevent multiple registrations

  appInstance = app;

  const handler = (message: Message) => {
    listeners.forEach((listener) => listener(message));
  };

  app.on("chat-message", handler);

  // Cleanup function when Pilet is unloaded
  return () => {
    app.off("chat-message", handler);
    appInstance = null;
    listeners.clear();
  };
}

export function subscribeToMessages(listener: MessageHandler) {
  listeners.add(listener);
  return () => listeners.delete(listener); // Unsubscribe
}
