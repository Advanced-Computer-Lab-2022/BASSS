import axios from 'axios';
import { useState} from 'react';
import './Search.css'

const Search = (props)=>{
    
    const [error,setError] = useState('')
    const [results,setResults] = useState([]);
    const [visibile, setvisible]=useState(false);
    const [message,setmessage] = useState('');
    const [corporate,setcorporate] = useState(false);

    const visibility = ()=>{
        setvisible(!visibile);
    }

    const changehandler = (event) =>{
        setmessage(event.target.value)
    }

    const clickhandler = () =>{
        visibility();
        getResults();
    }

    const rowhandler = () =>{
        setcorporate(!corporate);
    }


    const getResults=  async () => { 
        if(props.Type === 'corporate'){
            rowhandler();
        }
        if(props.Type === "searchMyCourses"){
            try {
                await axios.get(`http://localhost:9000/instructor/searchmycourses/${message}`).then(
                    (res)=> {
                        const mycourses = res.data;
                        setResults(mycourses);
                    }
                )
            }
            catch (error) {
                setError(error.response.data)
            }
        }
        else{
            try{
                await axios.get(`http://localhost:9000/search/${message}`, {withCredentials: false}).then(
                    (res) => {
                        const s = res.data;
                        setResults(s);
                    }
               )
            }
            catch (error) {
                setError(error.response.data)
            }
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
        <br></br>
        <h1> Search Results</h1>
        <table class="fl-table">

        <thead>
            <th> Course Title</th>
            <th> Subject </th>
            <th> Instructor Name</th>
        </thead>
        <tbody>
        {results.map((result) => (
            <tr 
              onClick={() => {if(!corporate){window.location.href= `/instructor/courseDetails?courseId=${result._id}`} }}
            >
                <td>{result.Title}</td>
                <td>{result.Subject}</td>
                <td>{result.InstructorUserName}</td>
            </tr>
        ))}  
        </tbody>
        </table>
        </div>}

        {error&& <label color='red'>{error}</label>}
        </div>
    )
}


export default Search