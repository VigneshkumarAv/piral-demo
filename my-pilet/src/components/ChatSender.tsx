import * as React from 'react';
import type { PiletApi } from 'my-app';

interface ChatSenderProps {
  sendMessage: (message: string) => void; 
}

const ChatSender: React.FC<ChatSenderProps>  = ({ sendMessage }) => {
  const [message, setMessage] = React.useState<string>("");

  return (
    <div>
      <h5>Chat Sender (Pilet 1)</h5>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={() => { sendMessage(message); setMessage(""); }}>Send Message</button>
    </div>
  );
};

export default ChatSender;