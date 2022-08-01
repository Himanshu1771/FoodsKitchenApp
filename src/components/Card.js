import React from "react";
import '../css/Card.css'
import add from "../assets/add.svg";
import remove from "../assets/remove.svg";
import { useDispatch } from 'react-redux';
import { addcart } from '../redux/StoreSlice';
import { removecart } from '../redux/StoreSlice'


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

  const handleremove = (data) => {
    dispatch(removecart(data))
  }

  return (
  <>
   <div className="card">
      <img src={data.image} alt="" />
      <h3>{data.name}</h3>
      <p>price: {data.price}</p>
      <button className="btn" onClick={() => handleadd(data)}><img src={add}  /></button>
      <button className="btn"  onClick={() => handleremove(data)}><img src={remove} id="img1"  /></button>
    </div>
  </>
   
  );
};

export default Card;


