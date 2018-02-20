import React from "react"
import SalonPreview from "./salonpreview.js"
import goldleft from "../assets/gold-left.png"
import down from "../assets/down.png"
import data from "./data.json"

export default class ListView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listView: data.salons,
      category: ""
    }
  }

  handleCategory = event => {
    event.preventDefault()
    this.setState({
      category: event.target.value
    })
  }

  render() {
    let listView = this.state.listView
    if (this.state.category !== "") {
      listView = listView.filter(salon => (
        salon.category === this.state.category
      ))
    }
    return (
      <div>
        <header className="listview-header">
          <img
            className="listview-back"
            src={goldleft}
            alt="" />
          <h2 className="listview-title">Hår</h2>
          <div className="listview-back" />
          <div className="listview-category">
            <select
              className="category"
              onChange={this.handleCategory}
              type="image"
              src={down}>
              <option className="category">Välj priskategori </option>
              <option className="category" value="0">250-500 kr</option>
              <option className="category" value="1">500-700 kr</option>
              <option className="category" value="2">700-1000 kr</option>
              <option className="category" value="">Visa alla</option>
            </select>
          </div>
        </header>
        {listView.map(salon => {
          return <SalonPreview
            key={salon.id}
            url={salon.id}
            title={salon.title}
            address={salon.address}
            price={salon.price}
            category={salon.category} />
        })}
      </div>
    )
  }
}