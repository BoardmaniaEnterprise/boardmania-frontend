import logo from "./logo.svg";
import "./App.css";
import UserComponent from "./components/UserComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";
import DashboardComponent from "./components/DashboardComponent";
import EventComponent from "./components/EventComponent";
import GamesComponent from "./components/GamesComponent";
import GameComponent from "./components/GameComponent";
import CreateEventComponent from "./components/CreateEventComponent";
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
          <PrivateRoute path="/dashboard" component={DashboardComponent} />
          <PrivateRoute path="/events/:id" component={EventComponent} />
          <PrivateRoute path="/games/:id" component={GameComponent} />
          <PrivateRoute path="/games" component={GamesComponent} />
          <PrivateRoute path="/createEvent" component={CreateEventComponent} />
          <Route exact path="/" component={LoginComponent} />
          <Route path="*" component={DashboardComponent} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
