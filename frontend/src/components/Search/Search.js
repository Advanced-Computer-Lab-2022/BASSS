import axios from 'axios';
import { useState} from 'react';
import './Search.css'

const Search = (props)=>{
    
    const [error,seterror] = useState(false)
    const [results,setResults] = useState([]);
    const [visibile, setvisible]=useState(false);
    const [message,setmessage] = useState('');
    
    const visibility = ()=>{
        setvisible(!visibile);
    }

    const changehandler = (event) =>{
        setmessage(event.target.value)
    }

    const errorHandle = () =>{
        seterror(!error)
    }

    const clickhandler = () =>{
        visibility();
        getResults();
    }



    const getResults=  async () => { 
        if(!(props.Type === "instructor")){

            await axios.get(`http://localhost:9000/guest/${message}`).then(
                (res) => {
                    if(res.status===200){
                        const s = res.data;
                        setResults(s);
                    }
                    else{
                        errorHandle();
                    }
    
                }
           )
        }
    }

    return(
        <div>
        <div class="search-box">
        <button class="btn-search" onClick={clickhandler}><i class="fas fa-search"></i></button>
        <input type="text" class="input-search" onChange={changehandler} placeholder="Type to Search..."></input>
        </div>

        <br></br>
        {visibile && <div class="table-wrapper" >

        
        <table class="fl-table">

        <thead>
        <tr>
            <th>Search Results for {message}</th>
        </tr>
        </thead>
        <tbody>
        {results.map((result) => (
            <tr 
              onClick={() => window.location.href= "/instructor/courseDetails" } //window.location.href=`/filter?blogId=${blog._id}`
            >
                <td>{result.Title}</td>
                {/* <td>{result.InstructorUserName}</td> */}
            </tr>
        ))}  
        </tbody>
        </table>
        </div>}

        {error&& <div>
            <h1>NOT FOUND</h1>
            
            </div>}
        </div>


    )




}


export default Search