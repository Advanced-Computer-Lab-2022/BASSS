import React,{useState} from 'react'
import axios from 'axios'
import './SelectCountry.css'
import countries from 'countries-list'
const countryCodes = Object.keys(countries.countries);
const countryNames = countryCodes.map(code => countries.countries[code].name);
function SelectCountry() {
  const [country , setcountry] = useState('');

  const changeHandler = (e)=>{
     setcountry(e.target.value)
     alert('country selected')
  }
  
  // alert(country);
  const totalpath = window.location.pathname;
  var mySubString = totalpath.substring(
    totalpath.indexOf("/") + 1, 
    totalpath.lastIndexOf("/")
);
  // alert(mySubString)
  const select = async ()=>{
    await axios.get(`http://localhost:9000/${mySubString}/${country}`)
  }

  select();

  return (
    <div className='SCbody'> 

      <div className='select'>

        <select onChange={changeHandler} className='select1'>
          {countryNames.map((option) => (
            <option >
              {option}
            </option>
          ))}
        </select>

      </div>

    </div>
  )
}

export default SelectCountry

