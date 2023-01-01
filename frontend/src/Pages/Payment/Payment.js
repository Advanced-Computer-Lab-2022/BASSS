import axios from 'axios';
import {useEffect,useState} from 'react'
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { useLocation } from 'react-router-dom';


function Payment(props){
    //props.CoursId props.Title props.Price props.Currency
    const location = useLocation();
    const [stripePromise, setStripePromise] = useState(null)
    const [clientSecret, setClientSecret] = useState('')
    const [error, setError] = useState(null)
    const [wallet,setWallet] =useState(false)
    const price = parseFloat(location.state[0])


    useEffect(async () => {
        await axios.get('http://localhost:9000/individualTrainee/getKey').then(
            (res) => {
                const publishableKey = res.data.publishableKey
                setStripePromise(loadStripe(publishableKey))
            }
        )
    }, [])

    useEffect(async () => {
        try{
            await axios.post('http://localhost:9000/individualTrainee/paymentIntent', {currency: 'usd', amount: price*100}).then(
                (res) => {
                    setClientSecret(res.data.clientSecret)
                }
            )
        }catch(error){
            setError(error.response.data)
        }
    }, [])   
    
    useEffect(async () => {
        try{
            await axios.get("http://localhost:9000/individualTrainee/viewWallet").then(
                (res) => {
                    if(res.data >= price){
                        setWallet(true)
                    }
                }
            )
        }catch(error){
            setError(error.response.data)
        }
    }, [])   


    return(
        <>
        <div class='payment_body'>
        <div class="payment_card">
        <img src="https://seeklogo.com/images/V/VISA-logo-62D5B26FE1-seeklogo.com.png" class="payment_logo-card"/>
        <label class='payment_label'>Card number:</label>
        <label class='payment_input'>1234 1234 1234 1234</label>
        <br/><br/><br/><br/>
        <label class='payment_toleft payment_label '>Expiry:</label>
        <br/>
        <label class='payment_toleft payment_input' >MM/YY</label>
        <label class="payment_toright payment_label">CVC:</label>
        <br/>
        <label class="payment_toright payment_input">123</label>

        </div>
        
        {stripePromise && clientSecret &&
            <Elements stripe={stripePromise} options={{clientSecret}}>
                <CheckoutForm Wallet ={wallet} CourseId={location.state[2]} Title={location.state[1]} Price={price}/>
            </Elements>
        }
        {error && <label className='payment_error'>{error} </label>}
        </div>
        </>
    )
}

export default Payment