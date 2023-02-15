import React from 'react';
import { v4 } from 'uuid';
import PropTypes from "prop-types";


function Admin ({onAddSack}) {

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newSack = {
      name: event.target.name.value,
      origin: event.target.origin.value,
      pricePerLb: parseInt(event.target.pricePerLb.value),
      roast: event.target.roast.value,
      tastingNotes: event.target.tastingNotes.value,
      quantityLbs: parseInt(event.target.quantityLbs.value),
      soldOut: false,
      id: v4()
    }
    if(!isNaN(newSack.pricePerLb) && !isNaN(newSack.quantityLbs)) {
      onAddSack(newSack);
    }    
  }

  return (
    <React.Fragment>

      <div className="flex justify-center">
        <h2 className="align-center">Add A New Sack Of Coffee To The Store</h2>
      </div>
      
      <form onSubmit={onFormSubmit} className="flex flex-col m-10">
        <input className='py-2' type="text" name="name" placeholder='Name'></input>
        <input className='py-2' type="text" name="origin" placeholder='Origin'></input>
        <input className='py-2' type="text" name="pricePerLb" placeholder='Price Per Lb'></input>
        <input className='py-2' type="text" name="roast" placeholder='Roast'></input>
        <input className='py-2' type="text" name="tastingNotes" placeholder='Tasting Notes'></input>
        <input className='py-2' type="text" name="quantityLbs" placeholder='Quantity In Lbs'></input>
        <div className="flex justify-center">
          <button className="w-40 my-4 border-2 border-black p-2 rounded-lg outline bg-red-200" type="submit">Add Sack</button>
        </div>
      </form>
    </React.Fragment>
  )
}

Admin.propTypes = {
  onAddSack: PropTypes.func
};


export default Admin;