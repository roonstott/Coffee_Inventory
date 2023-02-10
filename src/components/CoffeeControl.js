import React from 'react';
import CoffeeGallery from './CoffeeGallery';
import coffeeInventoryList from './coffeeInventoryList';
import Header from './Header';
import CoffeeDetail from './CoffeeDetail';

class CoffeeControl extends React.Component {
  constructor (props) {
    super(props); 
    this.state = {
      inventory: coffeeInventoryList,
      displayItem: null
    }
  }

  handleHomeclick = () => {
    this.setState({displayItem: null});
  }

  handleItemClick = (id) => {
    const item = this.state.inventory.filter(item => item.id === id)[0];
    this.setState({displayItem: item});
  }

  render() {
    let currentView;
    if (this.state.displayItem) {
      currentView = <CoffeeDetail onHomeClick={this.handleHomeclick} item={this.state.displayItem} />
    } else {
      currentView = <CoffeeGallery onItemClick={this.handleItemClick} galleryDisplay={this.state.inventory}/>
    }

    return (
      <React.Fragment>
        <Header />
        {currentView}
      </React.Fragment>
    );
  }
};

export default CoffeeControl;