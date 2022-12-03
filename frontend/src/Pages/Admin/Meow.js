import React, { useState } from 'react'



function Meow() {
  var sara = 'sara'
  const [meow,setMeow] = useState('');
  const handleMeow = () => { if(meow==''){setMeow(sara)} else if(meow=='sara') {setMeow('')}} ;
  return (

  <div>
      {!meow && <h1> The besbes is meowing</h1>}
      <button onClick={handleMeow}>{meow == 'sara'? "Meow" :"Stop Meowing" }</button>
      {meow && <h1>The besbes in not meowing</h1>}
      </div>
)
}



export default Meow