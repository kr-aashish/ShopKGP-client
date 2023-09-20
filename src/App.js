import { ThemeProvider } from "@emotion/react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { lightTheme } from "./themes/light";
import Home from "./views/home/Home.js";
import Checkout from "./views/checkout/Checkout";
import PrimarySearchAppBar from "./shared/components/appbar/Appbar";
import SignUp from "./views/auth/signupForm/SignUp";
import SignInSide from "./views/auth/loginForm/login";
import SellerInterface from "./views/seller/Seller"
import { useContext } from "react";
import { UserContext } from "./context/authContext/Context";
import { ProductDetails } from "./views/ProductDetails";
import AddProduct from "./views/AddProduct";
import { Sell } from "@mui/icons-material";
import ErrorPage from "./views/error/Error";
import orderConfirmationPage  from "./views/account/orderPlaced";
import AccountNavbar from "./views/account/AccountNavbar";
import OrderConfirmationPage from "./views/account/orderPlaced";

function App() {
  const { state } = useContext(UserContext);
  // console.log(state);

  return (
    <ThemeProvider theme={lightTheme}>
      {state?.isLoggedIn ? <PrimarySearchAppBar /> : <></>}
      <Routes>
        <Route
          exact
          path="/signup"
          element={state?.isLoggedIn ? <Home /> : <SignUp />}
        />
        <Route
          exact
          path="/login"
          element={state?.isLoggedIn ? <Home /> : <SignInSide />}
        />
        <Route
          exact
          path="/account/:id"
          element={state?.isLoggedIn ? <AccountNavbar /> : <SignInSide />}
        />
        <Route
          path="/checkout"
          element={state?.isLoggedIn ? <Checkout /> : <SignInSide />}
        />
        <Route
          path="/add"
          element={state?.isLoggedIn ? <AddProduct /> : <SignInSide />}
        />
        <Route
          path="/detail/:id"
          element={state?.isLoggedIn ? <ProductDetails /> : <SignInSide />}
        />
        <Route
          path="/"
          element={state?.isLoggedIn ? <Home /> : <SignInSide />}
        />
        <Route
          path="/seller"
          element={state?.isLoggedIn ? <SellerInterface/> : <SignInSide />}
        />
        <Route
          path="/error"
          element={state?.isLoggedIn ? <ErrorPage/> : <SignInSide />}
        />
        <Route
            path="/success"
            element={state?.isLoggedIn ? <OrderConfirmationPage/> : <SignInSide />}
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
