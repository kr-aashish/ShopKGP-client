import { ThemeProvider } from "@emotion/react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Account from "./pages/account/Account";
import { darkTheme } from "./themes/dark";
import { lightTheme } from "./themes/light";

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={lightTheme}>
        <Routes>
          <Route exact path="/" element={<Header />} />
          <Route exact path="/account/:id" element={<Account />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
