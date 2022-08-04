import { ThemeProvider } from "@emotion/react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Account from "./pages/account/Account";
import { darkTheme } from "./themes/dark";
import { lightTheme } from "./themes/light";
import Header from './components/header/Header.js';
import Home from './pages/home/Home.js'


function App() {
  return (
    <div className="app">
    <Header/>
      <ThemeProvider theme={lightTheme}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/account/:id" element={<Account />} />
        </Routes>
      </ThemeProvider>

      
   

    </div>
  );
}

export default App;
