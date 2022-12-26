import axios from 'axios';
import { useState} from 'react';
import './SearchAdminAllCourses.css'

const SearchAdminAllCourses = (props)=>{
    
    const [error,seterror] = useState(false)
    const [visibile, setvisible]=useState(false);
    const [message,setmessage] = useState('');

    const visibility = ()=>{
        setvisible(!visibile);
    }

    const changehandler = (event) =>{
        setmessage(event.target.value)
        props.Searchhandler(true)
        getResults();

    }

    const errorHandle = () =>{
        seterror(!error)
    }

    const clickhandler = () =>{
        visibility();
        getResults();

    }


    const getResults=  async(req,res) => { 
            await axios.get(`http://localhost:9000/guest/search/${message}`).then(
                (res) => {
                    if(res.status===200){
                        const s = res.data;
                        props.AllCoursesArrayhandler(s);
                    }
                    else{
                        errorHandle();
                    }
    
                }
           )
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