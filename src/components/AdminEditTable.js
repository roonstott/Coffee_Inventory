import React from 'react'; 

function AdminEditTable({inventory, showItemEditForm}) {

  const makeRows = (inv) => {
    const rows = inv.map((bean, index) => {
      return (
          <tr key={index}>
            <td className='p-4'>{bean.name}</td>
            <td className='p-4'>
              <button type="click" className='w-30 my-4 border-2 border-black p-2 outline' onClick={() => showItemEdit(bean)}>Edit</button>
            </td>
          </tr>
      )
    })
    return rows;
  }

  const showItemEdit = (item) => {
    showItemEditForm(item);
  }

  const tableRows = makeRows(inventory);

  return (
    <React.Fragment>
      <div className="flex align-center justify-center">
        <table className="table-fixed">          
          <tbody>
            {tableRows}                        
          </tbody>
        </table>
      </div>
    </React.Fragment>
  )
}

export default AdminEditTable;