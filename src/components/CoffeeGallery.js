import React from 'react';

function CoffeeGallery ({galleryDisplay, onItemClick}) {

  const renderTile = (column) => {
    return(
      galleryDisplay.map((item, index) => {
        let tile;       
        if (index%3 === column) {
          tile = (        
            <div onClick={() => onItemClick(item.id)} key={item.id} className="flex-col justify">
              <p>{item.name}</p>
              <p>{item.origin}</p>
              <p>{item.pricePerLb}</p>
              <p>{item.roast}</p>
              <p>{item.tastingNotes}</p>
              <p>Quantity: {item.quantityLbs}</p>
            </div>
          )        
        }
        return tile;        
      })
    )
  }

  // const whenItemIsClicked = (id) => {
  //   props.onItemClick(id);
  // }

  return (
    <React.Fragment>
      <div className="flex justify-around">
        <div className="flex-col space-y-10">{renderTile(0)}</div>
        <div className="flex-col space-y-10">{renderTile(1)}</div>
        <div className="flex-col space-y-10">{renderTile(2)}</div>        
      </div>
    </React.Fragment>

  );
}

export default CoffeeGallery; 
