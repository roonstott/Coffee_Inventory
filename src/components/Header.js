import React from 'react'; 
import PropTypes from "prop-types";


function Header ({onNavBarClick, cartQty}) {
  return (
    <React.Fragment>
      <div className="my-8 mx-16">
        <div className="flex border-2 border-black justify-around my-8 py-8">
          <button onClick={() => onNavBarClick("Home")}>Home</button>
          <button onClick={() => onNavBarClick("Buy")}>Buy Beans</button>
          <button onClick={() => onNavBarClick("About")}>About Us</button>
          <button onClick={() => onNavBarClick("Cart")}>Your Cart({cartQty})</button>
          <button onClick={() => onNavBarClick("Admin")}>Admin</button>

        </div>
      </div>
    </React.Fragment>
  )
}

Header.propTypes = {
  onNavBarClick: PropTypes.func,  
  cartQty: PropTypes.number
};

export default Header;