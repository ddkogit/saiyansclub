import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <div className="logo">
          <img src="/vegetalogo.png" alt="logo" />
        </div>

        <nav>
          <ul>
            <li>Home</li>
            <li>Contact Us</li>
            <li>Join Saiyans</li>
          </ul>
        </nav>
      </header>

      <div className="banner">

<video className="video" src="/video.mp4" autoPlay muted loop></video>

        <div className="content">
          <div className="title">The Best Club for Men </div>
          <div className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur in
            et dolor rerum deserunt eos,
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
