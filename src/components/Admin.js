import React, {useState} from 'react';
import PropTypes from "prop-types";
import AddForm from './AddForm';


function Admin ({onAddSack}) {

  const [showAdd, setShowAdd] = useState(false);     

  const ShowAddButton = () => {
    return (
      <React.Fragment>
        <div className='flex justify-center'>
          <button className="my-4 border-2 border-black p-2 rounded-lg outline bg-red-200" type="click" onClick={() => setShowAdd(true)}>Add A New Sack of Coffee To Inventory?</button>
        </div>
      </React.Fragment>
    )
  }

  let display;  

  if (showAdd) {
    display = <AddForm  onAddSack={onAddSack}/>
  } else if (!showAdd) {
    display = ShowAddButton();
  }

  return (
    <React.Fragment>
          
      {display}
      
    </React.Fragment>
  )
}

Admin.propTypes = {
  onAddSack: PropTypes.func
};


export default Admin;