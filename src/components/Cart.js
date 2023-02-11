import React from 'react';

function Cart ({cart, onCartEdit, onPlaceOrder, message}) {
  
  const changeOrder = (event) => {
    event.preventDefault(); 
    const changeAmt = parseInt(event.target.changeAmt.value);
    const id = event.target.id.value;
    onCartEdit(id, changeAmt);    
  }

  return (
    <React.Fragment>
      <div>
        {
          cart.map(item => {
            return (
              <div className="flex" key={item.id}>
                <p>{item.name}</p>
                <p>Inventory: {item.quantityLbs}</p>
                <p>Order Amount: {item.orderAmt}</p>
                <form onSubmit={changeOrder}>
                  <label>Change Order Amount</label>
                  <input name="changeAmt" type="text" />
                  <input type="hidden" name="id" value={item.id} />
                  <button type="submit">Update Order</button>
                </form>
              </div>
            )
          })
        }
      </div>
      <button onClick={onPlaceOrder}>Place Order</button>
      <p>{message}</p>
    </React.Fragment>
  )
}

export default Cart; 