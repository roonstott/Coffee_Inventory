import React from 'react';
import NewToCart from './NewToCart'
import AlreadyInCart from './AlreadyInCart'
import PropTypes from "prop-types";


function CoffeeDetail ({item, onBackClick, onAddToCart, onCartEdit, message, cart}) {  

  const inCart = cart.filter(cartItem => cartItem.id === item.id);
  let view; 
  if (inCart.length > 0) {
    view = <AlreadyInCart item={item} cart={cart} message={message} cartEdit={onCartEdit} />
  } else {
    view = <NewToCart item={item} onAddToCart = {onAddToCart} message={message} />
  }

  return (
   <React.Fragment>
    <div className="flex justify-center">
      <h2 className="align-center font-mono text-4xl">{item.name}</h2>
    </div>
    <div>
      {view}
      <button className="border-2 border-black p-2 rounded-lg outline outline-offset-2" onClick={onBackClick}>Back To All Coffee</button>
    </div>
   </React.Fragment>
  )
}

CoffeeDetail.propTypes = {
  onCartEdit: PropTypes.func,
  item: PropTypes.object,
  message: PropTypes.string,
  cart: PropTypes.array,
  onAddToCart: PropTypes.func,
  onBackClick: PropTypes.func
};

export default CoffeeDetail;