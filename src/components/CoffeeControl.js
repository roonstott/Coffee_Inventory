import React from 'react';
import CoffeeGallery from './CoffeeGallery';
import coffeeInventoryList from './coffeeInventoryList';
import Header from './Header';
import CoffeeDetail from './CoffeeDetail';
import Home from './Home'
import About from './About';
import Cart from './Cart';

class CoffeeControl extends React.Component {
  constructor (props) {
    super(props); 
    this.state = {
      inventory: coffeeInventoryList,
      displayItem: null,
      showView: "Home"    
    }
  }

  handleBackClick = () => {
    this.setState({displayItem: null});
  }

  handleNavBarClick = (view) => {
    this.setState({
      displayItem: null,
      showView: view
    });    
  }

  handleItemClick = (id) => {
    const item = this.state.inventory.filter(item => item.id === id)[0];
    this.setState({displayItem: item});
  }

  render() {
    let currentView;
    if (this.state.displayItem) {
      currentView = <CoffeeDetail onBackClick={this.handleBackClick} item={this.state.displayItem} />
    } else if (this.state.showView === "Home") {
      currentView = <Home />
    } else if (this.state.showView === "About") {
      currentView = <About />
    } else if (this.state.showView === "Cart") {
      currentView = <Cart />
    } else if (this.state.showView === "Buy") {
      currentView = <CoffeeGallery onItemClick={this.handleItemClick} galleryDisplay={this.state.inventory}/>
    } else {
      currentView = <Home />
    }

    return (
      <React.Fragment>
        <Header onNavBarClick={this.handleNavBarClick}/>
        {currentView}
      </React.Fragment>
    );
  }
};

export default CoffeeControl;