import React, { Fragment } from "react"

// Components
import NavigationBar from '../components/NavigationBar/NavigationBar';
import Select from '../components/Select/Select';
import SalonPreview from "../components/SalonPreview/SalonPreview";

// Data dummy
import { salons as dataSalons } from '../data/salons.json';

export default class ListView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listView: dataSalons,
      category: ""
    }
  }

  handleCategory = event => {
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
      <Fragment>
        <NavigationBar title={'Hår'} displayBackButton={true} />
        <Select onChange={this.handleCategory} />
        <main className={'salon-list'}>
        {listView.map(salon => {
          return <SalonPreview
            key={salon.id}
            url={salon.id}
            title={salon.title}
            address={salon.address}
            price={salon.price}
            category={salon.category}
            stars={salon.stars} />
        })}
        </main>
      </Fragment>
    )
  }
}
