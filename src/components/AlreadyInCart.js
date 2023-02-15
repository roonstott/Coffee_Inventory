import React from 'react';
import PropTypes from "prop-types";


function AlreadyInCart({item, message, cartEdit}) {
  const updateOrderItem = (event) => {
    event.preventDefault(); 
    const changeAmt = parseInt(event.target.changeAmt.value);
    if (!isNaN(changeAmt)) {     
      cartEdit(item.id, changeAmt);
    }
  }

  return (
    <React.Fragment>
      <div className="flex justify-center">
        <p className="text-xl">{message}</p>
      </div>

      <div className="flex items-center justify-center m-10">

        <div className="mx-6">
          <p>Order Qty:  {item.orderAmt}</p>
        </div>

        <form className="flex flex-row mx-12" onSubmit={updateOrderItem}>
          <input name="changeAmt" type="text" placeholder='Update Order Amount'/>
          <button className="bg-red-400" type="submit">Update Order</button>
        </form>
      </div>

    </React.Fragment>
    
  )
}

AlreadyInCart.propTypes = {
  cartEdit: PropTypes.func,
  item: PropTypes.object,
  message: PropTypes.string
};


export default AlreadyInCart;