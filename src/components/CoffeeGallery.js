import React from 'react';

function CoffeeGallery (props) {


  return (
    <React.Fragment>
      {
        props.galleryDisplay.map((item, index) => {
          return (
            <div key={item.id} className="flex-col justify">
              <p>{item.name}</p>
              <p>{item.origin}</p>
              <p>{item.pricePerLb}</p>
              <p>{item.roast}</p>
              <p>{item.tastingNotes}</p>
            </div>
          )
        })
      }

    </React.Fragment>

  );
}

export default CoffeeGallery; 
