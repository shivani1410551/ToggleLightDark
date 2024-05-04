import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const LightMode = () => {
  const [theme, setTheme] = useState("light-theme");
  function toggle() {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  }
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div>
      <header>
        <a href="#">WonderTech</a>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="text-side">
          <h1>React Dark Mode</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem natus
            nobis consequatur fugit sapiente quos velit temporibus blanditiis,
            expedita maiores, eveniet error nostrum vero ducimus esse officiis
            perferendis eligendi quia.
          </p>
          <button onClick={() => toggle()}>Toggle Mode</button>
        </div>
        <div className="photo-side">
          <img src="/public/images/Waterproof makeup-amico.svg" alt="pic" />
        </div>
      </main>
    </div>
  );
};

export default LightMode;
