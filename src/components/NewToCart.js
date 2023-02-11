import React from 'react';

function NewToCart({item, onAddToCart, message}) {

  function addToCart(event) {
    event.preventDefault();
    const qty = parseInt(event.target.qty.value);
    const id = item.id;
    onAddToCart(id, qty);
  }

  return (
    <React.Fragment>
    <div>
      <form onSubmit={addToCart}>
        <label>Enter the quantity in pounds (lbs)</label>
        <input type="text" name="qty" placeholder='Quantity' />
        <button type="submit">Add To Cart</button>
      </form>      
      <p>{item.name}</p>
      <p>{message}</p>
    </div>
  </React.Fragment>
  )
}

export default NewToCart