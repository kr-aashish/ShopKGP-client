import {ThemeProvider} from "@emotion/react";
import {Route, Routes} from "react-router-dom";
import "./App.css";
import Account from "./pages/account/Account";
import {lightTheme} from "./themes/light";
import Home from "./pages/home/Home.js";
import Checkout from "./pages/checkout/Checkout";
import PrimarySearchAppBar from "./components/appbar/Appbar";

function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <PrimarySearchAppBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route exact path="/account/:id" element={<Account/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
            </Routes>
        </ThemeProvider>

    );
}

export default App;
