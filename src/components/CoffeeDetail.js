import React from 'react'; 

function CoffeeDetail ({item, onHomeClick}) {
  return (
    <React.Fragment>
      <div>
        <button onClick={onHomeClick}>Go Home</button>
        <p>This is a coffee detail</p>
        <p>{item.name}</p>
      </div>
    </React.Fragment>
  )
}

export default CoffeeDetail;