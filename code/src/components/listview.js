import React from "react"
import SalonPreview from "./salonpreview.js"

const data = require("./data.json")

export default class ListView extends React.Component {
  render() {
    return (
      <div>
        {data.salons.map(salon => {
          return <SalonPreview
            url={salon.id}
            title={salon.title}
            address={salon.address} />
        })}
      </div>
    )
  }
}
