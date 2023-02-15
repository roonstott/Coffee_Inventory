import React from 'react';
import PropTypes from "prop-types";


function CoffeeGallery ({galleryDisplay, onItemClick}) {

  const renderTile = (column) => {
    return(
      galleryDisplay.map((item, index) => {
        let tile;       
        if (index%3 === column) {
          tile = (        
            <div onClick={() => onItemClick(item.id)} key={item.id} className="flex-col justify border-2 border-black p-4 rounded-lg outline outline-offset-2 bg-rose-100 mx-4">
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

  return (
    <React.Fragment>
       <div className="flex justify-center">
        <h2 className="align-center font-mono text-4xl">Shop Beans</h2>
      </div>
      <div className="flex justify-around m-16">
        <div className="flex-col space-y-10">{renderTile(0)}</div>
        <div className="flex-col space-y-10">{renderTile(1)}</div>
        <div className="flex-col space-y-10">{renderTile(2)}</div>        
      </div>
    </React.Fragment>

  );
}

CoffeeGallery.propTypes = {
  onItemClick: PropTypes.func,  
  galleryDisplay: PropTypes.array  
};

export default CoffeeGallery; 
