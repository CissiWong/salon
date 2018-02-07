import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import ListView from "./listview.js"
import SalonView from "./salonview.js"

export default class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={ListView} />
          <Route path="/salon/:id" component={SalonView} />
        </div>
      </BrowserRouter>
    )
  }
}
