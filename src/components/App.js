import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import ProductDetails from "./ProductDetails";
import Admin from "./Admin";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products/:id" component={ProductDetails} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </Router>
  );
}

export default App;
