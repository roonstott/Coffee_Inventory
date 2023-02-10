import React from 'react'; 

function Header ({onNavBarClick, cartQty}) {
  return (
    <React.Fragment>
      <div className="flex justify-around">
        <button onClick={() => onNavBarClick("Home")}>Home</button>
        <button onClick={() => onNavBarClick("Buy")}>Buy Beans</button>
        <button onClick={() => onNavBarClick("About")}>About Us</button>
        <button onClick={() => onNavBarClick("Cart")}>Your Cart({cartQty})</button> 
      </div>   
    </React.Fragment>
  )
}

export default Header;