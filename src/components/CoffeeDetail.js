import React from 'react'; 

function CoffeeDetail ({item, onBackClick, onAddToCart, message}) {

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
        <button onClick={onBackClick}>Back To All Coffee</button>
        <p>This is a coffee detail</p>
        <p>{item.name}</p>
        <p>{message}</p>
      </div>
    </React.Fragment>
  )
}

export default CoffeeDetail;