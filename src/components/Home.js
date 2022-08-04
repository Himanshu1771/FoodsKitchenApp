import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Home.css'

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='home' >
        <h1>Welcome to Food's</h1>
        <h1>Kitchen</h1>
        <button className="btn1" onClick={() => navigate("/Card")}>GO TO MENU </button>
      </div>
    </>
  )
}

export default Home
