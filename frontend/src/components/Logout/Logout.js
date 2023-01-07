import axios from 'axios';
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import  Cookies from 'universal-cookie';
const cookies = new Cookies();


const Logout = () => {

    const logout = async () =>{
        await axios.get('http://localhost:9000/logout').then(
            (res) => {
                cookies.remove('token')
                cookies.remove(cookies.getAll())
                localStorage.removeItem('type')
                localStorage.clear()
            }
            ).catch(error=> {
                window.alert(error.response.data)
            })
        }
        
        logout()
        const navigate = useNavigate()
        return(
            <div>
            {navigate('/')}
            {window.alert('Logged out')}

        </div>

    )
}

export default Logout