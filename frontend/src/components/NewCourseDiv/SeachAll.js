import axios from 'axios';
import { useState} from 'react';
import './SearchAll.css'
import { useEffect } from '../../../node_modules/react/cjs/react.development';

const SearchAll = (props)=>{
    
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
        if(message==""){
            props.setCourses("");
        }else {

            if(props.Type === "searchMyCourses"){
                try {
                    await axios.get(`http://localhost:9000/instructor/searchmycourses/${message}`).then(
                        (res)=> {
                        const mycourses = res.data;
                        setResults(mycourses);
                        props.setCourses(mycourses);
                        
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
                        props.setCourses(s);
                    }
                    )
                }
                catch (error) {
                    setError(error.response.data)
                }
            }
            
        }
        }
        
        return(
        <div>
        <div class="search-boxMeow">
        <button class="btn-searchMeow" onClick={clickhandler}><i class="fas fa-search"></i></button>
        <input type="text" class="input-searchMeow" onChange={changehandler} placeholder="Type to Search..."></input>
        </div>

        {error&& <label color='red'>{error}</label>}
        </div>
    )
}


export default SearchAll