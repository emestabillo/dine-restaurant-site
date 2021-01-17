import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking"
import Footer from "./components/Footer"
import "./styles/main.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/booking'>
          <Booking />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
