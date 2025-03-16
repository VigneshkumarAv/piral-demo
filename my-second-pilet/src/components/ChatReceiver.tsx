import * as React from "react";
import type { PiletApi } from 'my-app';
import { subscribeToMessages } from "../module/chatService";

const ChatReceiver: React.FC = () => {
  const [messages, setMessages] = React.useState<{ sender: string; text: string }[]>(
    []
  );

  React.useEffect(() => {
    const unsubscribe = subscribeToMessages((message) => {
      setMessages((prev) => [...prev, message]);
    });

    return ()=> {unsubscribe;} // Cleanup function
  }, []);


  return (
    <div>
      <h5>Chat Receiver (Pilet 2)</h5>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>
            <strong>{msg.sender}:</strong> {msg.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatReceiver;
