import React from 'react'; 

function CoffeeDetail ({item, onBackClick}) {
  return (
    <React.Fragment>
      <div>
        <button onClick={onBackClick}>Back To All Coffee</button>
        <p>This is a coffee detail</p>
        <p>{item.name}</p>
      </div>
    </React.Fragment>
  )
}

export default CoffeeDetail;