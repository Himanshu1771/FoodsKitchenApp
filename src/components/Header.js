import React from "react";
import logo from "../assets/logo.svg";
import "../css/Header.css";
import {Link} from "react-router-dom"
import cart from '../assets/cart.svg';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Header = () => {
  const item = useSelector(state => state.store)
  const navigate = useNavigate();
  return (
    <>
    <nav className="navbar">
      <img src={logo} alt="logo"  />
      <Link to="/" className="Brand" fill="white">Food's Restaurant</Link>
      <><img src={cart} className='cart' id="scart"  onClick={() => navigate("/Cart")}/><h5 id="len">{item.cartitem.length}</h5></>
    </nav>
    </>
  );
};

export default Header;
