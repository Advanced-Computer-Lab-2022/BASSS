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
                const s = res.data;
                setResults(s);
            }
       )
    }

    return(
        <div>

        
        
        {/* // <div className='searchbar_div'>
        //     <input placeholder='Search for a course ?' className='search_soha' id='search' onChange={changehandler}></input>

        //     <div className='Landing-btn'>
        //         <button className='search-btn' onClick={clickhandler} >Search</button>
        //     </div>

        //         <th>Search Results for {message}</th>
        //          {results.map((result) => (
 */}
        {/* //              <td>                    >
        //                 Course:{result.Title}
        //             </td>
        //          ))} */}

        {/* // </div> */}
        <div class="search-box">
        <button class="btn-search" onClick={clickhandler}><i class="fas fa-search"></i></button>
        <input type="text" class="input-search" onChange={changehandler} placeholder="Type to Search..."></input>
        </div>

        <br></br>
        <div class="table-wrapper" visibility="hidden">

        
        <table class="fl-table">

        <thead>
        <tr>
            <th>Search Results for {message}</th>
        </tr>
        </thead>
        <tbody>
        {results.map((result) => (
            <tr 
              onClick={() => alert(result.Title) } //window.location.href=`/filter?blogId=${blog._id}`
            >
                <td>{result.Title}</td>
            </tr>


        ))}  
        </tbody>
        </table>
        </div>
        </div>


    )




}


export default Search