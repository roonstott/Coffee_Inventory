import React from 'react';
import CoffeeGallery from './CoffeeGallery';
import coffeeInventoryList from './coffeeInventoryList';
import Header from './Header';

class CoffeeControl extends React.Component {
  constructor (props) {
    super(props); 
    this.state = {
      inventory: coffeeInventoryList,
      showDetails: false,
      displayItem: null
    }
  }

  handleItemClick = (id) => {
    //
  }

  render() {


    return (
      <React.Fragment>
        <Header />
        <CoffeeGallery galleryDisplay={this.state.inventory}/>
      </React.Fragment>
    );
  }
};

export default CoffeeControl;