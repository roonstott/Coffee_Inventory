import React from 'react'; 

function Header ({onNavBarClick}) {
  return (
    <React.Fragment>
      <div className="flex justify-around">
        <button onClick={() => onNavBarClick("Home")}>Home</button>
        <button onClick={() => onNavBarClick("Buy")}>Buy Beans</button>
        <button onClick={() => onNavBarClick("About")}>About Us</button>
        <button onClick={() => onNavBarClick("Cart")}>Your Cart</button> 
      </div>   
    </React.Fragment>
  )
}

export default Header;