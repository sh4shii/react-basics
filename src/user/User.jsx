import React, { useState } from 'react'
import Order from './order/Order'

const User = () => {
  const [name, setName] = useState("");

  console.log("user page rendered");
  return (
    <div style={{border: '2px solid red'}}>
      <p>Enter your name:</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>User name is: {name}</div>
      <p>His orders are: </p>
      <Order
        userName={name}
      />
    </div>
  )
}

export default User

/*
start:
""
a -> state cganged from "" to a

component renrder

am => state cganged from a to am


rendering always happens in downward direction.

A -> B -> C ........ -> N

if some ith component renders, then i till N all will render but not (1 to i - 1)


*/
