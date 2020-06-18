import React from "react";
import logo from "./logo.svg";
import "./App.css";

import light from './theme/light'
// import dark from './theme/dark'
import Container from './theme/components/Container'
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider className="App" theme={light}>
      <nav
        style={{
          width: "100%",
          padding: "2rem 0",
          backgroundColor: "gray",
          textAlign: "center",
        }}
      >
        <button onClick={{}}>Dark Mode</button>
        <button>Light Mode</button>
      </nav>
      <Container className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </Container>
    </ThemeProvider>
  );
}

export default App;
