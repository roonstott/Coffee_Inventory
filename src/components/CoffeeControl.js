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
      showView: "Home", 
      cart: [], 
      viewMessage: ""
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
      showView: view      
    });    
  }

  handleItemClick = (id) => {
    const item = this.state.inventory.filter(item => item.id === id)[0];
    this.setState({
      displayItem: item,
      viewMessage: ""
    });
  }

  handleAddToCart = (id, qty) => {
    const item = this.state.inventory.filter(item => item.id === id)[0];
    if (item["quantityLbs"] < qty) {
      this.setState({
        displayItem: item,
        viewMessage: "Not enough inventory. Try adding a smaller amount",
        showView: "Buy"
      })
    } else {
      let duplicate = this.state.cart.filter(item => item.id === id)[0];
      let updatedCart;
      if (duplicate) {
        duplicate["orderAmt"] += qty;
        updatedCart = this.state.cart.filter(item => item.id !== id).concat(duplicate);
      } else {
        item["orderAmt"] = qty;
        updatedCart = this.state.cart.concat(item);
      }      
      this.setState({
        displayItem: item,
        cart: updatedCart,
        viewMessage: "Items added to cart",
        showView: "Buy"
      });
    }
  }

  handleCartEdit = (id, changeAmt) => {
    let item = this.state.cart.filter(item => item.id === id)[0];
    item.orderAmt = changeAmt;
    console.log("change Amt :", changeAmt)
    let updatedCart = this.state.cart.filter(item => item.id !== id).concat(item);    
    console.log("updated cart after item add", updatedCart)
    this.setState({
      cart: updatedCart,
      displayItem: null,
      showView: "Cart"
    });
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

  render() {

    let currentView;
    if (this.state.displayItem) {
      currentView = <CoffeeDetail onAddToCart={this.handleAddToCart} message={this.state.viewMessage} onBackClick={this.handleBackClick} item={this.state.displayItem} cart={this.state.cart} />
    } else if (this.state.showView === "Home") {
      currentView = <Home />
    } else if (this.state.showView === "About") {
      currentView = <About />
    } else if (this.state.showView === "Cart") {
      currentView = <Cart cart={this.state.cart} onCartEdit={this.handleCartEdit} onPlaceOrder={this.handlePlaceOrder} message={this.state.viewMessage} />
    } else if (this.state.showView === "Buy") {
      currentView = <CoffeeGallery onItemClick={this.handleItemClick} galleryDisplay={this.state.inventory}/>
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