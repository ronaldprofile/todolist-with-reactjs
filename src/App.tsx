import { BrowserRouter, Switch, Route } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { AuthContextProvider } from "./contexts/AuthContext";

import "./services/firebase";

import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";

import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <AuthContextProvider>
            <Route exact path="/" component={Home} />
            <Route path="/app/dashboard" component={Dashboard} />
          </AuthContextProvider>
        </Switch>
      </BrowserRouter>
    </DndProvider>
  );
}

export default App;
