import React from "react";
import { WelcomeMessage } from "./components/WelcomeMessage";

import { useAuth } from "./context/AuthContext";

function App() {
  const { setUser } = useAuth();

  let nameInputRef = React.createRef();

  function confirmName() {
    {/**Here we are able to manage the global user inside AuthContext */}
    setUser({ name: nameInputRef.current.value });
  }

  return (
    <div>
      <h1>Hello word</h1>

      <p>Whats your name?</p>
      <br />
      <input type="text" ref={nameInputRef} />

      <button onClick={confirmName}> Confirm name</button>

      {/**Inside WelcomeMessage component, we will recover user from global AuthContext */}
      <WelcomeMessage />

    </div>
  );
}

export default App;
