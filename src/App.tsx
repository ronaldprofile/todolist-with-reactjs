import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";

import "./services/firebase";

import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";

import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <AuthContextProvider>
            <Route exact path="/" component={Home} />
            <Route path="/app/dashboard" component={Dashboard} />
          </AuthContextProvider>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
