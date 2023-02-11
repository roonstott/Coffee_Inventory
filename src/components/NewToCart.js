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

export default NewToCart