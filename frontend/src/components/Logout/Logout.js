import axios from 'axios';
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import  Cookies from 'universal-cookie';
const cookies = new Cookies();


const Logout = () => {

    const [message, setMessage] = useState('');
    
    logout()

    const navigate = useNavigate()
    const logout = async () =>{
        await axios.get('http://localhost:9000/logout',{withCredentials: true}).then(
            (res) => {
                setMessage(res.data.message)
                cookies.remove('token')
                cookies.remove(cookies.getAll())
                localStorage.removeItem('type')
                localStorage.clear()
                window.alert('Logged out')
                navigate('/')

            }
        ).catch(error=> {
            setMessage(error.message)
        })
    }
}

export default Logout