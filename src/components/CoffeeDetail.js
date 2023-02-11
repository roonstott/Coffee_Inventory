import React from 'react';
import NewToCart from './NewToCart'
import AlreadyInCart from './AlreadyInCart'

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
      {view}
      <button onClick={onBackClick}>Back To All Coffee</button>
   </React.Fragment>
  )
}

export default CoffeeDetail;