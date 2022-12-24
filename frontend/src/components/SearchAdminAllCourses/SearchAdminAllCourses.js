import axios from 'axios';
import { useState} from 'react';
import './SearchAdminAllCourses.css'

const SearchAdminAllCourses = (props)=>{
    
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
        if(props.Type === "searchMyCourses"){
            await axios.get(`http://localhost:9000/instructor/searchmycourses/salama/${message}`).then(
                (res)=> {
                    const mycourses = res.data;
                    setResults(mycourses);
                }
            )

        }
        else{
            await axios.get(`http://localhost:9000/guest/search/${message}`).then(
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
        <div className="SearchAdminAllCourses_search_box">
        <button className="SearchAdminAllCourses_btn_search" onClick={clickhandler}><i class="fas fa-search"></i></button>
        <input type="text" class="SearchAdminAllCourses_input_search" onChange={changehandler} placeholder="Type to Search"></input>
        </div>

        <br></br>

        {error&& <div>
            <h1>NOT FOUND</h1>
            
            </div>}
        </div>


    )




}


export default SearchAdminAllCourses