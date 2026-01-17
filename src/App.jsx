// import React, { useState } from 'react'

// const App = () => {
//   const [count, setCount] = useState(0);

//   // var count = 0;

//   const handleAdd = () => {
//     setCount((prev) => prev + 1);
//     console.log("count value is ", count);
//     // count++;
//       // alert("count increased");
//   }
//   console.log('app rendered');
//   return (
//     <>
//     <h1 style={{color: 'red', margin: 'auto'}}>USERS PAGE</h1>
//     <h3>current count: {count}</h3>
//     <button onClick={handleAdd}>Add</button>
//     </>
//   )
// }

// export default App

// --------------------------------------------------------------------

// local var + state var exxample

// import React, { useState } from "react";

// const App = () => {
//   const [stateCount, setStateCount] = useState(0);

//   let localCount = 0; //  LOCAL VARIABLE

//   const handleClick = () => {
//     localCount++;                 // mutate local var
//     setStateCount(c => c + 1);    // trigger re-render
//     console.log("Clicked:");
//     console.log("localCount =", localCount);
//     console.log("stateCount =", stateCount);
//   };

//   console.log("RENDER:");
//   console.log("localCount =", localCount);
//   console.log("stateCount =", stateCount);

//   return (
//     <>
//       <h3>Local count: {localCount}</h3>
//       <h3>State count: {stateCount}</h3>
//       <button onClick={handleClick}>Add</button>
//     </>
//   );
// };

// export default App;


// re-render
// 1. state change -> clear
// 2. props change
// 3. context value change

// --> local variables are ignored for re-rendering
// local var are re initialized when rerender






// ----------------------------------------

import React, { useState } from 'react'
import User from './user/User'

const App = () => {
  const [count, setCount] = useState(0);
  console.log("app page rendered");
  return (
    <>
    <div>App</div>
    <h1>Count: {count}</h1>
    <button onClick={() => setCount((p) => p + 1)}>Add</button>
    <User />
    </>
  )
}

export default App