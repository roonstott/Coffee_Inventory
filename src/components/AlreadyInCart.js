import React from 'react'; 

function AlreadyInCart({item, message, cartEdit}) {
  const updateOrderItem = (event) => {
    event.preventDefault(); 
    const changeAmt = parseInt(event.target.changeAmt.value);
    cartEdit(item.id, changeAmt);
  }

  return (
    <React.Fragment>
      <p>This Item Is Already In Your Cart</p>
      <p>Would you like to update your order?</p>
      <div className="flex" key={item.id}>
        <p>{item.name}</p>
        <p>Inventory: {item.quantityLbs}</p>
        <p>Order Amount: {item.orderAmt}</p>
        <form onSubmit={updateOrderItem}>
          <label>Change Order Amount</label>
          <input name="changeAmt" type="text" />
          <button type="submit">Update Order</button>
        </form>
      </div>
      <p>{message}</p>
    </React.Fragment>
    
  )
}

export default AlreadyInCart;