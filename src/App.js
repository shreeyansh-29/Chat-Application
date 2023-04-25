import React from "react";
import {ChatEngine} from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="a645d3ab-d942-4be7-b3e2-cce1648f5ea4"
      userName="Shreeyansh"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
