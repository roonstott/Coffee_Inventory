import React, {useState} from 'react';
import { v4 } from 'uuid';

function AddForm(props) {

  const [errorMessage, setErrorMessage] = useState(null);
  const [errorMessageNumber, setErrorMessageNumber] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage(null); 
    setErrorMessageNumber(null);    
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

    if (Object.values(newSack).includes("")) {
      setErrorMessage("All form fields must be completed");
    }

    if (isNaN(newSack.pricePerLb) || isNaN(newSack.quantityLbs)) {
      setErrorMessageNumber("'Price Per Lb' and 'Quantity' must be numbers");
    }

    if(!isNaN(newSack.pricePerLb) && !isNaN(newSack.quantityLbs) && !Object.values(newSack).includes("")) {
      props.onAddSack(newSack);
    }    
  }

  return (
    <React.Fragment>
      <div className="flex justify-center">
        <h2 className="align-center font-mono text-4xl">Add A New Sack Of Coffee To The Store</h2>
      </div>
      <div className="flex justify-center">
        <p className="align-center font-mono text-xl text-red-400">{errorMessage}</p>
      </div>
      <div className="flex justify-center">
        <p className="align-center font-mono text-xl text-red-400">{errorMessageNumber}</p>
      </div>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="flex flex-col m-10">
          <div className="flex items-center">
            <label className="w-28">Name</label>
            <input id="name" className='p-2 mx-12 my-3 border-2' type="text" name="name" placeholder='Name'></input>
          </div>
          <div className="flex items-center">
            <label  className="w-28">Orign</label>
            <input id="origin" className='p-2 mx-12 my-3 border-2' type="text" name="origin" placeholder='Origin'></input>
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
            <input id="tastingNotes" className='p-2 mx-12 my-3 border-2' type="text" name="tastingNotes" placeholder='Tasting Notes'></input>
          </div> 
          <div className="flex items-center">
            <label className="w-28">Quantity</label>
            <input className='p-2 mx-12 my-3 border-2' type="text" name="quantityLbs" placeholder='Quantity (lbs)'></input>
          </div>       
          <button className="w-40 my-4 border-2 border-black p-2 rounded-lg outline bg-red-200" type="submit">Add Sack</button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default AddForm;