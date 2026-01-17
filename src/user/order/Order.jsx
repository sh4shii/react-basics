import React, { useState } from 'react'
import User from '../User'

// const Order = ({userName}) => {
const Order = () => {
  const [orders, setOrders] = useState(["Buiscuit", "choclate"]);
  const [inputValue, setInputValue] = useState("");

  const handleAddOrder = () => {
    if (inputValue.trim()) {
      setOrders([...orders, inputValue]);
      setInputValue("");
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  console.log("orders page rendered");

  return (
  <div style={{border: '3px solid green'}}>
    <div>Order showing for user 1</div>

    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter new order"
      />
      <button onClick={handleAddOrder}>Add Order</button>
    </div>

    {
      orders.map((item, idx) => (
        <p key={idx}>{item}</p>
      ))
    }
    </div>
  )
}

export default Order