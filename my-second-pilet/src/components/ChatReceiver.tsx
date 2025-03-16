import * as React from "react";
import type { PiletApi } from 'my-app';


interface ChatReceiverProps {
  app: PiletApi;
}

const ChatReceiver: React.FC<ChatReceiverProps> = ({ app }) => {
  const [messages, setMessages] = React.useState<{ sender: string; text: string }[]>(
    []
  );

  React.useEffect(() => {
    const handler = (ev: { sender: string; text: string }) => {
      setMessages((prev) => [...prev, ev]); 
    };

    app.on("chat-message", handler);

    return () => {
      app.off("chat-message", handler); 
    };
  }, [app]);

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
