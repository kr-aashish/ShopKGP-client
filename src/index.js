import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";
import { UserContextProvider } from "./user_context/Context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <StateProvider initialState={initialState} reducer={reducer}>
        <BrowserRouter>
            {/*<Auth0Provider*/}
            {/*    domain="dev-lh5cfk3uf0tevnl6.us.auth0.com"*/}
            {/*    clientId="mvAUG5oGJAn2yRI9ErjOooe0yFpMH1qk"*/}
            {/*    authorizationParams={{*/}
            {/*        redirect_uri: 'https://shopkgp.netlify.app'*/}
            {/*    }}*/}
            {/*>*/}
                <App />
            {/*</Auth0Provider>*/}
        </BrowserRouter>
      </StateProvider>
    </UserContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
