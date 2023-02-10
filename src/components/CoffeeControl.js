import React from 'react';
import CoffeeGallery from './CoffeeGallery'

class CoffeeControl extends React.Component {
  constructor (props) {
    super(props); 
    this.state = {
      inventory: [],
      showDetails: false,
      displayItem: null
    }
  }

  handleItemClick = (id) => {
    //
  }

  render() {


    return (
      <CoffeeGallery />
    );
  }
};

export default CoffeeControl;