import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import "./scss/application.scss";

import lightTheme from "./components/themes/light";
import darkTheme from "./components/themes/dark";

import { Header } from "./components/Header";
import { Opener } from "./components/Opener";
import { About } from "./components/About";
import { Work } from "./components/Work";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  const stored = localStorage.getItem("isDarkMode");
  const [isDarkMode, setIsDarkMode] = useState(
    stored === "true" ? true : false
  );
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <div id="theme" className="theme-default">
        <button onClick={() => {
          setIsDarkMode(!isDarkMode);
          localStorage.setItem("isDarkMode", !isDarkMode);
        }}>
          Toggle Dark Mode
        </button>
        <div>Is dark mode: {isDarkMode}</div>
        <div className="container">
          <Header />
          <main role="main">
            <Opener />
            <About />
            <Work />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
