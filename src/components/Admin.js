import React, {useState} from 'react';
import PropTypes from "prop-types";
import AddForm from './AddForm';
import AdminEditTable from './AdminEditTable';
import EditForm from './EditForm';


function Admin ({onEdit, onDelete, onAddSack, inventory}) {

  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);      

  const ShowAddButton = () => {
    return (
      <React.Fragment>
        <div className='flex justify-center'>
          <button className="my-4 border-2 border-black p-2 rounded-lg outline bg-red-200" type="click" onClick={() => setShowAdd(true)}>Add A New Sack of Coffee To Inventory?</button>
        </div>
      </React.Fragment>
    )
  }  

  let addDisplay;
  let editDisplay;
  let headerText = "Edit Inventory";

  if (showAdd) {
    addDisplay = <AddForm onAddSack={onAddSack} cancel={setShowAdd}/>;
    headerText = "Add a new sack of coffee to the store"
  }

  if (!showAdd && !showEdit) {
    addDisplay = <ShowAddButton />;
    editDisplay = <AdminEditTable inventory={inventory} showItemEditForm={setShowEdit}/>
  }

  if (showEdit) {
    editDisplay = <EditForm cancel={setShowEdit} handleEdit={onEdit} handleDelete={onDelete} item={showEdit}/>;
    headerText = `Edit ${showEdit.name}`;    
  }   

  return (
    <React.Fragment>
      <div className="flex justify-center my-12">
        <h2 className="align-center font-mono text-4xl">{headerText}</h2>
      </div>
      <div className='my-8'>
        {editDisplay}   
      </div>             
      {addDisplay}            
      
    </React.Fragment>
  )
}

Admin.propTypes = {
  onAddSack: PropTypes.func
};

export default Admin;