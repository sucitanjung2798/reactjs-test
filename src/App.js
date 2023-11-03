import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FormLogin from "./FormLogin";
import LandingPage from "./LandingPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={FormLogin} />
        <Route path="/landing-page" component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
