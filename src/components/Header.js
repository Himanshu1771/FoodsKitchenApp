import React , { useEffect } from 'react'
import logo from "../assets/logo.svg";
import "../css/Header.css";
import { Link } from "react-router-dom"
import cart from '../assets/cart.svg';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout,getquantity } from '../redux/StoreSlice'
import { useDispatch } from "react-redux";

const Header = () => {
  const {carttotalQuantity} = useSelector(state => state.store)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getquantity())
  })

  const handlelogout = (e) => {
    e.preventDefault();
    dispatch(logout());

    const cart = document.getElementById('scart')
    cart.style.visibility = 'hidden'

    const badge = document.getElementById('len')
    badge.style.visibility = 'hidden'

    document.getElementById('out').style.visibility = 'hidden'

  }

  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="logo" />
        <Link to={'./Home'} className="Brand" fill="white">Food's Restaurant</Link>
        <button className="logout" id="out" onClick={(e) => handlelogout(e)}>Logout</button>
        <><img src={cart} className='cart' id="scart" onClick={() => navigate("/Cart")} /><h5 id="len">{carttotalQuantity}</h5></>
      </nav>
    </>
  );
};

export default Header;
