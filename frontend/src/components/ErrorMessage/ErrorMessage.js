import React from 'react'
import '../../App.css'

//const sara = 0;

function ErrorMessage(props) {
  if(props.sara === '1'){
    return (
        <div>
            <h1>Sara =1</h1>
        </div>
    )
}
else{
    return(
        <div>
            <h1>Sara = 0</h1>
        </div>
    )
}

}

export default ErrorMessage