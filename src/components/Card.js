import React from "react";
import '../css/Card.css'
import add from "../assets/add.svg";
import {useDispatch } from 'react-redux';
import { addcart } from '../redux/StoreSlice';

const Card = (props) => {
  const {data} = props;
  const dispatch = useDispatch()

  const handleadd =(data) =>{
    const cart = document.getElementById('scart')
    cart.style.visibility = 'visible'
    const badge = document.getElementById('len')
    badge.style.visibility = 'visible'

    dispatch(addcart(data)); 
  }
  return (
  <>
   <div className="card">
      <img src={data.image} alt="" />
      <h3>{data.name}</h3>
      <p>price: {data.price}</p>
      <button className="btn" onClick={() => handleadd(data)}><img src={add}  /></button>
    </div>
  </>
   
  );
};

export default Card;


