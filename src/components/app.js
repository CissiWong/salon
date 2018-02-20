import React from "react"
import { BrowserRouter, Route } from "react-router-dom"

// Components
import ListView from "../views/listView";
import SalonView from "../views/salonView"

export default class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route path="/" exact component={ListView} />
          <Route path="/salon/:id" component={SalonView} />
        </div>
      </BrowserRouter>
    )
  }
}
