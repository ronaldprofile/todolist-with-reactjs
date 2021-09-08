import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Layout } from "./components/Layout";
import { Login } from "./components/Login";
import { AuthContextProvider } from "./contexts/AuthContext";

import "./services/firebase";

import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <AuthContextProvider>
            <Route exact path="/" component={Login} />
            <Route path="/dashboard" component={Layout} />
          </AuthContextProvider>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
