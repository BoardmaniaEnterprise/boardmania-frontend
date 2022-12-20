import logo from "./logo.svg";
import "./App.css";
import UserComponent from "./components/UserComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/login" component={LoginComponent} />
          <Route path="/register" component={RegisterComponent} />
          <PrivateRoute path="/users" component={UserComponent} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
