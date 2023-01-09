import axios from 'axios';
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import  Cookies from 'universal-cookie';
const cookies = new Cookies();


const Logout = () => {
    
    const navigate = useNavigate()
    const logout = async () =>{
        await axios.get('http://localhost:9000/logout').then(
            (res) => {
                cookies.remove('token')
                cookies.remove(cookies.getAll())
                localStorage.removeItem('type')
                localStorage.clear()
                navigate('/')
                window.alert('Logged out')

            }
        )   
        }
        logout()
}

export default Logout