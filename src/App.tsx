import { useState } from "react";
import reactLogo from "./assets/react2.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://www.twitch.tv/sizeofint" target="_blank">
          <img src={reactLogo} className="logo" alt="Twith logo" />
        </a>
        <a href="https://www.twitch.tv/sizeofint" target="_blank">
          <img src={reactLogo} className="logo react" alt="Twitch logo" />
        </a>
      </div>
      <h1>This is the website for <a href="https://twitch.tv/sizeofint">twitch.tv/sizeofint</a></h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 2)}>
          count is {count}
        </button>
        <h1>This is the website for <a href="index_nor.html">4.82 PS3 NOR patcher</a></h1>

        <p>
          the very popular twitch streamer sizeofint! 

            I play SF5 and mainly broodwar but aside form that loads of other games
            have fun!
        </p>
     
       

     
      </div>
    
    </div>
  );
}

export default App;