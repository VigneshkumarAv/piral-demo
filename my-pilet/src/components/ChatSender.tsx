import * as React from 'react';
import type { PiletApi } from 'my-app';

interface ChatSenderProps {
    app: PiletApi
}

const ChatSender: React.FC<ChatSenderProps>  = ({ app }) => {
  const [message, setMessage] = React.useState<string>("");

  const sendMessage = () => {
    if (message.trim()) {
      app.emit("chat-message", { text: message, sender: "Pilet 1" });
      setMessage(""); // Clear input after sending
    }
  };

  return (
    <div>
      <h5>Chat Sender (Pilet 1)</h5>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
};

export default ChatSender;