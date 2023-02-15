import React from 'react';
import PropTypes from "prop-types";


function NewToCart({item, onAddToCart, message}) {

  function addToCart(event) {
    event.preventDefault();
    const qty = parseInt(event.target.qty.value);
    const id = item.id;
    if (!isNaN(qty)) {    
      onAddToCart(id, qty);
    }
  }

  return (
    <React.Fragment>
    <div className="space-y-10">

      <p className="text-center">{item.name}</p>

      <form className="space-x-10 text-center" onSubmit={addToCart}>
        <input type="text" name="qty" placeholder='Quantity (lbs)' />
        <button type="submit">Add To Cart</button>
      </form>      
      
      <p>{message}</p>

    </div>
  </React.Fragment>
  )
}

NewToCart.propTypes = {
  item: PropTypes.object,
  onAddToCart: PropTypes.func,  
  message: PropTypes.string 
};

export default NewToCart