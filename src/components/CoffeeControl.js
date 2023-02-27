import React from 'react';
import CoffeeGallery from './CoffeeGallery';
import coffeeInventoryList from './coffeeInventoryList';
import Header from './Header';
import CoffeeDetail from './CoffeeDetail';
import Home from './Home'
import About from './About';
import Cart from './Cart';
import Admin from './Admin';

class CoffeeControl extends React.Component {
  constructor (props) {
    super(props); 
    this.state = {
      inventory: coffeeInventoryList,
      displayItem: null,
      showView: "Home", 
      cart: [], 
      viewMessage: "", 
      errorMessage: ""
    }
  }

  handleBackClick = () => {
    this.setState({
      displayItem: null,
      showView: "Buy"
    });
  }

  handleNavBarClick = (view) => {
    this.setState({
      displayItem: null,
      showView: view,
      viewMessage: ""    
    });    
  }

  handleItemClick = (id) => {
    const item = this.state.inventory.filter(item => item.id === id)[0];
    this.setState({
      displayItem: item,
      viewMessage: ""
    });
    if (this.state.cart.filter(item => item.id === id)[0]) {
      this.setState({viewMessage: "This item is already in your cart"})
    }
  }

  handleAddToCart = (id, qty) => {
    const item = this.state.inventory.filter(item => item.id === id)[0];
    if (item["quantityLbs"] < qty) {
      this.setState({
        displayItem: item,
        viewMessage: "Not enough inventory. Try adding a smaller amount"
      })
    } else {
      item["orderAmt"] = qty;
      const updatedCart = this.state.cart.concat(item);  
      this.setState({
        displayItem: item,
        cart: updatedCart,
        viewMessage: "This item has been added to your cart"
      });
    }
  }

  handleCartEdit = (id, changeAmt) => {
    let item = this.state.cart.filter(item => item.id === id)[0];
    if (changeAmt > item.quantityLbs) {
      this.setState({
        viewMessage: "Not enough inventory. Try adding a smaller amount"
      })
    } else {
      item.orderAmt = changeAmt;
      let updatedCart = this.state.cart.filter(item => item.id !== id).concat(item);    
      this.setState({
        cart: updatedCart,
        viewMessage: ""
      });
    }
  }

  handlePlaceOrder = () => {
    const updatedAfterOrder = this.state.inventory.map(order => {
        const itemWasOrdered = this.state.cart.filter(cartItem => cartItem.id === order.id);
        if (itemWasOrdered.length > 0) {
          order.quantityLbs -= itemWasOrdered[0].orderAmt
        }
        return order;            
      })
    
    this.setState({
      cart: [],
      inventory: updatedAfterOrder,
      showView: "Buy"
    })    
  }

  handleAddSack = (newSack) => {
    const updatedInventory = this.state.inventory.concat(newSack);
    this.setState({
      inventory: updatedInventory,
      showView: "Buy"
    });
  }

  handleEditSack = (sack) => {
    const updatedInventory = this.state.inventory.filter(el => el.id !== sack.id).concat(sack);
    this.setState({
      inventory: updatedInventory,
      showView: "Buy"
    })
  }

  handleDeleteSack = (id) => {
    const updatedInventory = this.state.inventory.filter(el => el.id !== id);
    this.setState({
      inventory: updatedInventory,
      showView: "Buy"
    })
  }

  render() {
    let currentView;
    if (this.state.displayItem) {
      currentView = <CoffeeDetail onAddToCart={this.handleAddToCart} message={this.state.viewMessage} onBackClick={this.handleBackClick} item={this.state.displayItem} cart={this.state.cart} onCartEdit={this.handleCartEdit}/>
    } else if (this.state.showView === "Home") {
      currentView = <Home />
    } else if (this.state.showView === "About") {
      currentView = <About />
    } else if (this.state.showView === "Cart") {
      currentView = <Cart cart={this.state.cart} onCartEdit={this.handleCartEdit} onPlaceOrder={this.handlePlaceOrder} message={this.state.viewMessage} />
    } else if (this.state.showView === "Buy") {
      currentView = <CoffeeGallery onItemClick={this.handleItemClick} galleryDisplay={this.state.inventory}/>
    } else if (this.state.showView === "Admin") {
      currentView = <Admin onEdit={this.handleEditSack} onDelete={this.handleDeleteSack} onAddSack={this.handleAddSack} inventory={this.state.inventory} />
    } else {
      currentView = <Home />
    }

    return (
      <React.Fragment>
        <Header onNavBarClick={this.handleNavBarClick} cartQty={this.state.cart.length}/>
        {currentView}
      </React.Fragment>
    );
  }
};

export default CoffeeControl;