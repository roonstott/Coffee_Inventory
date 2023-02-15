import React from 'react'; 

function AlreadyInCart({item, message, cartEdit}) {
  const updateOrderItem = (event) => {
    event.preventDefault(); 
    const changeAmt = parseInt(event.target.changeAmt.value);
    cartEdit(item.id, changeAmt);
  }

  return (
    <React.Fragment>
      <p>{message}</p>

      <div className=" flex flex-row border border-slate-400">

        <div className="basis-1/3 flex-col">
          <p>{item.name}</p>
          <p>{item.tastingNotes}</p>
        </div>

        <div className="basis-1/3">
          <table class="border border-slate-400">            
            <tr>
              <td className="p-4">Origin</td>
              <td className="p-4">{item.origin}</td>
            </tr>
            <tr>
              <td className="p-4">Price</td>
              <td className="p-4">${item.pricePerLb} per lb</td>          
            </tr>
            <tr>
              <td className="p-4">Current Stock</td>
              <td className="p-4">{item.quantityLbs} lbs</td>
            </tr>          
          </table>     
        </div> 

        <div className=" flex flex-col basis-1/3">
          <div className="flex flex-row justify-around">
            <p>Order Qty</p>
            <p>{item.orderAmt}</p>
          </div>
          
          <form className="flex flex-col align-middle" onSubmit={updateOrderItem}>
            <input name="changeAmt" type="text" placeholder='Update Order Amount' />
            <button className="bg-red-400" type="submit">Update Order</button>
          </form>
        </div>

      </div>
    </React.Fragment>
    
  )
}

export default AlreadyInCart;