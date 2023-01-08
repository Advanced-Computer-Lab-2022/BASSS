import { useEffect, useState} from 'react';
import axios from 'axios';
import './Payment.css'
import { useStripe,useElements } from '@stripe/react-stripe-js';
import { PaymentElement, CardElement, PaymentMethodMessagingElement} from '@stripe/react-stripe-js';
import { FaWindows } from 'react-icons/fa';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function CheckoutForm(props){
    //props.CourseId , props.Price
    const stripe = useStripe()
    const elements = useElements()
    const [processing, setProcessing] = useState(false)
    const [status, setStatus] = useState('Pay')
    const [error, setError] = useState(null)
    const [payByWallet, setPayByWallet] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!stripe || !elements){
            return;
        }

        setProcessing(true);
        setStatus('Processing..')
        try{
            
            const pay = await stripe.confirmPayment({
                elements ,
                confirmParams:{
                    return_url: '/pay',        
                }, 
                redirect: 'if_required'     
            })
        }
        catch(error){
            setError(error.message)
        }
        setStatus('Payment Completed')
        setProcessing(false)
        payInst()
        enroll()



    }

    const payInst = async () =>{
        //call payInst in backend
        await axios.post("http://localhost:9000/individualTrainee/payInst",{amount: parseFloat(props.Price), course: props.CourseId})
        //test course ="637e73821194304d45a2fe5a"
      }
    
    const navigate = useNavigate();
    const enroll = async () => {
        //call enroll in backend
        try{
            await axios.post("http://localhost:9000/individualTrainee/enroll",{amount: parseFloat(props.Price), course: props.CourseId}).then(
                (res) => {
                    setStatus('Payment Complete')
                    window.alert('Successfully Enrolled') 
                    navigate('/IndividualTrainee')   
                }
            )
        }
        catch(error){
            window.alert(error.message)
        }
    }

    const checkPay = async (e) => {
        e.preventDefault()
        if(payByWallet){
            setStatus('Processing...')
            try{
               await axios.post("http://localhost:9000/individualTrainee/payByWallet",{amount: parseFloat(props.Price)})
                payInst()
                enroll()
                setStatus('Payment Complete')
            }catch(error){
               window.alert(error.response.data)
           }    
        }
    }

    const payWallet= async () => {
        setStatus('Processing...')
        try{
           await axios.post("http://localhost:9000/individualTrainee/payByWallet",{amount: parseFloat(props.Price)})
            payInst()
            enroll()
            setStatus('Payment Complete')
            window.alert('Successfully Enrolled')
            navigate('/IndividualTrainee')
       }catch(error){
           window.alert(error.response.data)
       }

   }




    return(
        <div class='checkout_div'>
        <label class='payment_title'>Paying for Course {props.Title} with amount {props.Price} {props.Currency}</label>

        {props.Wallet && 
            <div>
                <input type="radio" value='wallet' checked={payByWallet} onChange={()=> setPayByWallet(true)}></input>
                <label>Pay by wallet</label>
                <input type="radio" value='credit' checked={!payByWallet} onChange={()=> setPayByWallet(false)}></input>
                <label>Pay by credit</label>
                {payByWallet && <button class="payment_buybtn" onClick={checkPay}> {status} </button> }

            </div>
        }


        { !payByWallet &&
            <form style={{'padding-top': '10px', 'margin-top': '30px'}} onSubmit={handleSubmit}>
                <PaymentElement/>

                <button class="payment_buybtn" disabled={processing}> {status} </button> {/*currency*/}
            </form>
        }
        </div>
    )


}