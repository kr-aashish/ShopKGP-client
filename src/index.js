import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";
import { UserContextProvider } from "./context/authContext/Context";

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
