import React,{useEffect, useState} from 'react'
import axios from 'axios';
import './SelectCountry.css'
import countries from 'countries-list'
const countryCodes = Object.keys(countries.countries);
const countryNames = countryCodes.map(code => countries.countries[code].name);

const SelectCountry = (props) => {
  const [country , setcountry] = useState('');
  const [countryList , setcountryList] = useState([]);


  const sara = () => {
    if(countryList.length<=5){
      for(let i = 0 ; i < countryNames.length ; i++){
        if(countryList.length !== 10 && countryNames[i] == "Germany" || countryNames[i] == "France" || countryNames[i] == "Spain" || countryNames[i] == "Portugal" || countryNames[i] == "Italy" || countryNames[i] == "Netherlands" || countryNames[i] == "Belgium" || countryNames[i] == "United Arab Emirates" || countryNames[i] == "Egypt" || countryNames[i] == "United Kingdom"){
          countryList.push(countryNames[i])
        }
      }
    }
    else return
  }

  useEffect( () => {sara()})

  const changeHandler = (e)=>{
     setcountry(e.target.value)
     props.setCountry(e.target.value)
     //alert('country selected')
  }
  
  // alert(country);
  const totalpath = window.location.pathname;
  var mySubString = totalpath.substring(
    totalpath.indexOf("/") + 1, 
    totalpath.lastIndexOf("/")
);
  // // alert(mySubString)
  // const select = async ()=>{
  //   await axios.get(`http://localhost:9000/${mySubString}/${country}`)
  // }

  // select();

  return (
      <div className='select'>

        <select onChange={changeHandler} className='select1'>
          <option><strong>Select Country</strong></option>
          {countryList.map((option) => (
            <option >
              {option}
            </option>
          ))}
        </select>

      </div>

  )
}

export default SelectCountry

