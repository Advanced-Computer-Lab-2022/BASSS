import axios from 'axios';
import { useState} from 'react';
import './Search.css'

const Search = ()=>{
    
    const [results,setResults] = useState([]);
    const [message,setmessage] = useState('');
    
    const changehandler = (event) =>{
        setmessage(event.target.value)
    }

    const clickhandler = () =>{
        getResults();
    }

    const getResults=  async () => { 
        await axios.get(`http://localhost:9000/guest/${message}`).then(
            (res) => {
                const adham = res.data;
                setResults(adham);
            }
       )
    }

    return(
        <div className='Landing-container'>
            <input placeholder='Search for a course ?' className='search' id='search' onChange={changehandler}></input>

            <div className='Landing-btn'>
                <button className='search-btn' onClick={clickhandler} >Search</button>
            </div>


                 {results.map((result) => (
                     <h1>Course:{result.Title}</h1>
                 ))}

        </div>

    )




}


export default Search