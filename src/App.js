import { ThemeProvider } from "@emotion/react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Account from "./pages/account/Account";
import { darkTheme } from "./themes/dark";
import { lightTheme } from "./themes/light";
import Header from "./components/header/Header.js";
import Home from "./pages/home/Home.js";
import PrimarySearchAppBar from "./components/appbar/Appbar";

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={lightTheme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/account/:id" element={<Account />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
