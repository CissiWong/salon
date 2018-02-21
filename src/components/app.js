import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import ListView from "../views/listView";
import SalonView from "../views/SalonView/SalonView";

export default class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListView} />
            <Route path="/salon/:id" exact component={SalonView} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
