import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addcart,removecart } from '../redux/StoreSlice'
import add from "../assets/add.svg";
import remove1 from "../assets/remove1.svg";
import '../css/Cart.css'
import { useNavigate } from 'react-router-dom'



const Cart = () => {

const dispatch = useDispatch()
const cart = useSelector(state => state.store)
const navigate = useNavigate();
const handleadd =(data) =>{
  dispatch(addcart(data));
}

const handleremove = (data) => {
  dispatch(removecart(data))
}

  return (
    
   <div>
    {cart.cartitem?.map((data) =>(
      <div className="card">
      <img src={data.image} alt="" />
      <h3>{data.name}</h3>
      <p>Price: {data.price}</p>
      <p>Quantity: {data.cardQuantity}</p>
      <p>Total: {parseInt(data.price)*parseInt(data.cardQuantity)}</p>
      <button className="btn"  onClick={() => handleadd(data)}><img src={add}/></button>
      <button className="btn"  onClick={() => handleremove(data)}><img src={remove1} id="img1"  /></button>
    </div>  
    ))}
  
  <div>
  <button type="button" className='cbtn'  onClick={() => navigate("/Checkout")}>Checkout</button>
  </div>
</div>

  )
}

export default Cart
