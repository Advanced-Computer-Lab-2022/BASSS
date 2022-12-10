import React, { useState } from 'react'



function Meow() {
  const [meow,setMeow] = useState(false);
  const handleMeow = () => { setMeow(!meow)} ;
  return (

  <div>
      {!meow && <h1> The besbes is meowing</h1>}
      <button onClick={handleMeow}>{meow? "Meow" :"Stop Meowing" }</button>
      {meow && <h1>The besbes in not meowing</h1>}
      </div>
)
}



export default Meow