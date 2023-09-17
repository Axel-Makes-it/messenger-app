import "./App.css";
import Chat from "./components/Chat";
import ChatContainer from "./components/ChatContainer";

import SideBarMenu from "./components/SideBarMenu";

function App() {
  return (
    <div className="App">
      <SideBarMenu />
      <ChatContainer />
      <Chat />
    </div>
  );
}

export default App;
