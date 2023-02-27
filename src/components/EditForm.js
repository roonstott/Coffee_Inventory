import React, { useState } from 'react';

function EditForm({handleEdit, handleDelete, item, cancel}) {
  
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorMessageNumber, setErrorMessageNumber] = useState(null);

  const handleEditSubmit = (event) => {
    event.preventDefault();
    setErrorMessage(null); 
    setErrorMessageNumber(null);    
    const updatedSack = {
      name: event.target.name.value,
      origin: event.target.origin.value,
      pricePerLb: parseInt(event.target.pricePerLb.value),
      roast: event.target.roast.value,
      tastingNotes: event.target.tastingNotes.value,
      quantityLbs: parseInt(event.target.quantityLbs.value),
      soldOut: false,
      id: event.target.id.value
    }

    if (Object.values(updatedSack).includes("")) {
      setErrorMessage("All form fields must be completed");
    }

    if (isNaN(updatedSack.pricePerLb) || isNaN(updatedSack.quantityLbs)) {
      setErrorMessageNumber("'Price Per Lb' and 'Quantity' must be numbers");
    }

    if(!isNaN(updatedSack.pricePerLb) && !isNaN(updatedSack.quantityLbs) && !Object.values(updatedSack).includes("")) {
      handleEdit(updatedSack);
    }    
  }

  return (
    <React.Fragment>      
      <div className="flex justify-center">
        <p className="align-center font-mono text-xl text-red-400">{errorMessage}</p>
      </div>
      <div className="flex justify-center">
        <p className="align-center font-mono text-xl text-red-400">{errorMessageNumber}</p>
      </div>
      <div className="flex justify-center">
        <form onSubmit={handleEditSubmit} className="flex flex-col m-10">
          <div className="flex items-center">
            <label className="w-28">Name</label>
            <input id="name" className='p-2 mx-12 my-3 border-2' type="text" name="name" placeholder={item.name}></input>
          </div>
          <div className="flex items-center">
            <label  className="w-28">Orign</label>
            <input id="origin" className='p-2 mx-12 my-3 border-2' type="text" name="origin" placeholder={item.origin}></input>
          </div>
          <div className="flex items-center">
            <label className="w-28">Price Per Lb</label>
            <input className='p-2 mx-12 my-3 border-2' type="text" name="pricePerLb" placeholder='Price Per Lb ($)'></input>
          </div>
          <div className="flex items-center">
            <label className="w-28">Roast</label>
            <select className='p-2 mx-12 my-3 border-2' name='roast'>
              <option value="Light">Light</option>
              <option value="Medium">Medium</option>
              <option value="Dark">Dark</option>
            </select>
          </div>
          <div className="flex items-center">
            <label className="w-28">Tasting Notes</label>
            <input id="tastingNotes" className='p-2 mx-12 my-3 border-2' type="text" name="tastingNotes" placeholder={item.tastingNotes}></input>
          </div> 
          <div className="flex items-center">
            <label className="w-28">Quantity</label>
            <input className='p-2 mx-12 my-3 border-2' type="text" name="quantityLbs" placeholder='Quantity (lbs)'></input>
          </div>
          <input type="hidden" value={item.id} name="id"/>
          <div className="flex justify-around">   
            <button className="w-40 my-4 border-2 border-black p-2 rounded-lg outline bg-red-200" type="submit">Edit</button>
            <button className="w-30 my-4 border-2 border-black p-2 outline" type="click" onClick={() => cancel(false)}>Cancel</button>
          </div>
        </form>
      </div>
      <button type="click" onClick={() => handleDelete(item.id)} className="w-30 my-4 border-2 border-black p-2 outline bg-red-400">Remove From Inventory</button>
    </React.Fragment>
  );
}

export default EditForm;