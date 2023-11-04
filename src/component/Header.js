import React from "react";
import "./Header.css";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{basket , user}]=useStateValue() 
 
  console.log(basket)
  const login = ()=>{
    if(user){
      auth.signOut()
    }
  }
  return ( 
    <nav className="header">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png?20220213013322"
          alt="amazon logo"
        />
      </Link>
      <div className="search-container">
      <input type="text" id="search" placeholder="Search..." />
  <FaSearch className="search-button" />

      </div>

      <div className="nav-links">
        <div className="link-container">
          <Link to={!user &&"/login"}>
            <div onClick={login} className="nav_option" >
              <span  className="line-1">Hello {user?.email ? user?.email.slice(0,user?.email.indexOf('@')): ''}</span>
              <span  className="line-2">{user?"Sign Out":"Sign In"}</span>
            </div>
          </Link>
        </div>
      
        <div className="link-container">
          <Link to="/orders">
            
            <div className="nav_option">
              <span  className="line-1">Returns and</span>
              <span  className="line-2">Orders</span>
                
            </div>
          </Link>
        </div>
        <div className="link-container">
          <Link to="/prime">
            
            <div className="nav_option">
              <span className="line-1" >Your</span>
              <span className="line-2"> Prime</span>
            </div>
          </Link>
        </div>
      </div>
      <Link to="/checkout">
      <div className="cart-icon">
        <FaShoppingCart />
        <span id="cart-count">{basket?.length}</span>
      </div>
      </Link>
    </nav>
  );
}

export default Header;
