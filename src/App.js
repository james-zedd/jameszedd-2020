import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./themes/_globalStyles";
import "./scss/application.scss";

import { useDarkMode } from "./hooks/useDarkMode";

import lightTheme from "./themes/light";
import darkTheme from "./themes/dark";

import { Header } from "./components/Header";
import { Opener } from "./components/Opener";
import { About } from "./components/About";
import { Work } from "./components/Work";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!mountedComponent) {
    return <div />
  } else {
    return (
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
  
        <div id="App">
          {/* <ThemeToggle theme={theme} toggleTheme={themeToggler} /> */}
          <div className="container">
            <Header theme={theme} themeToggler={themeToggler} />
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

}

export default App;
