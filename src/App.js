import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FormLogin from "./FormLogin";
import LandingPage from "./LandingPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/landing-page/:user" component={LandingPage} />

        <Route path="/" exact component={FormLogin} />
      </Switch>
    </Router>
  );
}

export default App;
