import axios from 'axios';
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import  Cookies from 'universal-cookie';
const Logout = () => {

    const [message, setMessage] = useState('');


    const logout = async () =>{
        await axios.get('http://localhost:9000/logout').then(
            (res) => {
                setMessage(res.data)
            }
        )

        Cookies.remove('token')
    }


    const navigate = useNavigate()
    logout()
    {navigate('/')}

    // return(
    //     <div>
    //         {navigate('/')}
    //     </div>
    // )
}

export default Logout