import React from 'react';
import PropTypes from "prop-types";

function Cart ({cart, onCartEdit, onPlaceOrder, message}) {
  
  const changeOrder = (event) => {
    event.preventDefault(); 
    const changeAmt = parseInt(event.target.changeAmt.value);
    const id = event.target.id.value;
    if(! isNaN(changeAmt)) {
      onCartEdit(id, changeAmt);   
    } 
  }

  let display;

  if (cart.length === 0) {
    display = <p>There are no items in your cart</p>
  } else {
    display =
    <div>
      <div>
        {
          cart.map(item => {
            return (
              <div className="flex flex-row justify-around m-y-10" key={item.id}>
                <div className='flex flex-col m-4'>
                    <p>{item.name}</p>
                    <p>Inventory: {item.quantityLbs}</p>
                    <p>Order Amount: {item.orderAmt}</p>
                    <p>Price: ${item.pricePerLb} per Lb</p>
                </div>
                <div className="">
                  <form onSubmit={changeOrder}>
                    <input name="changeAmt" type="text" placeholder="change order amount" className="m-10"/>
                    <input type="hidden" name="id" value={item.id} />
                    <button className="border-2 border-black p-2 rounded-lg outline bg-red-200" type="submit">Update Order</button>
                  </form>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='flex justify-around'>
        <button className="border-2 border-black p-2 rounded-lg outline outline-offset-2" onClick={onPlaceOrder}>Place Order</button>
      </div>
    </div>
  }

  return (
    <React.Fragment>
       <div className="flex justify-center">
        <h2 className="align-center font-mono text-4xl">Your Cart</h2>
      </div>   
      {display}
      <p>{message}</p>
    </React.Fragment>
  )
}

Cart.propTypes = {
  cart: PropTypes.array,
  onCartEdit: PropTypes.func,
  onPlaceOrder: PropTypes.func,
  message: PropTypes.string
};

export default Cart; 