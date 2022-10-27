import { ThemeProvider } from "@emotion/react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Account from "./pages/account/Account";
import { lightTheme } from "./themes/light";
import Home from "./pages/home/Home.js";
import Checkout from "./pages/checkout/Checkout";
import PrimarySearchAppBar from "./components/appbar/Appbar";
import SignUp from "./pages/signup/SignUp";
import SignInSide from "./pages/login/login";
import { useContext } from "react";
import { UserContext } from "./user_context/Context";
import { ProductDetails } from "./pages/ProductDetails";
import AddProduct from "./pages/AddProduct";

function App() {
  const { state } = useContext(UserContext);
  console.log(state);

  return (
    <ThemeProvider theme={lightTheme}>
      {state?.user ? <PrimarySearchAppBar /> : <></>}
      <Routes>
        <Route
          exact
          path="/signup"
          element={state?.user ? <Home /> : <SignUp />}
        />
        <Route
          exact
          path="/login"
          element={state?.user ? <Home /> : <SignInSide />}
        />
        <Route
          exact
          path="/account/:id"
          element={state?.user ? <Account /> : <SignInSide />}
        />
        <Route
          path="/checkout"
          element={state?.user ? <Checkout /> : <SignInSide />}
        />
        <Route
          path="/add"
          element={state?.user ? <AddProduct /> : <SignInSide />}
        />
        <Route
          path="/detail/:id"
          element={state?.user ? <ProductDetails /> : <SignInSide />}
        />
        <Route path="/" element={state?.user ? <Home /> : <SignInSide />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
