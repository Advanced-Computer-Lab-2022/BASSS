import axios from 'axios';
import { useState} from 'react';
import './Search.css'

const Search = (props)=>{
    
    const [error,seterror] = useState(false)
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

    const errorHandle = () =>{
        seterror(!error)
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
        if(props.Type === "searchMycourses"){
            //dyman by search 3la courses bassel bas
            await axios.get(`http://localhost:9000/bassel/${message}`).then(
                (res)=> {
                    const mycourses = res.data;
                    setResults(mycourses);
                }
            )

        }
        else{
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

        {error&& <div>
            <h1>NOT FOUND</h1>
            
            </div>}
        </div>


    )




}


export default Search