import axios from 'axios';
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import  Cookies from 'universal-cookie';
const cookies = new Cookies();


const Logout = () => {

    const [message, setMessage] = useState('');

    const logout = async () =>{
        await axios.get('http://localhost:9000/logout').then(
            (res) => {
                setMessage(res.data.message)
                cookies.remove('token')
                localStorage.removeItem('type')
                localStorage.clear()
            }
        ).catch(error=> {
            setMessage(error.message)
        })
    }
    
    logout()
    const navigate = useNavigate()

    return(
        
        <div>
            {/* <h1>{message}</h1> */}
            {navigate('/')}
        </div>
    )
}

export default Logout